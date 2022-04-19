<template>
  <ion-page>
    <ion-content>
      <Wrapper :title="`Mon panier (${cartQuantities} articles)`" deleteCart>
        <div v-if="myCart">
          <CartsCards :items="myCart" />
        </div>
        <div class="empty" v-else>
          <ion-text
            >On dirait que votre panier est vide... Mais ne vous en faites pas,
            vous pouvez le remplir en ajoutant au panier des produits
            !</ion-text
          >
          <ion-img src="assets/img/empty_cart.svg" />
        </div>
        <UiButton
          v-if="myCart"
          class="button"
          color="secondary"
          @click="orderAlert()"
          >Finaliser ma commande</UiButton
        >
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import CartsCards from "@/components/card/CartsCards.vue";
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonContent,
  IonImg,
  IonText,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "CartTab",
  components: {
    Wrapper,
    CartsCards,
    UiButton,
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
    cartQuantities: function () {
      let number = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        number += parseInt(this.cart.items[i].quantities);
      }
      return number;
    },
  },
  methods: {
    async orderAlert() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement passer commande ?",
        message:
          "Vous pourrez par la suite suivre vos commandes ou bien les annuler (le système de paiment n'a pas encore été implémenté).",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Acheter",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("makeOrder", this.myCart);
            },
          },
        ],
      });
      return alert.present();
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