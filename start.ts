import { Processor } from '@ugdu/processor'
import { serve } from '@ugdu/packer'

import Vue from '@vitejs/plugin-vue'

new Processor()
  .task(serve)
  .hook('get-config', () => {
    return {
      apps: [{ name: '@pnpm8/container', packages: (lps) => lps.map((lp) => lp.name) }],
      extensions: ['vue', 'ts'],
      meta: 'local',
      vite: {
        plugins: [Vue()],
      },
    } as any
  })
  .run()
