<template>
  <ion-card
    v-for="order in items"
    v-bind:key="order.id"
    class="border ion-padding-bottom"
  >
    <ion-card-header>
      <ion-card-title>{{ order.number }}</ion-card-title>
      <ion-card-subtitle v-if="ticket.messages.length"
        >Vous avez {{ order.orders.length }} produits différents dans cette
        commande</ion-card-subtitle
      >
    </ion-card-header>
    <ion-card-content>
      {{ order }} <br />
      <u>Date de création :</u> <br />
      {{ reformatedDates(order.createdAt) }} <br />
      <u>Dernière modification :</u> <br />
      {{ reformatedDates(order.updatedAt) }}
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
import { reformatedDates, ticketStatusName } from "@/utils/index.js";

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
    return { reformatedDates, ticketStatusName };
  },
  methods: {},
});
</script>

<style scoped lang="scss">
ion-card {
  background-color: var(--ion-background-color);
}
ion-button {
  margin-left: 20px;
}
</style>