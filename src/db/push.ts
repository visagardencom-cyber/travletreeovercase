import { spawnSync } from 'node:child_process'

const result = spawnSync('supabase', ['db', 'push'], {
  stdio: 'inherit',
})

if (result.error) {
  console.error('Failed to run Supabase CLI:', result.error)
  process.exit(1)
}

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}
