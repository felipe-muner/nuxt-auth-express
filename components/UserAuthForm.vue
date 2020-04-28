<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.Name"
      label="Name"
      :rules="[required('name')]"
      v-if="hasName"
    />

    <v-text-field
      v-model="userInfo.Email"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.Password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
      :rules="[required('password'), minLength('password', 8)]"
    />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{
      buttonText
    }}</v-btn>
  </v-form>
</template>

<script>
import validations from "@/utils/validations";
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        Email: "felipe.muner@gmail.com",
        Password: "12345678"
      },
      ...validations
    };
  },
  props: ["submitForm", "buttonText", "hasName"]
};
</script>

<style lang="scss" scoped></style>
