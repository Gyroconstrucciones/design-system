<route lang="yaml">
meta:
  layout: main
</route>

<template>
  <h1 class="text-3xl">{{ $t('Home Page') }}</h1>
  <p>{{ $t('This page correspond to the /home URL generated from this file name and location') }}</p>

  <router-link class="btn btn-primary my-4" :to="{ name: 'index' }">{{ $t('To Index') }}</router-link>
</template>
