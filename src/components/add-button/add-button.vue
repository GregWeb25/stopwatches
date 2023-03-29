<template>
  <panel>
    <button
        class="add-button"
        @click="$emit('add-stopwatch')"
    >
      <img
          src="../../../public/svg/plus.svg"
          alt="plus"
          class="plus"
      >
    </button>
  </panel>
</template>

<script>
import panel from '@/ui/panel/panel';
export default {
  name: 'add-button',
  components: {panel},
}
</script>

<style scoped>
@import 'add-button.css';
</style>