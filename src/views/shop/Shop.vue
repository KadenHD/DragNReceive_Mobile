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
        <ion-icon
          v-if="!isFav"
          :icon="heartOutline"
          size="large"
          @click="addToFavoris()"
        />
        <ion-icon
          v-if="isFav"
          style="color: red"
          :icon="heartOutline"
          size="large"
          @click="removeToFavoris()"
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
  IonIcon,
} from "@ionic/vue";
import { chevronForward, heartOutline } from "ionicons/icons";
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
    IonIcon,
  },
  setup() {
    return { chevronForward, heartOutline };
  },
  created() {
    this.$store.dispatch("setShop", this.$route.params.id);
    this.$store.dispatch("setFavoris");
  },
  methods: {
    addToFavoris() {
      const data = {
        shopId: this.$route.params.id,
      };
      this.$store.dispatch("addToFavoris", data);
    },
    removeToFavoris() {
      const data = {
        shopId: this.$route.params.id,
      };
      this.$store.dispatch("removeToFavoris", data);
    },
  },
  computed: {
    ...mapGetters(["shop", "favoris"]),
    myShop: function () {
      if (!this.shop) {
        return null;
      } else {
        return this.shop;
      }
    },
    isFav: function () {
      let fav = false;
      for (let i = 0; i < this.favoris.length; i++) {
        if (this.favoris[i].id === this.$route.params.id) {
          fav = true;
        }
      }
      console.log(fav);
      return fav;
    },
  },
});
</script>

<style scoped lang="scss">
ion-img {
  height: 250px;
  width: 250px;
  margin: 0 auto;
}
</style>