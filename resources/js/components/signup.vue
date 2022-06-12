<template>
    <div id="nav">
        <h1>{{ title }}</h1>
  </div>
  <router-view />
</template>
<script>
export default {
    setup: () => ({
        title: 'How To Install Vue 3 in Laravel 8 From Scratch'
    })
}
</script>