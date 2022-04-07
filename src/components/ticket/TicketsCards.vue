<template>
  <ion-row>
    <ion-card v-for="ticket in items" v-bind:key="ticket.id" class="border">
      <ion-card-header>
        <ion-card-title>{{ ticket.title }}</ion-card-title>
        <ion-card-subtitle v-if="ticket.messages.length"
          >Vous avez {{ ticket.messages.length }} messages sur ce
          ticket</ion-card-subtitle
        >
      </ion-card-header>
      <ion-card-content>
        {{ ticket.content }}
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
      </ion-item>
    </ion-card>
  </ion-row>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  name: "TicketCards",
  props: {
    items: Object,
  },
  components: {
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonButton,
  },
});
</script>

<style lang="scss">
.border {
  box-shadow: 0px 3px 6px 0px rgba(128, 128, 128, 0.367);
}
</style>