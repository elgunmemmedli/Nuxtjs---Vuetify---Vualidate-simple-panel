
        <template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="user.name"
        :counter="10"
        :rules="user.nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.email"
        :rules="user.emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="user.select"
        :items="user.items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="add">
        Add
      </v-btn>
    </v-form>
  </v-container>
</template>


<script>
export default {
  head : {
    title : 'User Add'
  },
  data: () => ({

    valid: true,
    user: {
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      select: null,
      items: ["Admin", "Moderator", "Item 3", "Item 4"],
    },
  }),

  methods: {
    add() {
     if( this.$refs.form.validate())  this.$store.commit("store/addUser", this.user);
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>