<template>
  <ion-card
    v-for="ticket in items"
    v-bind:key="ticket.id"
    class="border ion-padding-bottom"
  >
    <ion-card-header>
      <ion-card-title
        >{{ ticket.title }} ({{
          ticketStatusName(ticket.ticketStatusId)
        }})</ion-card-title
      >
      <ion-card-subtitle v-if="ticket.messages.length"
        >Vous avez {{ ticket.messages.length }} messages sur ce
        ticket</ion-card-subtitle
      >
    </ion-card-header>
    <ion-card-content>
      {{ ticket.content }} <br />
      <u>Date de création :</u> <br />
      {{ reformatedDates(ticket.createdAt) }} <br />
      <u>Dernière modification :</u> <br />
      {{ reformatedDates(ticket.updatedAt) }}
    </ion-card-content>
    <ion-item>
      <ion-button
        @click="
          this.$router.push({
            name: 'Ticket',
            params: { id: ticket.id },
          })
        "
        >Voir</ion-button
      >
      <ion-button
        v-if="ticket.ticketStatusId === '1'"
        color="secondary"
        @click="deleteTicket(ticket.id)"
        >Clore</ion-button
      >
    </ion-item>
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
  IonItem,
  IonButton,
  alertController,
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
    IonItem,
    IonButton,
  },
  setup() {
    return { reformatedDates, ticketStatusName };
  },
  methods: {
    async deleteTicket(id) {
      const alert = await alertController.create({
        header: "Souhaitez vous vraiment clore ce ticket ?",
        message:
          "Une fois clos, le ticket restera accessible, cependant vous ne pourrez plus y poster de message.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Demander",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("deleteTicket", id);
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
.border {
  box-shadow: 0px 3px 6px 0px rgba(128, 128, 128, 0.367);
}
</style>