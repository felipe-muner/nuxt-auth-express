<template>
  <v-form ref="form" v-model="valid" lazy-validation class="ma-3">
    <v-row>
      <v-col cols="2">
        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Estado"
          required
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="UF"
          required
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="link"
          :rules="[v => !!v || 'Item is required']"
          label="Link"
          required
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="2" middle>
        <v-btn middle :disabled="!valid" color="success" class="mr-4" @click="validate">Cadastrar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>


<script>
export default {
  data: () => ({
    valid: true,
    estado: "",
    uf: "",
    link: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>