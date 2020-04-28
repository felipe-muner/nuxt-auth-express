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
  auth: false,
  transition: "default",
  components: {
    UserAuthForm
  },
  methods: {
    submitForm(userInfo) {
      console.log(userInfo);
    }
  },
  data() {
    return {};
  }
};
</script>
