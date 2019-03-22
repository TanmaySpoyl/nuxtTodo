import {
    DB
  } from './define_table.js'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todo: []
    }),
    mutations: {
       onupgradeneeded(state, payload){
         console.log('payload recived',payload);
        state.todo = payload;
    
    },
      stateSet(state, todo) {
        console.log('hello in mutations', todo);
        state.todo = todo;
      }
    },
    actions: {
        updateDB:  async ({commit}, todo) => {
    console.log(todo);
  // const todos = todo.todo.filter((i,todo) => i !== todo.length -1);
  console.log('in updatedb',todo.todo);
            if (todo.todo) {
                DB.open();
    todo.todo.forEach(todo => {
           DB.todos.add({ ssn: 'todo', todo: todo}).catch(error => console.log(error));
      });
            commit('stateSet', todo.todo);
            }
              // commit('stateSet', todo);
            
        },
      fetchDB: async ({commit}) => {
       const data = await DB.todos.toArray();
       console.log('fetch func', data);
       if(data){
    commit('onupgradeneeded', data);
       }
      },
     deleteDB: async ({commit}, data) => {
       console.log(data)
       await  DB.todos.delete(data.id);
       commit('onupgradeneeded', data.todo)
     }

       }

});

}
export default createStore;