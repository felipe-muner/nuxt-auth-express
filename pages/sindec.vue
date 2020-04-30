<template>
  <v-flex xs12 sm12 md12>
    {{sindecsFormatted}}
    <hr />
    {{this.$store.state.sindec}}
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="sindecsFormatted"
      item-key="SindecID"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <FormSindec />
      </template>
      <template v-slot:item.estado="{ item }">
        <v-chip dark>{{ item.estado.nome }}</v-chip>
      </template>
      <template v-slot:item.uf="{ item }">{{ item.uf.nome }}</template>
      <template v-slot:item.link="{ item }">
        <span v-for="(link, index) in item.link" :key="link.LinkID">{{ item.link[index].Link }}</span>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
import FormSindec from "~/components/FormSindec";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  transition: "default",
  components: {
    FormSindec
  },
  computed: {
    ...mapState({
      sindecs: state => state.sindec.sindecs
    }),
    ...mapGetters({
      sindecsFormatted: "sindec/sindecsFormatted"
    })
  },
  methods: {
    // ...mapActions({
    //   save: "sindec/save"
    // })
    // ...mapActions({
    //   add: "increment" // map `this.add()` to `this.$store.dispatch('increment')`
    // })
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
