<template>
  <v-flex xs12 sm12 md12>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="sindecsFormatted"
      item-key="SindecID"
      class="elevation-1"
      show-select
    >
      <template v-slot:top>
        <FormSindec />
      </template>
      <template v-slot:header.data-table-select="{props,on}">
        <v-simple-checkbox
          color="primary"
          v-model="props.value"
          v-on="on"
          :indeterminate="props.indeterminate"
        />
      </template>
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.SindecID">
            <td>
              <v-checkbox v-model="selected" :value="item"></v-checkbox>
            </td>
            <td>{{ item.estado.nome}}</td>
            <td>{{ item.uf.nome }}</td>
            <td>{{ item.link[0].Link }}</td>
            <td>
              <v-row>
                <EditSindec />
                <ToggleActive />
                <DeleteSindec />
              </v-row>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
import FormSindec from "~/components/sindec/FormSindec";
import DeleteSindec from "~/components/sindec/DeleteSindec";
import EditSindec from "~/components/sindec/EditSindec";
import ToggleActive from "~/components/sindec/ToggleActive";

import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  transition: "default",
  components: {
    FormSindec,
    DeleteSindec,
    EditSindec,
    ToggleActive
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
          value: "estado.nome"
        },
        { text: "UF", value: "uf.nome" },
        { text: "Link", value: "link[0].LinkID" },
        { text: "", value: "" }
      ]
    };
  }
};
</script>
<style scoped>
</style>