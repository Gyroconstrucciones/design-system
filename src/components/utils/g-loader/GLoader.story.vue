<script setup lang="ts">
import 'virtual:windi.css'
import { reactive } from 'vue'
import GLoader from './GLoader.vue'

const state = reactive({
  isLoading: true,
})
</script>

<template>
  <Story title="Utils/Loader" :layout="{ type: 'grid' }">
    <Variant title="Default">
      <GLoader v-bind="state" />
    </Variant>
    <Variant title="Customized">
      <GLoader v-bind="state" class="!text-red-500 !text-5xl" />
    </Variant>
  </Story>
</template>

<docs lang="md">
## Loader

### ¿Cómo funciona?

Se muestra un icono que demuestra al usuario un estado de espera, está determinado por la propiedad _isLoading_, de acuerdo a esta, el componente será renderizado o no.

```vue
<GLoader :isLoading="true" />
```

### Propiedades

| Nombre    | Tipo    | Default | Descripción                             |
| --------- | ------- | ------- | --------------------------------------- |
| isLoading | Boolean | null    | Define si el Loader es renderizado o no |

### Styling

Por defecto, toma las siguientes clases:

```js
'h-full w-full flex items-center justify-center text-4xl dark:text-gray-100 text-gray-500'
```

Si desea modificarlas puede lograrlo usando estilos css o las utilidades de [WindiCSS](https://windicss.org/) como se muestra en la variante **Customized**
</docs>
