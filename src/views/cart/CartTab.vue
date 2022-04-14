<template>
  <ion-page>
    <ion-content>
      <Wrapper title="Mon panier" deleteCart>
        <div v-if="myCart">{{ myCart }}</div>
        <div class="empty" v-else>
          <ion-text
            >On dirait que votre panier est vide... Mais ne vous en faites pas,
            vous pouvez le remplir en ajoutant au panier des produits
            !</ion-text
          >
          <ion-img src="assets/img/unDraw/empty_cart.svg" />
        </div>
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import { IonPage, IonContent, IonImg, IonText } from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "CartTab",
  components: {
    Wrapper,
    IonPage,
    IonContent,
    IonImg,
    IonText,
  },
  computed: {
    ...mapGetters(["cart"]),
    myCart: function () {
      if (!this.cart.items.length) {
        return null;
      } else {
        return this.cart.items;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.empty {
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
}
ion-img {
  max-width: 500px;
  max-height: 500px;
}
</style>