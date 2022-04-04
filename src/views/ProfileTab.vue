<template>
  <ion-page>
    <a href="javascript:void(0)" @click="logoutClick">Déconnexion</a>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileTab",
  components: {
    IonPage,
  },
  setup() {
    window.onload = function () {
      document
        .getElementById("tab-button-Profile")
        .classList.add("tab-selected");
    };
  },
  methods: {
    logoutClick() {
      this.$store.dispatch("logout");
    },
  },
});
</script>