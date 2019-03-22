<template>
  <v-layout
    column
    justify-center
    align-center  
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div >
        <!-- <logo /> -->
        <!-- <vuetify-logo /> -->
      </div>
      
      <v-card>
        <ToDoComp/>
         <nuxt-link to="/list">List</nuxt-link>
      </v-card> 
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import ToDoComp from '~/components/ToDoComp.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo,
    ToDoComp
  }
}
</script>
