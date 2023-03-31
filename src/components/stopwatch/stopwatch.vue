<template>
  <panel>
    <div
        class="stopwatch"
        :class="{active: isActive}"
    >
      <div
          class="time-container"
          :class="{active: isActive}"
      >
        <span
            class="time-text"
        >{{formatedTime}}</span>
      </div>
      <div
          class="buttons-container"
      >
        <div>
          <button
              class="stopwatch_button"
              @click="switchButton"
          >
            <img
                v-if="isActive"
                src="../../../public/svg/pause.svg"
                alt="pause"
                class="active-svg"
            >
            <img
                v-else
                src="../../../public/svg/play.svg"
                alt="pause"
            >
          </button>
          <button
              class="stopwatch_button"
              @click="reset"
          >
            <img
                src="../../../public/svg/reset.svg"
                alt="square"
                :class="{'active-svg': isActive}"
            >
          </button>
        </div>
      </div>
    </div>
  </panel>
</template>

<script>
import panel from '@/ui/panel/panel';
import timeFormat from '../../../utils/timeFormat';
export default {
  name: 'stop-watch',
  components: {panel},
  data(){
    return{
      isActive: false,
      time: 0,
    }
  },
  methods: {
    switchButton(){
      this.isActive = !this.isActive;
    },
    reset(){
      this.isActive = false;
      this.time = 0;
    },
    calculateTime(startTime){
      let time = Math.floor((Date.now() - startTime)/1000);
      return time;
    }
  },
  watch: {
    isActive(oldValue){
      if(oldValue){
        const startTime = Date.now();


        this.interval = setInterval(() => this.time = this.calculateTime(startTime), 100);
      } else {
        clearInterval(this.interval);
      }
    }
  }, // в данном случае можно было вешать setInterval и просто по нажатию, но я решил показать возможности watch
  computed: {
    formatedTime() {
      return timeFormat(this.time);
    }
  }
}
</script>

<style scoped>
@import 'stopwatch.css';
</style>