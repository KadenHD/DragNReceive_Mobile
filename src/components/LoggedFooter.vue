<template>
  <ion-tab-bar>
    <ion-tab-button
      v-if="this.$route.name === 'Home'"
      class="borderRadiusLeft tab-selected"
      id="Home"
      tab="Home"
      @click="this.$router.push({ name: 'Home' })"
    >
      <ion-icon :icon="homeOutline" />
      <ion-label></ion-label>
    </ion-tab-button>
    <ion-tab-button
      v-else
      class="borderRadiusLeft"
      id="Home"
      tab="Home"
      @click="this.$router.push({ name: 'Home' })"
    >
      <ion-icon :icon="homeOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-tab-button
      v-if="this.$route.name === 'Profile'"
      class="borderRadiusRight tab-selected"
      id="Profile"
      tab="Profile"
      @click="this.$router.push({ name: 'Profile' })"
    >
      <ion-icon :icon="personOutline" />
      <ion-label></ion-label>
    </ion-tab-button>
    <ion-tab-button
      v-else
      class="borderRadiusRight"
      id="Profile"
      tab="Profile"
      @click="this.$router.push({ name: 'Profile' })"
    >
      <ion-icon :icon="personOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-img src="assets/img/Jimdo/DragNReceive/hexaName/logo.svg"></ion-img>

    <ion-tab-button
      v-if="this.$route.name === 'Cart'"
      class="borderRadiusLeft tab-selected"
      id="Cart"
      tab="Cart"
      @click="this.$router.push({ name: 'Cart' })"
    >
      <ion-icon :icon="cartOutline" />
      <ion-label></ion-label>
    </ion-tab-button>
    <ion-tab-button
      v-else
      class="borderRadiusLeft"
      id="Cart"
      tab="Cart"
      @click="this.$router.push({ name: 'Cart' })"
    >
      <ion-icon :icon="cartOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-tab-button
      v-if="this.$route.name === 'Tickets'"
      class="borderRadiusRight tab-selected"
      id="Tickets"
      tab="Tickets"
      @click="this.$router.push({ name: 'Tickets' })"
    >
      <ion-icon :icon="ticketOutline" />
      <ion-label></ion-label>
    </ion-tab-button>
    <ion-tab-button
      v-else
      class="borderRadiusRight"
      id="Tickets"
      tab="Tickets"
      @click="this.$router.push({ name: 'Tickets' })"
    >
      <ion-icon :icon="ticketOutline" />
      <ion-label></ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script>
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonImg } from "@ionic/vue";
import {
  homeOutline,
  personOutline,
  cartOutline,
  ticketOutline,
} from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoggedFooter",
  components: {
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonImg,
  },
  setup() {
    return {
      homeOutline,
      personOutline,
      cartOutline,
      ticketOutline,
    };
  },
});
</script>

<style scoped lang="scss">
ion-tab-bar {
  bottom: 20px;
  position: relative;
  width: 92%;
  border: 0;
  margin: 0 auto;
  background-color: var(--ion-background-color);
}
ion-tab-button {
  &::before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 2px;
  }
  &.tab-selected {
    color: var(--ion-color-primary);
    &::before {
      background-color: var(--ion-color-primary);
    }
  }
  &.borderRadiusRight {
    border-radius: 0px 16px 16px 0px;
    margin-right: 10px;
  }
  &.borderRadiusLeft {
    border-radius: 16px 0px 0px 16px;
    margin-left: 10px;
  }
}
</style>
