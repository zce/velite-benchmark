# @velite/benchmark

> Benchmark of [Velite](https://github.com/zce/velite) with most features.

## Results

500 markdown files, 50 mdx files, 1409 image assets, 51 yaml files.

### Cold Build [<7s]

```sh
➜  velite-benchmark git:(main) ✗ pnpm run build

> @velite/benchmark@0.1.0 build /Users/zce/Local/velite-benchmark
> velite build

[VELITE] output entry file in '.velite' in 0.64ms
[VELITE] output 51 categories, 300 tags, 50 pages, 500 posts in 24.20ms
[VELITE] output 1409 assets in 276.12ms
[VELITE] build finished in 6457.71ms
```

### Watch Rebuild [<100ms]

```sh
➜  velite-benchmark git:(main) ✗ pnpm run dev

> @velite/benchmark@0.1.0 dev /Users/zce/Local/velite-benchmark
> velite dev

[VELITE] output entry file in '.velite' in 0.61ms
[VELITE] output 300 tags, 51 categories, 50 pages, 500 posts in 23.40ms
[VELITE] output 1409 assets in 166.44ms
[VELITE] build finished in 5490.11ms
[VELITE] watching for changes in 'content'
[VELITE] changed: 'content/categories/journal-0.yml', rebuilding...
[VELITE] output 300 tags, 50 pages, 500 posts, 51 categories in 20.56ms
[VELITE] output 0 assets in 1.01ms
[VELITE] rebuild finished in 52.09ms
[VELITE] changed: 'content/pages/page-0.mdx', rebuilding...
[VELITE] output 51 categories, 300 tags, 500 posts, 50 pages in 19.99ms
[VELITE] output 0 assets in 0.89ms
[VELITE] rebuild finished in 51.97ms
[VELITE] changed: 'content/posts/post-43.md', rebuilding...
[VELITE] output 51 categories, 300 tags, 50 pages, 500 posts in 24.81ms
[VELITE] output 0 assets in 0.23ms
[VELITE] rebuild finished in 87.67ms
[VELITE] changed: 'content/tags/all-in-one.yml', rebuilding...
[VELITE] output 51 categories, 50 pages, 500 posts, 300 tags in 17.49ms
[VELITE] output 0 assets in 0.83ms
[VELITE] rebuild finished in 66.92ms
```

### Environment

- Node.js: v20.9.0
- CPU: Apple M2
- Memory: 8 GB

## Usage

```shell
$ pnpm install # install dependencies
$ pnpm run init # init test content
$ pnpm run dev # run build with watch mode
$ pnpm run build # build content by velite
```

### Issues

```js
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

Array.from({ length: 10 }).map(async () => {
  const begin = performance.now()
  await timeout(1000) // demo time-consuming operation
  console.log(performance.now() - begin) // expect 1000ms ~ 1050ms
})
```

When the number of executions is small, the difference between the actual result and the expected result is not significant.

However, when the number of executions is large, the difference between the actual result and the expected result is significant.

```js
Array.from({ length: 10000 }).map(async () => {
  const begin = performance.now()
  await timeout(1000) // demo time-consuming operation
  console.log(performance.now() - begin) // actual longer and longer
})
```

I know that the reason is that the lot of microtasks in the event loop will affect the execution time of the next task. This is also normal.

But I want to know how to get the expected result. Ignoring the impact of task queues and accurately monitoring the time spent on a time-consuming operation.

Thanks for your help.
