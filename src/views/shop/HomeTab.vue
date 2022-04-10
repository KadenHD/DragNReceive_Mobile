<template>
  <ion-page>
    <ion-content
      class="bindingScrollContent"
      :scroll-events="true"
      @ionScroll="getScrollPos($event.detail.scrollTop)"
    >
      <div v-if="myShops || myProducts">
        <ion-button @click="this.$router.push({})">Produits</ion-button>
        <ion-button @click="this.$router.push({ query: { filter: 'shops' } })"
          >Boutiques</ion-button
        >
        <ion-list>
          <ProductsCards v-if="myProducts" :items="myProducts" />
          <ShopsCards v-if="myShops" :items="myShops" />
        </ion-list>
      </div>
    </ion-content>
    <div class="back-to-top-btn" v-if="backToTop" @click="gotToTop()">
      <ion-icon :icon="chevronUpOutline"></ion-icon>
    </div>
  </ion-page>
</template>

<script>
import ShopsCards from "@/components/card/ShopsCards.vue";
import ProductsCards from "@/components/card/ProductsCards.vue";
import { IonPage, IonList, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { chevronUpOutline } from "ionicons/icons";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HomeTab",
  components: {
    ShopsCards,
    ProductsCards,
    IonPage,
    IonList,
    IonContent,
    IonButton,
    IonIcon,
  },
  setup() {
    return { chevronUpOutline };
  },
  data() {
    return { backToTop: false };
  },
  created() {
    this.$store.dispatch("setProducts");
    this.$store.dispatch("setShops");
  },
  computed: {
    ...mapGetters(["products"]),
    ...mapGetters(["shops"]),
    myProducts: function () {
      let products = this.products;
      if (!products) {
        return null;
      } else {
        if (this.$route.query.filter === undefined) {
          return products;
        }
        return null;
      }
    },
    myShops: function () {
      let shops = this.shops;
      if (!shops) {
        return null;
      } else {
        if (this.$route.query.filter === "shops") {
          return shops;
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