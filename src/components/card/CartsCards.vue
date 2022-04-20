<template>
  <ion-grid>
    <ion-row
      v-for="(item, index) in items"
      v-bind:key="item.product.id"
      :class="index % 2 == 0 ? 'pair' : 'impair'"
    >
      <ion-col>
        <ion-img
          :src="
            item.product.path
              ? url + item.product.path
              : 'assets/img/default.svg'
          "
        />
      </ion-col>
      <ion-col> {{ item.product.name }} </ion-col>
      <ion-col>
        {{ parseFloat(item.product.price * item.quantities).toFixed(2) }}€
      </ion-col>
      <ion-col> {{ item.quantities }} </ion-col>
      <ion-col>
        <ion-icon
          :icon="closeOutline"
          size="large"
          @click="deleteProduct(index)"
        />
      </ion-col>
    </ion-row>
    <ion-title>Total : {{ totalPrice }} €</ion-title>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonImg, IonIcon, IonTitle } from "@ionic/vue";
import { defineComponent } from "vue";
import { closeOutline } from "ionicons/icons";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "CartsCards",
  props: {
    items: Object,
  },
  components: { IonGrid, IonRow, IonCol, IonImg, IonIcon, IonTitle },
  setup() {
    const url = process.env.VUE_APP_URL;
    return { url, closeOutline };
  },
  computed: {
    totalPrice: function () {
      let price = 0;
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].product.price * this.items[i].quantities;
      }
      return parseFloat(price).toFixed(2);
    },
  },
  methods: {
    async deleteProduct(index) {
      const alert = await alertController.create({
        header:
          "Souhaitez vous réellement supprimer ce produit de votre panier ?",
        message:
          "Une fois retiré, vous devrez l'ajouter de nouveau pour l'acheter.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Confirmer",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("removeProductCart", index);
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
.pair {
  background-color: var(--ion-color-light);
}
.impair {
  background-color: var(--ion-color-light-shade);
}
ion-img {
  width: 50px;
  height: 50px;
}
</style>