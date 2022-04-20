<template>
  <div>
    <ion-card
      v-for="order in items"
      v-bind:key="order.id"
      class="border ion-padding-bottom"
    >
      <ion-card-header>
        <ion-card-title>Commande <br />{{ order.number }}</ion-card-title>
        <ion-card-subtitle
          >Vous avez {{ order.orders.length }} produits différents dans cette
          commande
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-grid>
          <ion-row>
            <ion-col class="ion-align-self-start">
              <ion-img :src="url + order.orders[0].product.path" />
            </ion-col>
            <ion-col class="ion-align-self-center">
              <ion-img
                v-if="order.orders[1]"
                :src="url + order.orders[1].product.path"
              />
            </ion-col>
            <ion-col class="ion-align-self-end">
              <div v-if="order.orders[2]">
                + {{ order.orders.length - 2 }} autre(s) produit(s)
              </div></ion-col
            >
          </ion-row>
        </ion-grid>
        <u>Date de création :</u> <br />
        {{ reformatedDates(order.date) }} <br />
      </ion-card-content>
      <ion-button
        @click="
          this.$router.push({
            name: 'Order',
            params: { id: order.number },
          })
        "
        >Voir</ion-button
      >
      <ion-button
        v-if="order.orderStatusId === '1'"
        color="secondary"
        @click="deleteOrder(order.number)"
        >Clore</ion-button
      >
    </ion-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from "@ionic/vue";
import { reformatedDates, orderStatusName } from "@/utils/index.js";

export default defineComponent({
  name: "TicketCards",
  props: {
    items: Object,
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
  },
  setup() {
    const url = process.env.VUE_APP_URL;
    return { url, reformatedDates, orderStatusName };
  },
});
</script>

<style scoped lang="scss">
ion-grid {
  background-color: var(--ion-border-color);
}
ion-img {
  max-height: 250px;
  max-width: 250px;
  margin: 0 auto;
}
ion-card {
  background-color: var(--ion-background-color);
}
ion-button {
  margin-left: 20px;
}
</style>