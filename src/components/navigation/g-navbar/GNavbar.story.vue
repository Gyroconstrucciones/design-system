<script lang="ts" setup>
import 'virtual:windi.css'
import GNavbar from './GNavbar.vue'
import GAvatar from '@/components/utils/g-avatar/GAvatar.vue'
</script>

<template>
  <Story title="Navigation/Navbar">
    <Variant title="Default">
      <div class="h-100">
        <GNavbar>
          <template #left> <h1>G&RO</h1></template>
          <template #center> <a>Inicio</a></template>
          <template #right> <a>Cerrar sesión</a></template>
        </GNavbar>
      </div>
    </Variant>

    <Variant title="Color">
      <div class="h-100">
        <GNavbar class="text-white bg-blue-700">
          <template #left> <h1>G&RO</h1></template>
          <template #right> <a>Inicio</a> <a>Contacto</a></template>
        </GNavbar>
      </div>
    </Variant>

    <Variant title="Advanced">
      <div class="h-100">
        <GNavbar class="!bg-dark-900 text-white">
          <template #left>
            <button type="button" class="border-r border-gray-200 pr-4 text-gray-500 flex md:hidden">
              <i-eva:menu-2-fill class="h-6 w-6" />
            </button>
            <span class="pl-4 md:p-0">G&RO</span>
          </template>

          <template #right>
            <a> <GAvatar class="!h-8 !w-8" :label="'A'" /> </a>
            <a class="text-xs">Cerrar sesión</a>
          </template>
        </GNavbar>
      </div>
    </Variant>
  </Story>
</template>
