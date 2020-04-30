<template>
  <v-flex xs12 sm12 md12>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="sindecs"
      item-key="id"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <FormSindec />
      </template>
      <template v-slot:item.estado="{ item }">
        <v-chip dark>{{ item.estado }}</v-chip>
      </template>
      <template v-slot:item.link="{ item }">
        <div v-for="(link, index) in item.link" :key="link">{{ item.link[index] }}</div>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
import FormSindec from "~/components/FormSindec";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  transition: "default",
  components: {
    FormSindec
  },
  computed: {
    ...mapState({
      sindecs: state => state.sindec.sindecs
    })
  },
  methods: {
    // ...mapMutations({
    //   setSnack: "snackbar/setSnack"
    // }),
    ...mapActions({
      add: "increment" // map `this.add()` to `this.$store.dispatch('increment')`
    })
  },
  data() {
    return {
      selected: [],
      headers: [
        {
          text: "Estado",
          align: "start",
          sortable: false,
          value: "estado"
        },
        { text: "UF", value: "uf" },
        { text: "Link", value: "link" }
      ]
    };
  }
};
</script>
