<template>
  <div>
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
ion-card {
  background-color: var(--ion-background-color);
}
ion-button {
  margin-left: 20px;
}
</style>