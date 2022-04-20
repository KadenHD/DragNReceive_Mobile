<template>
  <ion-page>
    <ion-content>
      <Wrapper title="Mes commandes">
        <ion-button @click="this.$router.push({})">Toutes</ion-button>
        <ion-button
          @click="this.$router.push({ query: { filter: 'validate' } })"
          >Validée</ion-button
        >
        <ion-button
          @click="this.$router.push({ query: { filter: 'inprogress' } })"
          >En préparation</ion-button
        >
        <ion-button
          @click="this.$router.push({ query: { filter: 'available' } })"
          >Disponible</ion-button
        >
        <ion-button
          @click="this.$router.push({ query: { filter: 'collected' } })"
          >Récupérée</ion-button
        >
        <ion-button
          @click="this.$router.push({ query: { filter: 'canceled' } })"
          >Annulée</ion-button
        >
        <OrdersCards :items="userOrders" />
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import OrdersCards from "@/components/card/OrdersCards.vue";
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import _ from "lodash";

export default defineComponent({
  name: "TicketsTab",
  components: {
    Wrapper,
    OrdersCards,
    IonPage,
    IonContent,
    IonButton,
  },
  created() {
    this.$store.dispatch("setOrders");
  },
  computed: {
    ...mapGetters(["orders"]),
    userOrders: function () {
      let orders = this.orders;
      if (!orders) {
        return null;
      } else {
        if (this.$route.query.filter === "validate") {
          orders = orders.filter(function (i) {
            if (i.status === "1") return i;
          });
        } else if (this.$route.query.filter === "inprogress") {
          orders = orders.filter(function (i) {
            if (i.status === "2") return i;
          });
        } else if (this.$route.query.filter === "available") {
          orders = orders.filter(function (i) {
            if (i.status === "3") return i;
          });
        } else if (this.$route.query.filter === "collected") {
          orders = orders.filter(function (i) {
            if (i.status === "4") return i;
          });
        } else if (this.$route.query.filter === "canceled") {
          orders = orders.filter(function (i) {
            if (i.status === "5") return i;
          });
        }
        return _.orderBy(orders, ["date"], ["desc"]); // voir si marche
      }
    },
  },
});
</script>