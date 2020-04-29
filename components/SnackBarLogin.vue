<template>
  <div class="text-center ma-2">
    <v-snackbar :value="showing" class="mb-10">
      {{ snackbarText }}
      <v-btn color="pink" text @click="hideSnackbar()">Close</v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      snackbarText: state => state.snackbar.snackbarText,
      showing: state => state.snackbar.showing
    })
  },
  methods: {
    hideSnackbar() {
      this.$store.dispatch("snackbar/setSnackbar", {
        text: "",
        showing: false
      });
    }
  }
};
</script>