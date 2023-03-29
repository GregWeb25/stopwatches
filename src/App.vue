<template>
  <ul
      class="container"
  >
    <stop-watch
        v-for="stopwatch in stopwatches"
        :key="stopwatch.id"
    />
    <add-button
        v-on:add-stopwatch="addStopwatch"
    />
  </ul>
</template>

<script>
import addButton from '@/components/add-button/add-button';
import stopWatch from '@/components/stopwatch/stopwatch';
export default {
  name: 'App',
  components: {addButton, stopWatch},
  data(){
    return {
      stopwatches: [], // массив со счётчиками, в объекте имеется лишь одно поле - id
    }
  },
  methods: {
    addStopwatch(){
      this.stopwatches.push({id: this.stopwatches.length})
    }
  }
}

</script>

<style>
@import 'styles/index.css';
</style>
