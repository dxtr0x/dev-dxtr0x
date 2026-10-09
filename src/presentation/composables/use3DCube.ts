import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import * as THREE from 'three'

const QUARTER = Math.PI / 3

export function use3DCube(host: Ref<HTMLElement | null>) {
  let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera
  let cube: THREE.LineSegments, raf = 0, ro: ResizeObserver
  const target = { x: 0.5, y: 0.7, z: 0 }
  let dragging = false, moved = 0, lastX = 0, lastY = 0

  const turn = (axis: 'x' | 'y' | 'z') => { target[axis] += QUARTER }
  const onKey = (e: KeyboardEvent) => {
    const k = e.key.toLowerCase()
    if (k === 'r') turn('y'); else if (k === 'u') turn('x'); else if (k === 'f') turn('z')
  }
  const down = (e: PointerEvent) => { dragging = true; moved = 0; lastX = e.clientX; lastY = e.clientY; renderer.domElement.setPointerCapture(e.pointerId) }
  const move = (e: PointerEvent) => {
    if (!dragging) return
    const dx = e.clientX - lastX, dy = e.clientY - lastY
    moved += Math.abs(dx) + Math.abs(dy); lastX = e.clientX; lastY = e.clientY
    target.y += dx * 0.01; target.x += dy * 0.01
    cube.rotation.y += dx * 0.01; cube.rotation.x += dy * 0.01
  }
  const up = () => { if (dragging && moved < 4) turn('y'); dragging = false }

  const resize = () => {
    const el = host.value; if (!el) return
    const { clientWidth: w, clientHeight: h } = el
    renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix()
  }

  onMounted(() => {
    const el = host.value; if (!el) return
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100); camera.position.z = 5
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    el.appendChild(renderer.domElement)
    renderer.domElement.style.touchAction = 'none'; renderer.domElement.style.cursor = 'grab'

    cube = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2)), new THREE.LineBasicMaterial({ color: 0x7ee787 }))
    cube.rotation.set(target.x, target.y, target.z)
    scene.add(cube)

    renderer.domElement.addEventListener('pointerdown', down)
    renderer.domElement.addEventListener('pointermove', move)
    renderer.domElement.addEventListener('pointerup', up)
    window.addEventListener('keydown', onKey)
    ro = new ResizeObserver(resize); ro.observe(el); resize()

    const loop = () => {
      raf = requestAnimationFrame(loop)
      if (!dragging) target.y += 0.002 // idle drift
      cube.rotation.x += (target.x - cube.rotation.x) * 0.1
      cube.rotation.y += (target.y - cube.rotation.y) * 0.1
      cube.rotation.z += (target.z - cube.rotation.z) * 0.1
      renderer.render(scene, camera)
    }
    loop()
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf); ro?.disconnect(); window.removeEventListener('keydown', onKey)
    cube?.geometry.dispose(); (cube?.material as THREE.Material | undefined)?.dispose()
    renderer?.dispose(); renderer?.domElement.remove()
  })
}
