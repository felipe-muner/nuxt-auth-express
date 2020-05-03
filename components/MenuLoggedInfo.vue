<template>
  <div class="text-center">
    <v-menu
      transition="slide-x-reverse-transition"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="300"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn color="blue darken-2" dark fab small v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <!-- <v-btn color="indigo" dark v-on="on"> </v-btn> -->
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                gradient
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ $auth.user.name }}</v-list-item-title>
              <v-list-item-subtitle>profile info</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <img
              src="~/static/usa-flag.png"
              height="50px"
              width="50px"
              @click="changeLanguage('en')"
            />
            <img
              src="~/static/spain-flag.png"
              height="50px"
              width="50px"
              class="ml-3"
              @click="changeLanguage('es')"
            />
            <img
              src="~/static/france-flag.png"
              height="50px"
              width="50px"
              class="ml-3"
              @click="changeLanguage('fr')"
            />
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="primary"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="warning"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="error" text @click="$auth.logout()">Logout</v-btn>
          <!-- <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text @click="menu = false">Save</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true
  }),
  methods: {
    changeLanguage(lang) {
      this.$i18n.setLocale(lang);
    }
  }
};
</script>
