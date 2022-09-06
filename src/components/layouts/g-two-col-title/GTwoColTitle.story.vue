<script lang="ts" setup>
import 'virtual:windi.css'
import GTwoColTitle from './GTwoColTitle.vue'
</script>

<template>
  <Story title="Layout/Two Columns With Title">
    <Variant title="Default">
      <div class="h-full w-full">
        <GTwoColTitle title="Title prop">
          <template #actions>
            <h1>Action</h1>
          </template>
          <template #aside>
            <h1>Aside</h1>
          </template>

          <template #main>
            <h1>Some main section</h1>
          </template>
        </GTwoColTitle>
      </div>
    </Variant>
  </Story>
</template>
