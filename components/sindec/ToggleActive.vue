<template>
  <v-switch v-model="link.Active" class="mx-2"></v-switch>
</template>

<script>
export default {
  props: ["item", "link"],
  data() {
    return {};
  },
  created() {
    console.log(this.link);
  }
};
</script>

<style>
</style>