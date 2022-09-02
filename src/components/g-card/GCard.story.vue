<script lang="ts" setup>
import GCard from './GCard.vue'
import 'virtual:windi.css'
import { reactive } from 'vue'
import { hstEvent } from 'histoire/client'

const state = reactive({
  isClickable: false,
})
</script>

<template>
  <Story title="Panel/Card" :layout="{ type: 'grid', width: '300px' }">
    <!-- eslint-disable vue/attribute-hyphenation -->
    <Variant title="Card">
      <GCard v-bind="state" @clicked="hstEvent('Click', $event)">
        <h1 class="font-bold">This is a simple card!</h1>
      </GCard>
    </Variant>

    <Variant title="Card with footer">
      <GCard v-bind="state" @clicked="hstEvent('Click', $event)">
        <h1 class="font-bold">This is a simple card!</h1>
        <template #footer>
          <p>This is a footer</p>
        </template>
      </GCard>
    </Variant>

    <Variant title="Advanced card">
      <GCard v-bind="state" @clicked="hstEvent('Click', $event)">
        <div>
          <img
            src="https://images.pexels.com/photos/56832/road-asphalt-space-sky-56832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="h-40 fit-cover mb-5 rounded-md w-100"
          />
          <h1 class="font-bold">This is an advanced card!</h1>
          <p class="text-xs text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <template #footer>
          <div class="flex justify-end w-full">
            <button class="bg-orange-700 p-2 rounded text-white font-bold">Aceptar</button>
          </div>
        </template>
      </GCard>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Card

### ¿Cómo funciona?

Su layout está dividido en 2 partes, el contenido principal que hace uso del default slot y el Footer usando el footer slot, los dos son opcionales pero si se quiere mostrar algún contenido en la card, debe definirse alguno de los 2, o los 2.

```vue
<GCard v-bind="state" @clicked="hstEvent('Click', $event)">
  <h1 class="font-bold">This is a simple card!</h1>
  <template #footer>
    <p>This is a footer</p>
  </template>
</GCard>
```

### Tamaño

Por defecto, toma el width del contenedor padre y el height necesario para que todos sus componentes sean visibles.

### Customize

El Avatar puede ser modificado fácilmente usando el slot por defecto como se ve en **Advanced Card**

### Propiedades

| Nombre      | Tipo    | Default | Descripción                                      |
| ----------- | ------- | ------- | ------------------------------------------------ |
| isClickable | Boolean | null    | Define si la card lanza un evento al darle click |

### Slots

| Nombre  | Descripción                             |
| ------- | --------------------------------------- |
| default | Contiene los compontes básicos          |
| footer  | Contiene los componentes para el footer |

### Events

| Nombre  | Descripción                                          |
| ------- | ---------------------------------------------------- |
| clicked | Se obtiene cuando el usuario ha seleccionado la card |

### Styling

Por defecto, toma las siguientes clases:

```js
'py-3 px-3 mb-2 mt-1 border-1 rounded-xl text-left text-dark-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600'
```

Si desea modificarlas puede lograrlo usando estilos css o las utilidades de [WindiCSS](https://windicss.org/)
</docs>
