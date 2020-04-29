<template>
  <v-flex xs12 sm12 md12>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="singleSelect"
      item-key="name"
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
export default {
  transition: "default",
  components: {
    FormSindec
  },
  data() {
    return {
      singleSelect: false,
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
      ],
      desserts: [
        {
          estado: "Rio de Janeiro",
          uf: "RJ",
          link: [2, 3]
        }
      ]
    };
  }
};
</script>
