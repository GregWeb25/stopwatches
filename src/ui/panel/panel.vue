<template>
  <div
      class="panel"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'app-panel'
}
</script>

<style scoped>
@import 'panel.css';
</style>