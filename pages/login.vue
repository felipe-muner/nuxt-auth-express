<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">login</div>
      <div>
        <UserAuthForm buttonText="Login" :submitForm="submitForm" />
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
  data() {
    return {};
  },
  methods: {
    submitForm(userInfo) {
      this.$auth.loginWith("local", { data: userInfo });
    }
  }
};
</script>
