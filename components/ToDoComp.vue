
<template>
  <div class="hello">
    <div v-for="(i,index) in todo" :key="index">
      {{ i["todo"] }}
      <button @click="deleteToDo(i, index)">delete</button>
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

    mounted(){
    this.$store.dispatch('fetchDB');
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
    deleteToDo: async function(i, index) {
      console.log(index);
      console.log("i called");
     
     const todo =  await this.todo.filter((ind, todo) => ind !== index);
       await this.$store.dispatch('deleteDB',{
        id: i["id"], todo
      });
        
       
      // localStorage.setItem("todos", JSON.stringify(this.todo));

    },
    goTO: function() {
      this.$router.push('/List');
      }
  }
};
</script>