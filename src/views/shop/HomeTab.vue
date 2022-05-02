<template>
  <ion-page>
    <SearchBarHeader v-model:value="searchValue" />
    <ion-content
      class="bindingScrollContent"
      :scroll-events="true"
      @ionScroll="getScrollPos($event.detail.scrollTop)"
    >
      <div v-if="myShops || myProducts || myFavoris">
        <ion-button color="secondary" @click="this.$router.push({})"
          >Produits</ion-button
        >
        <ion-button
          color="secondary"
          @click="this.$router.push({ query: { filter: 'shops' } })"
          >Boutiques</ion-button
        >
        <ion-button
          color="secondary"
          @click="this.$router.push({ query: { filter: 'favoris' } })"
          >Favoris</ion-button
        >
        <ion-list>
          <ProductsCards v-if="myProducts" :items="myProducts" />
          <ShopsCards v-if="myShops" :items="myShops" />
          <ShopsCards v-if="myFavoris" :items="myFavoris" />
        </ion-list>
      </div>
    </ion-content>
    <div class="back-to-top-btn" v-if="backToTop" @click="gotToTop()">
      <ion-icon :icon="chevronUpOutline"></ion-icon>
    </div>
  </ion-page>
</template>

<script>
import SearchBarHeader from "@/components/SearchBarHeader.vue";
import ShopsCards from "@/components/card/ShopsCards.vue";
import ProductsCards from "@/components/card/ProductsCards.vue";
import { IonPage, IonList, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { chevronUpOutline } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";
import { fetchSearchElement } from "@/utils/index.js";

export default defineComponent({
  name: "HomeTab",
  components: {
    SearchBarHeader,
    ShopsCards,
    ProductsCards,
    IonPage,
    IonList,
    IonContent,
    IonButton,
    IonIcon,
  },
  setup() {
    const searchValue = ref("");
    return { searchValue, chevronUpOutline };
  },
  data() {
    return { backToTop: false };
  },
  created() {
    this.$store.dispatch("setProducts");
    this.$store.dispatch("setShops");
    this.$store.dispatch("setFavoris");
  },
  computed: {
    ...mapGetters(["products", "shops", "favoris"]),
    myProducts: function () {
      if (!this.products) {
        return null;
      } else {
        if (this.$route.query.filter === undefined) {
          return fetchSearchElement(this.searchValue, this.products);
        }
        return null;
      }
    },
    myShops: function () {
      if (!this.shops) {
        return null;
      } else {
        if (this.$route.query.filter === "shops") {
          return fetchSearchElement(this.searchValue, this.shops);
        } else {
          return null;
        }
      }
    },
    myFavoris: function () {
      if (!this.favoris) {
        return null;
      } else {
        if (this.$route.query.filter === "favoris") {
          return fetchSearchElement(this.searchValue, this.favoris);
        } else {
          return null;
        }
      }
    },
  },
  methods: {
    gotToTop() {
      const scrollContent = document.querySelector(
        "ion-content.bindingScrollContent"
      );
      scrollContent.scrollToTop(1000); // duration: 1000
    },
    getScrollPos(pos) {
      if (pos > window.innerHeight) {
        this.backToTop = true;
      } else {
        this.backToTop = false;
      }
    },
  },
});
</script>

<style scoped lang="scss">
ion-button {
  margin: 20px 0px 0px 20px;
}
ion-list {
  margin: 20px 20px 80px 20px;
}
.back-to-top-btn {
  border-radius: 50%;
  border: solid;
  background: var(--ion-color-secondary);
  border-color: var(--ion-color-primary);
  color: var(--ion-text-color);

  position: fixed;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  z-index: 999;
}
</style>