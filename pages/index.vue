<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center"></div>
      <v-btn color="primary" nuxt to="/inspire">
        Continue
      </v-btn>
      <NuxtLink to="/inspire">
        inspire
      </NuxtLink>
      <h1>qwewq</h1>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from "~/components/Logo.vue";
// import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  transition: "default",
  components: {
    // Logo,
    // VuetifyLogo
  }
};
</script>
