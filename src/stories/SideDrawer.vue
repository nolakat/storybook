<template>
<div
  class="h-screen overflow-hidden"
  >
  <button class="px-2 py-6 mt-4 ml-4 bg-gray-300" @click="toggleSideDrawer()">Toggle Drawer</button>
  <transition name="slide">
    <div
    v-show="open"
    class="right-0 flex flex-col float-right w-screen h-full bg-white shadow-lg sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="p-5 font-medium border-b">
        </div>

        <div class="flex-grow p-5 bg-white border-b">
                <code> i am the side drawer</code>

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
  },
  data: ()=>({
    open: false
  }),
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
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s, transform .5s ease;
  transform: translateX(0px);
}
.slide-enter, .slide-leave-to {
  transform: translateX(350px);
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
