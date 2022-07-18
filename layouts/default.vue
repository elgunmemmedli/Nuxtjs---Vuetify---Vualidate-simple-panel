<template>
  <div>
    <!-- App.vue -->

<v-app>
  <v-navigation-drawer app>
  <navbar></navbar>
  </v-navigation-drawer>

  <v-app-bar app>
    <h1> Admin Panel </h1>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view>  </router-view>
    </v-container>
  </v-main>

  <v-footer app>
   <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</v-app>
  </div>
</template>



<script>
export default {


  
}
</script>




 















