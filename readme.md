# @velite/benchmark

> Benchmark of [Velite](https://github.com/zce/velite) with most features.

## Results

### Cold Build

51 categories, 300 tags, 50 pages, 500 posts, 1409 assets

**9000ms - 10000ms**

```shell
[VELITE] output entry file in '.velite' in 0.92ms
[VELITE] output 51 categories, 300 tags, 50 pages, 500 posts in 40.36ms
[VELITE] output 1409 assets in 421.71ms
[VELITE] build finished in 9298.56ms
```

### Rebuild

```shell
➜  velite-benchmark git:(main) ✗ pnpm run dev

> @velite/benchmark@0.1.0 dev /Users/zce/Local/velite-benchmark
> velite dev

[VELITE] output entry file in '.velite' in 0.93ms
[VELITE] output 300 tags, 51 categories, 50 pages, 500 posts in 40.67ms
[VELITE] output 1409 assets in 262.63ms
[VELITE] build finished in 9259.37ms
[VELITE] watching for changes in 'content'
[VELITE] changed: 'content/categories/journal-0.yml', rebuilding...
[VELITE] output 51 categories, 300 tags, 50 pages, 500 posts in 23.92ms
[VELITE] output 0 assets in 0.58ms
[VELITE] rebuild finished in 55.44ms
[VELITE] changed: 'content/pages/page-0.mdx', rebuilding...
[VELITE] output 51 categories, 300 tags, 50 pages, 500 posts in 23.16ms
[VELITE] output 0 assets in 0.58ms
[VELITE] rebuild finished in 62.31ms
[VELITE] changed: 'content/posts/post-124.md', rebuilding...
[VELITE] output 51 categories, 300 tags, 50 pages, 500 posts in 21.12ms
[VELITE] output 0 assets in 0.41ms
[VELITE] rebuild finished in 92.73ms
[VELITE] changed: 'content/tags/all-in-one.yml', rebuilding...
[VELITE] output 51 categories, 300 tags, 50 pages, 500 posts in 21.92ms
[VELITE] output 0 assets in 0.55ms
[VELITE] rebuild finished in 68.40ms
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
