<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="mx-2" fab dark small color="warning">
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <!-- {{sindecs}} -->
        <hr />
        <v-card-title class="headline grey lighten-2" primary-title>Edit Sindec</v-card-title>
        <v-card-text>
          <!-- {{editObject}} -->
          <v-row>
            <v-col>
              <v-autocomplete
                v-model="editObject.estado"
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
          </v-row>
          <v-row>
            <v-col>
              <v-autocomplete
                v-model="editObject.uf"
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
          </v-row>
          <div v-for="l in editObject.link" :key="l.LinkID">
            <v-row>
              <v-col cols="11">
                <v-text-field
                  v-model="l.Link"
                  :rules="[v => !!v || 'Item is required']"
                  label="Link"
                  required
                  dense
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="pl-0">
                <v-btn color="error" dark x-small fab @click="handleDeleteLink(l.LinkID)">
                  <v-icon dark>mdi-cancel</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions center>
          <v-spacer></v-spacer>
          <v-btn color="warning" @click="handleUpdate">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      dialog: false,
      editObject: {}
    };
  },
  computed: {
    ...mapState("sindec", ["estados", "ufs", "sindecs"])
  },
  methods: {
    ...mapActions({
      updateSindec: "sindec/updateSindec",
      deleteLink: "sindec/deleteLink"
    }),
    handleUpdate() {
      this.updateSindec(this.editObject);
      this.dialog = false;
    },
    handleDeleteLink(linkID) {
      this.deleteLink(linkID);
      this.editObject.link = this.editObject.link.filter(li => {
        return li.LinkID !== linkID;
      });
    }
  },
  mounted() {
    // this.editObject = Object.assign({}, this.item);
    // this.editObject = { ...this.item };
    // this.editObject = JSON.parse(JSON.stringify(this.item));
  }
};
</script>