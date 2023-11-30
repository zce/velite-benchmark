# @velite/benchmark

> Benchmark of [Velite](https://github.com/zce/velite) with most features.

## Results

### Cold start

**12641.64ms**

```shell
[VELITE] wrote './.velite/categories.json' with 51 categories
[VELITE] wrote './.velite/tags.json' with 1 tags
[VELITE] wrote './.velite/pages.json' with 50 pages
[VELITE] wrote './.velite/posts.json' with 500 posts
[VELITE] output 51 categories, 1 tags, 50 pages, 500 posts
[VELITE] loaded 4 collections in 12438.89ms
[VELITE] build finished in 12641.64ms
```

### Rebuild

```shell
> @velite/benchmark@0.1.0 dev /Users/zce/Local/velite-benchmark
> velite dev

[VELITE] output 51 categories, 1 tags, 50 pages, 500 posts
[VELITE] build finished in 12113.11ms
[VELITE] watching for changes in './content'
[VELITE] file changed 'posts/post-0.md', rebuilding...
[VELITE] output 51 categories, 1 tags, 50 pages, 500 posts
[VELITE] rebuild finished in 137.44ms
[VELITE] file changed 'pages/page-0.mdx', rebuilding...
[VELITE] output 51 categories, 1 tags, 500 posts, 50 pages
[VELITE] rebuild finished in 50.92ms
[VELITE] file changed 'categories/journal-0.yml', rebuilding...
[VELITE] output 1 tags, 50 pages, 500 posts, 51 categories
[VELITE] rebuild finished in 41.19ms
[VELITE] file changed 'tags/all-in-one.yml', rebuilding...
[VELITE] output 51 categories, 50 pages, 500 posts, 1 tags
[VELITE] rebuild finished in 64.10ms
```

### Environment

- Node.js: v20.9.0
- CPU: Apple M2
- Memory: 8 GB

## Usage

```shell
$ npm install # install dependencies
$ npm run init # init test content
$ npm run dev # run build with watch mode
$ npm run build # build content by velite
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
