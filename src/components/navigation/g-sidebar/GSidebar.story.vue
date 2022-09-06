<script lang="ts" setup>
import 'virtual:windi.css'
import { reactive } from 'vue'
import GSidebar from './GSidebar.vue'
import MdiAlarm from '~icons/mdi/alarm'
import MdiCalendarEdit from '~icons/mdi/calendar-edit'

const menu = reactive({
  menu: [
    {
      name: '',
      items: [{ name: 'Home', route: 'index', icon: MdiAlarm, isAvailable: true, isActive: true }],
    },
    {
      name: 'Management',
      items: [
        { name: 'Categories', route: 'settings-categories', icon: MdiCalendarEdit, isAvailable: true },
        { name: 'Products', route: 'settings-products', icon: MdiCalendarEdit, isAvailable: true },
      ],
    },
  ],
})
</script>

<template>
  <Story title="Navigation/Sidebar">
    <Variant title="Default">
      <div class="h-100">
        <GSidebar v-bind="menu" />
      </div>
    </Variant>
    <Variant title="Header">
      <div class="h-100">
        <GSidebar v-bind="menu">
          <h1 class="text-white">G&RO Construcciones</h1>
        </GSidebar>
      </div>
    </Variant>
  </Story>
</template>
