<template>
  <v-app>
    <!-- サイドナビゲーション -->
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>

          <v-list-group v-for="nav_list in nav_lists" :key="nav_list.name" :prepend-icon="nav_list.icon" :append-icon="nav_list.lists ? undefined : ''">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

        </v-list>

      </v-container>
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title to="/" v-if="$vuetify.breakpoint.mdOnly">Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- ドロップダウンメニュー -->
      <v-toolbar-items>
        <v-btn text to="/enterprise">For Enterprise</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" text>Support<v-icon>mdi-menu-down</v-icon></v-btn>
          </template>
          <v-list>
            <v-subheader>Get help</v-subheader>
            <v-list-item v-for="support in supports" :key="support.name" :to="support.link">
              <v-list-item-icon>
                <v-icon>{{ support.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ support.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <!-- メイン -->
    <v-main>
      <router-view />
    </v-main>

    <!-- フッター -->
    <v-footer color="primary" dark app>
      footer
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      supports: [
        {
          name: 'Consulting and suppourt',
          icon: 'mdi-vuetify',
          link:'/consulting-and-support'
        },
        {
          name: 'Discord community',
          icon: 'mdi-discord',
          link:'/discord-community'},
        {
          name: 'Report a bug',
          icon: 'mdi-bug',
          link:'/report-a-bug'
        },
        {
          name: 'Github issue board',
          icon: 'mdi-github-face',
          link:'/guthub-issue-board'
        },
        {
          name: 'Stack overview',
          icon: 'mdi-stack-overflow',
          link:'/stack-overview'
        },
      ],
      nav_lists: [
        {name: 'Getting Started',icon: 'mdi-vuetify',
        lists:[{name:'Quick Start',link:'/quick-start'},{name:'Pre-made layouts',link:'/pre-made-layouts'}]
        },
        {name: 'Customization',icon: 'mdi-cogs'},
        {name: 'Styles & animations',icon: 'mdi-palette',lists:['Colors','Content','Display']},
        {name: 'UI Components',icon: 'mdi-view-dashboard',lists:['API explorer','Alerts']},
        {name: 'Directives',icon: 'mdi-function'},
        {name: 'Preminum themes',icon: 'mdi-vuetify'},
      ]
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
