<template>
    <div>  <div v-for="(i,index) in todo" :key="index">
      {{ i.toString() }}
      </div></div>
</template>

<script>
export default {
      name: "List",
      computed: {
    todo: {
      get : function(){
      return this.$store.state.todo
      },
      set : function(val){
      return this.$store.commit('onupgradeneeded', val)
      }
    }
  },
      mounted(){
    // this.$store.dispatch('fetchDB')
    // if (todos) {
    //   this.todo = todos;
    //   console.log("todo", todos);
    // }
      }
}
</script>
