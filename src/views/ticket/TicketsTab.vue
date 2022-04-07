<template>
  <ion-page>
    <ion-content>
      <Wrapper title="Mes tickets" createTicket>
        <TicketsCards :items="userTickets" />
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import TicketsCards from "@/components/ticket/TicketsCards.vue";
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";

import { mapGetters } from "vuex";
// import { reformatedDates } from "@/utils/index.js";

export default defineComponent({
  name: "TicketsTab",
  components: {
    Wrapper,
    TicketsCards,
    IonPage,
    IonContent,
  },
  setup() {},
  created() {
    this.$store.dispatch("setTickets");
  },
  computed: {
    ...mapGetters(["tickets"]),
    userTickets: function () {
      if (!this.tickets) {
        return null;
      } else {
        return this.tickets;
      }
    },
  },
});
</script>