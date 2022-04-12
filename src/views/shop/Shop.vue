<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content> Shop </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonContent,
} from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileParameters",
  components: {
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
  },
  setup() {
    return { chevronForward };
  },
  methods: {},
});
</script>