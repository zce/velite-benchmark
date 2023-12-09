// import glob from 'fast-glob'
// import { readFile, readdir } from 'node:fs/promises'

// const load = async root => {
//   const begin = performance.now()
//   const dirs = await readdir(root)
//   console.log(dirs)
//   await Promise.all(
//     dirs.map(async dir => {
//       const begin = performance.now()
//       const files = await glob(`${dir}/**/*.{md,mdx,yml}`, { cwd: root })
//       await Promise.all(
//         files.map(async file => {
//           const begin = performance.now()
//           const value = await readFile(`${root}/${file}`, 'utf8')
//           for (let i = 0; i < 1000; i++) {
//             JSON.parse(JSON.stringify(value))
//           }
//           console.log(`load ${file} in ${performance.now() - begin}ms`)
//         })
//       )
//       console.log(`load ${files.length} files in ${performance.now() - begin}ms`)
//     })
//   )
//   console.log(`load ${dirs.length} dirs in ${performance.now() - begin}ms`)
// }

// load('content')
