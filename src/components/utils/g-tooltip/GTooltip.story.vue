<script lang="ts" setup>
import 'virtual:windi.css'
import { reactive } from 'vue'
import GTooltip from './GTooltip.vue'

// const stateLabel = reactive({
//   label: 'G&RO',
// })
</script>

<template>
  <Story title="Utils/Tooltip" :layout="{ type: 'grid', width: 400 }">
    <!-- eslint-disable vue/attribute-hyphenation -->
    <Variant title="Top tooltip">
      <div class="pt-20 flex items-center justify-center">
        <GTooltip text="Here" placement="top">
          <div class="bg-orange-600 text-white rounded py-2 px-5">Pasa por aquí!</div>
        </GTooltip>
      </div>
    </Variant>
    <Variant title="Bottom tooltip">
      <div class="pb-20 flex items-center justify-center">
        <GTooltip text="Here" placement="bottom">
          <div class="bg-orange-600 text-white rounded py-2 px-5">Pasa por aquí!</div>
        </GTooltip>
      </div>
    </Variant>
    <Variant title="Right tooltip">
      <div class="pr-20 flex items-center justify-center">
        <GTooltip text="Here" placement="right">
          <div class="bg-orange-600 text-white rounded py-2 px-5">Pasa por aquí!</div>
        </GTooltip>
      </div>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Avatar

### ¿Cómo funciona?

El Avatar soporta 2 modos _imagen_ y _Label_:

```js
<GAvatar label="G&RO" />
```

```js
<GAvatar imagen="https://avatars.dicebear.com/api/bottts/gyro.svg" />
```

### Tamaño

Por defecto, el Avatar toma un tamaño de 6rem, para sobreescribir esta propiedad:

```js
<GAvatar label="G&RO" class="h-4 w-4" />
```

### Forma

El Avatar soporta dos estilos de forma _rounded_ y _square_, sin embargo, esta última tendrá un radio de para cada esquina.

Por defecto, se toma _square_ y _rounded_ es la alternativa.

```js
<GAvatar label="G&RO" :is-rounded="true" />
```

### Customize

El Avatar puede ser modificado fácilmente usando el slot por defecto en lugar de usar las demás propiedades. Tenga en cuenta que el estilo será aplicado, sólo podrá modificar el contenido

```js
<GAvatar>
  <p>Hey!</p>
  <hr />
  <p>It's Customized</p>
</GAvatar>
```

### Propiedades

| Nombre    | Tipo   | Default | Descripción                                               |
| --------- | ------ | ------- | --------------------------------------------------------- |
| isRounded | String | null    | Define la forma del Avatar                                |
| label     | String | null    | Define el texto a mostrar (Siempre toma la primera letra) |
| image     | String | null    | Define la imagen a mostrar                                |

### Styling

Por defecto, el Avatar toma las siguientes clases:

```js
'h-24 w-24 bg-gray-100 rounded-full ring-4 m-1 ring-white flex items-center justify-center shadow'
```

Si desea modificarlas puede seguir los mismos pasos que en la sección [Tamaño](#tamano) usando estilos css o las utilidades de [WindiCSS](https://windicss.org/)
</docs>