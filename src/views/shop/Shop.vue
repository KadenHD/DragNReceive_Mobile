<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <Wrapper v-if="myShop" :title="myShop.name">
        <ion-img
          :src="myShop.path ? url + myShop.path : 'assets/img/default.svg'"
        />
        <ion-card-header>
          <ion-card-subtitle
            ><a :href="`mailto:${myShop.email}`">{{
              myShop.email
            }}</a></ion-card-subtitle
          >
          <ion-card-subtitle
            ><a :href="`tel:${myShop.phone}`">{{
              myShop.phone
            }}</a></ion-card-subtitle
          >
          <ion-card-title>{{ myShop.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Adresse de la boutique partenaire :
          {{ myShop.city }}, {{ myShop.street }},
          {{ myShop.postal }}
        </ion-card-content>
        <ion-list v-if="myShop.products">
          <ion-card-title>Produits de la boutique</ion-card-title>
          <ProductsCards :items="myShop.products" />
        </ion-list>
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import ProductsCards from "@/components/card/ProductsCards.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonContent,
  IonImg,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonList,
} from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ProfileParameters",
  components: {
    Wrapper,
    ProductsCards,
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonImg,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonList,
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