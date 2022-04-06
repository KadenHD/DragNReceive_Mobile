<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="logoutClick()">Se déconnecter</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonPage,
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
  },
  setup() {},
  methods: {
    logoutClick() {
      this.$store.dispatch("logout");
    },
  },
});
</script>