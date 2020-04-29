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

export default {
  transition: "default",
  components: {
    UserAuthForm
  },
  methods: {
    async submitForm(userInfo) {
      await this.$axios.post("/register", userInfo);
      this.$auth.loginWith("local", { data: userInfo });
    }
  },
  data() {
    return {};
  }
};
</script>
