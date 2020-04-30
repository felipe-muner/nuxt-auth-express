<template>
  <v-form ref="form" v-model="valid" lazy-validation class="ma-3">
    <v-row>
      <v-col cols="2">
        {{estado}}
        <v-select
          v-model="estado"
          :items="estados"
          :rules="[v => !!v || 'Item is required']"
          label="Estado"
          item-text="nome"
          item-value="id"
          required
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="2">
        {{uf}}
        <v-select
          v-model="uf"
          :items="ufs"
          :rules="[v => !!v || 'Item is required']"
          label="UF"
          return-object
          item-text="nome"
          item-value="id"
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
    estados: [
      { id: 1, siga: "AC", nome: "Acre" },
      { id: 2, siga: "AL", nome: "Alagoas" },
      { id: 3, siga: "AP", nome: "Amapá" },
      { id: 4, siga: "AM", nome: "Amazonas" },
      { id: 5, siga: "BA", nome: "Bahia" },
      { id: 6, siga: "CE", nome: "Ceará" },
      { id: 7, siga: "DF", nome: "Distrito Federal" },
      { id: 8, siga: "ES", nome: "Espírito Santo" },
      { id: 9, siga: "GO", nome: "Goáis" },
      { id: 10, siga: "MA", nome: "Maranhão" },
      { id: 11, siga: "MT", nome: "Mato Grosso" },
      { id: 12, siga: "MS", nome: "Mato Grosso do Sul" },
      { id: 13, siga: "MG", nome: "Minas Gerais" },
      { id: 14, siga: "PA", nome: "Pará" },
      { id: 15, siga: "PB", nome: "Paraíba" },
      { id: 16, siga: "PR", nome: "Paraná" },
      { id: 17, siga: "PE", nome: "Pernambuco" },
      { id: 18, siga: "PI", nome: "Piauí" },
      { id: 19, siga: "RJ", nome: "Rio de Janeiro" },
      { id: 20, siga: "RN", nome: "Rio Grande do Norte" },
      { id: 21, siga: "RS", nome: "Rio Grande do Sul" },
      { id: 22, siga: "RO", nome: "Rondônia" },
      { id: 23, siga: "RR", nome: "Roraima" },
      { id: 24, siga: "SC", nome: "Santa Catarina" },
      { id: 25, siga: "SP", nome: "São Paulo" },
      { id: 26, siga: "SE", nome: "Sergipe" },
      { id: 27, siga: "TO", nome: "Tocantins" }
    ],
    uf: "",
    ufs: [
      { id: 1, nome: "RJ" },
      { id: 2, nome: "SP" },
      { id: 3, nome: "MG" },
      { id: 4, nome: "ES" }
    ],
    link: "",
    select: null
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