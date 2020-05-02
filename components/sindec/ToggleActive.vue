<template>
  <div>
    <v-switch class="mx-2" :input-value="link.Active" @click.native="toggleActivity({item, link})"></v-switch>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item", "link"],
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      toggleActivity: "sindec/toggleActivity"
    })
  }
};
</script>

<style>
</style>