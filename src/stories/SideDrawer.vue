<template>
<div
  class="h-screen overflow-hidden"
  :class="{ 'bg-black': isDark}"
  >
  <button
  class="px-2 py-6 mx-4 mt-4 bg-gray-300"
    :class="{ 'float-right' : isLeft}"
  @click="toggleSideDrawer()">Toggle Drawer</button>
  <transition :name="slideName">
    <div
    v-show="open"
    class="flex flex-col float-right w-screen h-full bg-white shadow-lg sm:w-1/2 lg:w-1/3 xl:w-1/4"
    :class="{ 'float-left' : isLeft}"
    >
        <div class="p-5 font-medium border-b">
    </div>

      <div class="flex-grow p-5 bg-white border-b">
        <code>i am the side drawer</code>
      </div>

    </div>
  </transition>

</div>
</template>

<script>
export default({
  name: 'vue-sidedrawer',
  props: {
    side: String,
    background: String
  },
  data: ()=>({
    open: false
  }),
  computed: {
    isLeft(){
      return this.side  == 'left'
    },
    isDark(){
      return this.background == 'dark'
    },
    slideName(){
      return this.isLeft ? 'slide-left' : 'slide-right'
    }
  },
  methods: {
    toggleSideDrawer(){
       this.toggleOverlay();
       return this.open = !this.open
    },
    toggleOverlay(){
      const toggleEvent = new CustomEvent('animalfound', {
        detail: {
          open: this.open
        }
      });
      window.dispatchEvent(toggleEvent);
    }
  },
  mounted(){
    console.log('>> mounted sidedrawer');
  }
})
</script>

<style scoped>
.slide-right-enter-active, .slide-right-leave-active {
  transition: opacity .5s, transform .5s ease;
  transform: translateX(0px);
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(350px);
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: opacity .5s, transform .5s ease;
  transform: translateX(0px);
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-350px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
