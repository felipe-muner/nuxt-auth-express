<template>
  <div>
    <!-- <nuxt-link :to="{ name: 'sindec-id', params: { id: this.item.SindecID }}"> -->
    <nuxt-link
      :to="
        localePath({ name: 'sindec-id', params: { id: this.item.SindecID } })
      "
    >
      <v-btn class="mx-2" fab dark small color="warning">
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
