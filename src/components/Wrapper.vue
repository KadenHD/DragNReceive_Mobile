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
import { cogOutline, addOutline } from "ionicons/icons";

export default defineComponent({
  name: "Wrapper",
  props: {
    profileParameters: Boolean,
    createTicket: Boolean,
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
    return { cogOutline, addOutline };
  },
});
</script>

<style lang="scss">
.Wrapper {
  margin: 40px 20px 80px 20px;
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
}
</style>