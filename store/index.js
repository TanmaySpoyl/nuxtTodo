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
        state.todo = payload.todo;
    
    },
      stateSet(state, todo) {
        console.log('hello in mutations');
        state.todo = todo;
      }
    },
    actions: {
        updateDB:  async ({commit,dispatch}, todo) => {
    console.log(todo);
  const todos = todo.todo.filter((i,todo) => i !== todo.length -1);
  console.log('in updatedb',todos);
            if (todos) {
                DB.open();
    // todoFiltered.forEach(todo => {
  await  DB.todos.add({ ssn: 'todo', todo: todos}).catch(error => console.log(error));
        
                commit('stateSet', todo);
            //   }
            // );
            }
              commit('stateSet', todo);
            
        },
        fetchDB: async ({commit}) => {
       const data =  await DB.todos.get("koka")
       console.log('fetch func', data);
       if(data){
    commit('onupgradeneeded', data);
       }
       
            }

}
  });
}

export default createStore;