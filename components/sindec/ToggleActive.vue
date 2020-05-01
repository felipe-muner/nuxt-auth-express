<template>
  <div>
    {{link.Active}}
    <v-switch :value="link.Active" class="mx-2" @click.native="toggleActivity(item, link)"></v-switch>
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