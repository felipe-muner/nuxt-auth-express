<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="mx-2" fab dark small color="error">
          <v-icon dark>mdi-delete-forever</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Delete Sindec</v-card-title>

        <v-card-text>
          <div>
            <span>Estado:</span>
            <span>{{item.estado.nome}}</span>
          </div>
          <div>
            <span>UF:</span>
            <span>{{item.uf.nome}}</span>
          </div>
          <div>
            <span>Link(s):</span>
            <ul>
              <li v-for="l in item.link" :key="l.LinkID">{{l.Link}}</li>
            </ul>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions center>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="handleDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    ...mapActions({
      deleteSidenc: "sindec/deleteSindec"
    }),
    handleDelete() {
      this.dialog = false;
      this.deleteSidenc(this.item);
    }
  }
};
</script>