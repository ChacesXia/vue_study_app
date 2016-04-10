<template>
  <div class="contextPage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是contextPage组件！'
    }
  },
  ready: function () {
    this.$dispatch('notify_route', 'contextPage')
  }
}
</script>
<style type="text/css">
  div{

  }
  img{
    
  }
</style>

