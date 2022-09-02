<script setup lang="ts">
import { hstEvent } from 'histoire/client'
import 'virtual:windi.css'
import { reactive } from 'vue'
import GTag from './GTag.vue'

const state = reactive({
  label: 'Google',
})
const stateImg = reactive({
  label: 'Google',
  image:
    'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBib3l8ZW58MHx8MHx8&w=1000&q=80',
})
const styled = reactive({
  label: 'Google',
  bgColor: 'bg-blue-700',
  textColor: 'text-white',
})
</script>

<template>
  <Story title="Utils/Tag" :layout="{ type: 'grid', width: '250px' }">
    <Variant title="default">
      <GTag v-bind="state" />
    </Variant>
    <Variant title="Icon">
      <GTag v-bind="state">
        <template #icon>
          <i-akar-icons:google-fill />
        </template>
      </GTag>
    </Variant>
    <Variant title="Image">
      <GTag v-bind="stateImg" />
    </Variant>
    <Variant title="Advanced Tag">
      <GTag v-bind="stateImg" @clicked="hstEvent('Click', $event)">
        <template #btnIcon> <i-eva:close-outline /> </template>
      </GTag>
    </Variant>
    <Variant title="Customized">
      <GTag class="py-2" v-bind="styled" @clicked="hstEvent('Click', $event)">
        <template #btnIcon> <i-eva:close-outline /> </template>
      </GTag>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Tag

### ¿Cómo funciona?

Representa entidades e información relevante usando iconos, labels e imagenes, tiene disponible un botón de acción

```vue
<GTag label="Google" />
```

### Tamaño

Por defecto, toma el height necesario para que todos sus componentes sean visibles.

### Customize

Puede ser modificado fácilmente usando slots y props que pueden añadirse de forma individual o todos al mismo tiempo de la siguiente forma:

#### Icon

Cuenta con un slot con espacio y estilos definidos para el uso de un icono

```vue
<GTag label="Google">
  <template #icon>
    <akar-icons-google-fill />
  </template>
</GTag>
```

#### Image

Cuenta con una prop que recibe el url para renderizar una imagen.

```vue
<GTag
  label="Google"
  image="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBib3l8ZW58MHx8MHx8&w=1000&q=80"
/>
```

#### Botón

Cuenta con un template que recibe un icono para renderizar en un botón

```vue
<GTag label="Google" @clicked="hstEvent('Click', $event)">
  <template #btnIcon>
    <eva-close-outline />
  </template>
</GTag>
```

### Propiedades

| Nombre    | Tipo   | Default | Descripción                                  |
| --------- | ------ | ------- | -------------------------------------------- |
| label     | String | null    | Define el texto del tag                      |
| image     | String | null    | Define el url que renderizará la img         |
| bgColor   | String | null    | Define el color de fondo: bg-{color}-{hue}   |
| textColor | String | null    | Define el color de texto: text-{color}-{hue} |

### Slots

| Nombre  | Descripción                                              |
| ------- | -------------------------------------------------------- |
| icon    | Icono para usar al lado del texto, con la etiqueta <i /> |
| btnIcon | Icono para usar en el botón, con la etiqueta <i />       |

### Events

| Nombre  | Descripción                                                     |
| ------- | --------------------------------------------------------------- |
| clicked | Se obtiene cuando el usuario ha seleccionado el botón de acción |

### Styling

Si desea modificar las clases que tiene por defecto puede lograrlo usando estilos css o las utilidades de [WindiCSS](https://windicss.org/), esto puede involucrar cambio de color de fondo o color de texto
</docs>
