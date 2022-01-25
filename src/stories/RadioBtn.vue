<template>
  <div class="c-radio" ref="radio" click="handleClick">
    <span class="c-radio__circle" />
    <input
      id="inputId"
      type="radio"
      :name="name"
      :value="value"
      :checked="checked"
      @click="handleClick"
    />
    <label
      class="text-3xl font-bold underline text-red-500"
      for="inputId"
    >
    {{ label }} - {{ color }}
    </label>
  </div>
</template>
<script>

export default({
  name: 'my-radio-btn',
  props: {
      id: String,
      label: String,
      name: String,
      value: String,
      color: String,
      checked: Boolean,
  },
  computed: {

  },
  methods:{
    handleClick(){
      console.log('handleClick!')
      this.checked = !this.checked;
    }
  }
})
</script>
<style scoped>
  input{
    background: '${this.color}';
  }

  .radioBtn__container{
    cursor: pointer;
    border: 1px solid red;
    width: fit-content;
  }
</style>
