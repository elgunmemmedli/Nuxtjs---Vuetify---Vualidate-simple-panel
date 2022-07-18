
        <template>
  <div>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>


  </div>
</template>

<script>

  export default {
     head : {
    title : 'User List'
  },
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Email', value: 'email' },
          { text: 'Status', value: 'select' },
        ],
        desserts: [
        ],
      }
    },


mounted(){
    this.desserts = this.$store.state.store.users;

}


  }
</script>
