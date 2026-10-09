/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', panel: 'var(--panel)', line: 'var(--line)',
        fg: 'var(--fg)', muted: 'var(--muted)', accent: 'var(--accent)',
      },
      fontFamily: { mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'] },
    },
  },
  plugins: [],
}
