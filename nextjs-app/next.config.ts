import type { NextConfig } from 'next'

// standalone: next build leaves a server.js with only the files it needs,
// which homeport ships and runs on Node
const config: NextConfig = { output: 'standalone' }

export default config
