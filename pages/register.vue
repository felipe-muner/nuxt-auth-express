<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">register</div>
      <div>
        <UserAuthForm buttonText="Register" hasName="true" :submitForm="submitForm" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import UserAuthForm from "~/components/UserAuthForm.vue";
import { mapMutations } from "vuex";

export default {
  transition: "default",
  components: {
    UserAuthForm
  },
  methods: {
    ...mapMutations({
      setSnack: "snackbar/setSnack"
    }),
    async submitForm(userInfo) {
      try {
        await this.$axios.post("/register", userInfo);
        this.$auth.loginWith("local", { data: userInfo });
        this.setSnack(`Hello, ${userInfo.Email}!`);
        this.$router.push("/");
      } catch (error) {
        this.setSnack("Something wrong, please contact the adm.");
      }
    }
  },
  data() {
    return {};
  }
};
</script>
