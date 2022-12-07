<template>
  <router-view />
   <div>
    <TheHeader :title="title"/>
    <div class="container">
      <base-card>
        <base-button @click="switchTab('login')" :mode="setLoginActiveTab">Login</base-button>
        <base-button @click="switchTab('register')" :mode="setLoginActiveTab">Register</base-button>
    </base-card>
    <Keep-alive>
      <component :is="selectedTab"></component>
    </Keep-alive>
    </div>
   </div>
</template>
 
<script>
// import exp from 'constants';
import TheHeader from "./components/Layouts/TheHeader";

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
// import { title } from 'process';


export default {
  name: 'App',
  components: {
    TheHeader,
    Login,
    Register,
  },
  data() {
    return {
      title: "WELCOME TO JOURN3Y",
      selectedTab: "login"
    };
  },
  methods: {
    switchTab(tab){
      this.selectedTab = tab;
    }
  },
  computed: {
    setLoginActiveTab(){
      return this.selectedTab === 'login' ? '' : 'default';      
    },
    setRegisterActiveTab() {
      return this.selectedTab === 'register' ? '' : 'default';
    }
  }
};
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

body,
html {
  font-family: "Open Sans", sans-serif;
}
.container {
  width: 90%;
  margin: 0 auto;
}
</style>
