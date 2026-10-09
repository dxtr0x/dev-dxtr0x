import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { ProjectRepositoryImpl } from '@/data/repositories/ProjectRepositoryImpl'
import { GetProjectsUseCase } from '@/usecases/GetProjectsUseCase'
import { useProjectStore } from '@/presentation/store/useProjectStore'

export function useProjects() {
  const store = useProjectStore()
  const getProjects = new GetProjectsUseCase(new ProjectRepositoryImpl())
  onMounted(async () => store.setProjects(await getProjects.execute()))
  return { store, ...storeToRefs(store) }
}
