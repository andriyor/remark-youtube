# remark-youtube-thumbnail

This plugin converts a YouTube embed to a Markdown thumbnail.

From:

```text
![Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster) - YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

To:

```text
[![Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster) - YouTube](https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster) - YouTube")
```

## Usage

Separate output file

```shell
npx remark input.md -o output.md
```

In place

```shell
npx remark-cli input.md --output 
```

Multiple files or folders

```shell
npx remark . --ext md --output
```
