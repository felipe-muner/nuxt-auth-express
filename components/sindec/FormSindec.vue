<template>
  <v-form ref="form" v-model="valid" lazy-validation class="ma-3">
    <v-row>
      <v-col cols="2">
        {{estado}}
        <v-autocomplete
          v-model="estado"
          :items="estados"
          :rules="[v => !!v || 'Item is required']"
          label="Estado"
          return-object
          item-text="nome"
          item-value="id"
          required
          dense
          outlined
        ></v-autocomplete>
      </v-col>
      <v-col cols="2">
        {{uf}}
        <v-autocomplete
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
        ></v-autocomplete>
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
        <v-btn middle :disabled="!valid" color="success" class="mr-4" @click="submit">Cadastrar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>


<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  data: () => ({
    sincobs: [],
    valid: true,
    estado: "",
    uf: "",
    link: "",
    select: null
  }),
  computed: {
    ...mapState("sindec", ["estados", "ufs"])
  },
  methods: {
    ...mapActions({
      save: "sindec/save"
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.save({
          estado: this.estado,
          uf: this.uf,
          link: this.link
        });
        this.$refs.form.reset();
      }
    }
  }
};
</script>