<template>
  <v-card height="100vh" width="256" class="mx-auto">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Nuxt JS </v-list-item-title>
          <v-list-item-subtitle> Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <NuxtLink :to="item.to"  class="navLink"  >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </NuxtLink>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      items: [
         { to: "/", title: "Home", icon: "mdi-domain" },
        { to: "/userAdd", title: "User Add", icon: "mdi-view-dashboard" },
        { to: "/userList", title: "User List", icon: "mdi-image" },
       
      ],
      right: null,
    };
  },
};
</script>




<style scoped>
.navLink{
  color: gray;
  font-size: 40px !important;
  text-decoration: none;
}
</style>