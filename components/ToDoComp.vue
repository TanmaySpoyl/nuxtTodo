
<template>
  <div class="hello">
    <div v-for="(i,index) in todo" :key="index">
      {{ i }}
      <button @click="deleteToDo(i)">delete</button>
    </div>
    <input type="text" v-model="newtodo">
    <button @click="addTodo(newtodo)">Submit</button>
   
  </div>
 
</template>

<script>
// import func from './vue-temp/vue-editor-bridge';
import {
    DB
  } from '../store/define_table.js'


export default {
  name: "ToDoComp",
  data: () => ({
    newtodo: ""
  }),
  props: {},
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

  mounted() {
  
  /* */

   this.$store.dispatch('fetchDB');
   
   console.log('mounted computed',this.todo);
  },

  methods: {
   addTodo: function(todo) {
      console.log("i called add", this.todo);
      this.todo.push(todo);
    this.$store.dispatch('updateDB',{
        todo: this.todo
      });
      // local.setItem("todos", JSON.stringify(this.todo));
    },
    deleteToDo: function(i) {
      console.log("i called");
      this.todo = this.todo.filter((index, todo) => index !== i);
      // localStorage.setItem("todos", JSON.stringify(this.todo));
    },
    goTO: function() {
      this.$router.push('/List');
      }
  }
};
</script>