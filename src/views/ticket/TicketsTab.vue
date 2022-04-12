<template>
  <ion-page>
    <ion-content>
      <Wrapper title="Mes tickets" createTicket>
        <ion-button @click="this.$router.push({})">Tous</ion-button>
        <ion-button @click="this.$router.push({ query: { filter: 'open' } })"
          >Ouverts</ion-button
        >
        <ion-button @click="this.$router.push({ query: { filter: 'close' } })"
          >Clos</ion-button
        >
        <TicketsCards :items="userTickets" />
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import TicketsCards from "@/components/card/TicketsCards.vue";
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

import { mapGetters } from "vuex";
import _ from "lodash";

export default defineComponent({
  name: "TicketsTab",
  components: {
    Wrapper,
    TicketsCards,
    IonPage,
    IonContent,
    IonButton,
  },
  created() {
    this.$store.dispatch("setTickets");
  },
  computed: {
    ...mapGetters(["tickets"]),
    userTickets: function () {
      let tickets = this.tickets;
      if (!tickets) {
        return null;
      } else {
        if (this.$route.query.filter === "open") {
          tickets = tickets.filter(function (i) {
            if (i.ticketStatusId === "1") return i;
          });
        } else if (this.$route.query.filter === "close") {
          tickets = tickets.filter(function (i) {
            if (i.ticketStatusId === "2") return i;
          });
        }
        return _.orderBy(tickets, ["updatedAt"], ["desc"]);
      }
    },
  },
});
</script>