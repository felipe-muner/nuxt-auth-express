<template>
  <div>
    <v-card>
      {{sindecs}}
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
        <v-row>
          <v-col cols="11">
            <v-text-field v-model="newLink" label="New Link" dense outlined></v-text-field>
          </v-col>
          <v-col cols="1" class="pl-0">
            <v-btn color="success" dark x-small fab @click="handleAddLink()">
              <v-icon dark>mdi-playlist-plus</v-icon>
            </v-btn>
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
      {{editObject}}
      <v-divider></v-divider>

      <v-card-actions center>
        <v-spacer></v-spacer>
        <v-btn color="warning" @click="handleUpdate">Update</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      editObject: {},
      newLink: ""
    };
  },
  computed: {
    ...mapState("sindec", ["estados", "ufs", "sindecs", "LinkID"]),
    ...mapGetters({
      getById: "sindec/getById"
    })
  },
  created() {
    // console.log();
  },
  mounted() {
    this.editObject = JSON.parse(
      JSON.stringify(this.getById(this.$route.params.id))
    );
  },
  methods: {
    ...mapActions({
      updateSindec: "sindec/updateSindec",
      deleteLink: "sindec/deleteLink",
      // addLink: "sindec/addLink",
      incrementLinkID: "sindec/incrementLinkID"
    }),
    handleUpdate() {
      this.updateSindec(this.editObject);
      this.$router.push({ name: "sindec" });
    },
    handleDeleteLink(linkID) {
      this.deleteLink(linkID);
      this.editObject.link = this.editObject.link.filter(li => {
        return li.LinkID !== linkID;
      });
    },
    handleAddLink() {
      if ("" === this.newLink) {
        alert("Favor preencher o campo com um link válido");
        return;
      }
      this.incrementLinkID();
      this.editObject.link.push({
        LinkID: this.LinkID,
        Link: this.newLink,
        Active: true
      });

      this.newLink = "";
      // this.addLink({ newLink: this.newLink, editObject: this.editObject });
    }
  }
};
</script>

<style>
</style>