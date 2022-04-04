<template>
  <ion-page>
    <a href="javascript:void(0)" @click="logoutClick">Déconnexion</a>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeTab",
  components: {
    IonPage,
  },
  methods: {
    logoutClick() {
      this.$store.dispatch("logout");
    },
  },
});
</script>