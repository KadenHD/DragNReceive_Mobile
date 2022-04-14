<template>
  <ion-content>
    <div class="Wrapper">
      <ion-card>
        <ion-card-content>
          <ion-card-header>
            <ion-row>
              <ion-card-title>{{ title }}</ion-card-title>
              <ion-icon
                class="rotate"
                v-if="profileParameters"
                @click="this.$router.push({ name: 'ProfileParameters' })"
                size="large"
                :icon="cogOutline"
              ></ion-icon>
              <ion-icon
                v-if="createTicket"
                @click="this.$router.push({ name: 'TicketCreate' })"
                size="large"
                :icon="addOutline"
              ></ion-icon>
              <ion-icon
                v-if="deleteCart"
                @click="clearCart()"
                size="large"
                :icon="trashOutline"
              ></ion-icon>
            </ion-row>
          </ion-card-header>
          <slot></slot>
        </ion-card-content>
      </ion-card>
    </div>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonCard,
  IonRow,
  IonIcon,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";
import { cogOutline, addOutline, trashOutline } from "ionicons/icons";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "Wrapper",
  props: {
    profileParameters: Boolean,
    createTicket: Boolean,
    deleteCart: Boolean,
    title: String,
  },
  components: {
    IonContent,
    IonCard,
    IonRow,
    IonIcon,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },
  setup() {
    return { cogOutline, addOutline, trashOutline };
  },
  methods: {
    async clearCart() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement vider votre panier ?",
        message:
          "Une fois vidé, vous allez devoir chercher de nouveau des produits.",
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
              this.$store.dispatch("emptyCart");
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
.Wrapper {
  margin: 40px 20px 80px 20px;
}
ion-row {
  display: flex;
  justify-content: space-between;
}
.rotate {
  animation: rotation 4s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>