# Viro

Viro is a Vue 3 + Vite + WindiCSS + i18n starter template to scaffold new projects.

## Table of contents

- [Setup](#setup)
- [Build](#build)
- [Features](#features)
  - [Vue + Vite](#-vue--vite)
  - [TypeScript - SCSS](#-typescript---scss)
  - [File system routing](#-file-system-routing)
  - [Layouts system](#-layouts-system)
  - [Path Aliasing](#-path-aliasing)
  - [Icons](#-icons)
  - [Eslint + Prettier](#-eslint--prettier)
  - [Internationalization: vue-i18n and vue-i18n-extract](#-internationalization-vue-i18n-and-vue-i18n-extract)

## Setup

Install Dependencies

```
npm install
```

Start the development server

```
npm run dev
```

## Build

To build the app, run

```
npm run build
```

And to preview it, after building the app run

```
npm run serve
```

## Features

### Vue + Vite

This template uses the version 3 of Vue with the version 2 of Vite.

See the docs for better understanding:

- [Vue 3 Docs](https://v3.vuejs.org)
- [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- [Vite Docs](https://vitejs.dev/guide/features.html)

### TypeScript - SCSS

See:

- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)

### File system routing

See:

- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### Layouts system

Vue components in the `src/layouts` dir are used as layouts.
By default, `index.vue` will be used unless an alternative is specified in the route meta.

You can specify the layout in the page's SFCs like this as stated in the example:

```vue
<route lang="yaml">
meta:
  layout: main
</route>
```

See:

- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### Path Aliasing

`@/` is aliased to the `./src/` folder.

### Icons

This template allows you to use icons from any icon set with the help of [iconify](https://iconify.design/) and [unplugin-icons](https://github.com/antfu/unplugin-icons). And don't worry, **only** the icons you use would be included in the final bundle.

The convention to use icons is as follows:

```
{prefix}-{collection}-{icon}
```

Where the `prefix` is "i", the `collection` is the collection ID from https://icon-sets.iconify.design/,
and finally the `icon` is the icon name.

See:

- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [iconify](https://iconify.design/)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [Icônes - to search for icons available in iconify](https://icones.js.org/)

### Eslint + Prettier

See:

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/docs/en/comparison.html)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)

#### The Navigation Guards

The navigation guards protects pages from non-authenticated users and redirect them to the login page,
by default **all** pages are public.

In order to make a private page, a route meta boolean called `public` needs to be
configured in the page. E.g:

```vue
<!-- pages/index.html -->
<route lang="yaml">
meta:
  private: true
</route>
```

#### The Axios Interceptors

The axios interceptors helps appending auth information to requests and responses of APIs.

The main interceptor adds the `Authorization` header with a value of `Bearer the-token-value` to all authenticated requests.

This can be configured and disabled in the `createAuth` options:

See:

- [Axios - Interceptors](https://github.com/axios/axios#interceptors)

### Internationalization: vue-i18n and vue-i18n-extract

The `vue-i18n` package is used as the internationalization system.

All translation files located in the `locales` dir are loaded automatically with the corresponding language code obtained from the file name, e.g. `locales/es.json` -> lang code: `es`.

Additionally we've implemented the option to add dynamic values in extra json files, internally we join files for each language in order to get one single translation file when running the project, if you want to delete or add a new translation file:

```ts
// src/plugins/i18n.ts

const customFiles = import.meta.globEager('../../locales/extra/*.json') // Get files for extra custom messages

const files = { ...localeFiles, ...customFiles }
```

This enables translation for multiple scenarios like strings pulled from database.

**How to use it?**

Put the texts in the original language inside the function of vue-i18n, for example:

```html
<!-- Single or double quote, and template literals -->
<p>{{ $t('Hello World') }} {{ $t("Hello, how are you?") }} {{ $t(`Hey. I'm watching you!`) }}</p>

<!-- *Note: to be able to use it in tags or when we send text to a component, we must use the single quote format
and bind it to the attribute. -->

<MyComponent :text="$t('example text')" />

// In TS:
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  t('This is an example')
</script>
```

**Vue i18n extract**

Manually extracting the texts from vue or js,ts files is a complex task, we are often lazy to do so or we forget to add them, therefore we lose the sync between the translations files and the source code, that's why we use `vue-i18n-extract`, a handy tool that runs static analysis of the source code files and extracts the translation texts from the source code and add them to the translations files like `es.json`, `en.json`, `de.json`, etc. It no only adds the missing keys but also with a command we can remove the no longer used translations.

To extract the keys/original text into the translations files, run:

```
npm run extract-translations
```

This executes the command located in `package.json`, which will search for the keys in the vue files given, compare it with the files inside the lang folder and if it finds new words, it will add them.

This script uses the [vue-i18n-extract.config.js](./vue-i18n-extract.config.js) file for its configuration. This file is located in the root of the project.

**Adding a new language:**

To add a new language, for instance the German language, just create its file inside the `locales` folder using its language code, example: `./locales/de.json`. Then run `npm run vue-i18n-extract` to populate the translation keys into that file.

> _IMPORTANT_: When creating the file, make it a valid JSON file, then at least it must has `{}`, otherwise the extraction would fail.

Example:

```js
// locales/es.json

{
}
```

The file would be loaded automatically by `vite`, a vite restart may be needed.

**Removing unused translations**

In case you want to remove the keys that are in the translation files but are not being used in the vue files, you can run:

```
npm run remove-translations
```

See:

- [Vue i18n](https://vue-i18n.intlify.dev/)
- [Vue i18n extract](https://github.com/pixari/vue-i18n-extract)
- [i18n plugin](./src/plugins/i18n.ts)
