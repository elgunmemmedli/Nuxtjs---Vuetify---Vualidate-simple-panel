<template>
  <div>
    <v-container>
    <div class="d-flex justify-center ">
        <v-card elevation="6" outlined tile flex-grow-1 width="300px">
       <v-card-title> Admin Count </v-card-title>
       <v-card-subtitle> {{counter}} </v-card-subtitle>
      </v-card>
       <v-card elevation="6" outlined tile flex-grow-1 width="300px">
       <v-card-title> Active Admin Count </v-card-title>
       <v-card-subtitle > {{counter}} </v-card-subtitle>
      </v-card>
    </div>
    </v-container>
  </div>
</template>



<script>
import { mapGetters } from 'vuex'
export default {
  //  layout: 'blog'


computed : {
  ...mapGetters({
    counter : 'store/adminCounter'
  })
}


}
</script>