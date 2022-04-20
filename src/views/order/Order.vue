<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper :title="`Commande n°${this.$route.params.id}`"> </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Ticket",
  components: {
    Wrapper,
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const url = process.env.VUE_APP_URL;
    return { url };
  },
  created() {
    this.$store.dispatch("setOrder", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["order"]),
    userOrder: function () {
      if (!this.order) {
        return null;
      } else {
        return this.order;
      }
    },
  },
});
</script>