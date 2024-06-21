import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    typecheck: {
        enabled: true,
        include: ["./challenges/**/task.test-d.ts"],
        tsconfig: "./tsconfig.json",
        only: true
    }
  },
})