<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content> {{ myShop }} </ion-content>
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
import { mapGetters } from "vuex";

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
  created() {
    this.$store.dispatch("setShop", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["shop"]),
    myShop: function () {
      if (!this.shop) {
        return null;
      } else {
        return this.shop;
      }
    },
  },
});
</script>