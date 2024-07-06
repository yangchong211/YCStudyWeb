import { readdirSync } from 'node:fs'
import { request } from 'node:https'
import { resolve } from 'node:path'

const plugins = (
  await Promise.all(
    readdirSync(resolve(process.cwd(), 'plugins'))
      .map((category) =>
        readdirSync(resolve(process.cwd(), 'plugins', category)).map(
          (packageName) =>
            import(`../plugins/${category}/${packageName}/package.json`, {
              assert: { type: 'json' },
            }),
        ),
      )
      .flat(),
  )
).map(({ default: { name } }: { default: { name: string } }) => name)

const themes = (
  await Promise.all(
    readdirSync(resolve(process.cwd(), 'themes')).map(
      (packageName) =>
        import(`../themes/${packageName}/package.json`, {
          assert: { type: 'json' },
        }),
    ),
  )
).map(({ default: { name } }: { default: { name: string } }) => name)

const tools = (
  await Promise.all(
    readdirSync(resolve(process.cwd(), 'tools')).map(
      (packageName) =>
        import(`../tools/${packageName}/package.json`, {
          assert: { type: 'json' },
        }),
    ),
  )
).map(({ default: { name } }: { default: { name: string } }) => name)

const syncNpmMirror = (pkg: string): Promise<void> =>
  new Promise<void>((resolve) => {
    const req = request(
      `https://registry-direct.npmmirror.com/${pkg}/sync?sync_upstream=true`,
      {
        method: 'PUT',
        headers: {
          'Content-Length': 0,
        },
      },
    )

    req.write('')

    req.on('close', () => {
      resolve()
    })

    req.end()
  })

await Promise.all([...plugins, ...themes, ...tools].map(syncNpmMirror))
