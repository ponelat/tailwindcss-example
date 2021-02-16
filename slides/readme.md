# Slides
Build these slides with [Marp CLI](https://github.com/marp-team/marp-cli)

Installing Marp
```shell
npm install --save-dev @marp-team/marp-cli
```
Running slide-deck

```shell
npx marp ./slides -s
```
Converting to PDF
```shell
npx marp --allow-local-files --pdf ./slides.md
```

> WARNING: They warn about local files, which I use here. Don't use that flag with untrusted content!
