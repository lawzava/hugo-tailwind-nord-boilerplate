# Hugo Tailwind Nord Boilerplate

## Prerequisites

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. 
This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
npm install -g postcss-cli
npm install -g autoprefixer
npm install
```

Make sure to use a minimum Hugo version of v0.80.0 and above.

## Usage

Run `hugo server --disableFastRender` for livereload local version.

Run `hugo --gc --minify` to compile a production-ready version into `public` directory.

## Reference

Documentation for Hugo's [PostCSS setup](https://gohugo.io/hugo-pipes/postprocess/).

Documentation for [Tailwind CSS setup of calling PurgeCSS manually](https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss-manually).

Color scheme for [Nord Theme](https://nordtheme.com).
