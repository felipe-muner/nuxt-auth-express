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
            <td>actions</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-flex>
</template>
      <!-- <template v-slot:item.estado="{ item }">
        <v-chip dark>{{ item.estado.nome }}</v-chip>
      </template>
      <template v-slot:item.uf="{ item }">{{ item.uf.nome }}</template>
      <template v-slot:item.link="{ item }">
        <span v-for="(link, index) in item.link" :key="link.LinkID">{{ item.link[index].Link }}</span>
      </template>-->
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
          value: "estado.nome"
        },
        { text: "UF", value: "uf.nome" },
        { text: "Link", value: "link[0].LinkID" }
      ]
    };
  }
};
</script>
<style scoped>
</style>