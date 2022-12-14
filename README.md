# G&RO Construcciones Design System

As a company we have multiple products in different platforms where we were using some repetitive code and components, that's when G&RO's design system came to life. It's still really new and we are adding various components.

## Roadmap

### Forms
- [ ] Input (In Progress)
- [x] Select
- [ ] CurrencyInput
- [ ] InputFile
- [ ] Select
- [ ] Autocomplete
- [ ] SearchBox

### Layouts
- [x] Two Columns With Title Layout

### Navigation
- [x] Navbar
- [x] Navigation Item (Sidebar)(Improvement)
- [x] Sidebar
- [ ] Mobile Sidebar

### Utils
- [x] Avatar (Improvement)
- [x] Card
- [x] Loader
- [x] Tag (Improvement)
- [ ] Tooltip (In Progress)

## Tech

- WindiCSS
- Histoire - TailwindCSS
- Iconify
- Typescript
- Vite
- Vue3
- Eslint
- Prettier
- Sass

## How To Use It?

```
npm i --save gyro-ds
```

In your main entry file (main.ts - index.ts ....) import the library Styles
```
import 'gyro-ds/dist/style.css'
```

And to use each component you'll have to import it wherever you need it.
```
import { GCard } from 'gyro-ds'
import { GInput } from 'gyro-ds'
``` 
