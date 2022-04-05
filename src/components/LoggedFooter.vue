<template>
  <ion-tab-bar>
    <ion-tab-button
      class="borderRadiusLeft"
      id="Home"
      tab="Home"
      @click="this.$router.push({ name: 'Home' })"
    >
      <ion-icon :icon="homeOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-tab-button
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
      class="borderRadiusLeft"
      id="Cart"
      tab="Cart"
      @click="this.$router.push({ name: 'Cart' })"
    >
      <ion-icon :icon="cartOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-tab-button
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
  watch: {
    $route() {
      this.redirectClass(this.$route.name);
    },
  },
  methods: {
    addClass: function (tab) {
      document
        .getElementById("tab-button-" + tab)
        .classList.add("tab-selected");
    },
    removeClass: function (tab) {
      document
        .getElementById("tab-button-" + tab)
        .classList.remove("tab-selected");
    },
    redirectClass: function (tab) {
      if (tab === "Home") {
        this.addClass("Home");
        this.removeClass("Profile");
        this.removeClass("Cart");
        this.removeClass("Tickets");
      } else if (tab === "Profile") {
        this.removeClass("Home");
        this.addClass("Profile");
        this.removeClass("Cart");
        this.removeClass("Tickets");
      } else if (tab === "Cart") {
        this.removeClass("Home");
        this.removeClass("Profile");
        this.addClass("Cart");
        this.removeClass("Tickets");
      } else if (tab === "Tickets") {
        this.removeClass("Home");
        this.removeClass("Profile");
        this.removeClass("Cart");
        this.addClass("Tickets");
      }
    },
  },
});
</script>

<style lang="scss">
ion-tab-bar {
  bottom: 20px;
  position: relative;
  width: 92%;
  border: 0;
  margin: 0 auto;
  background-color: transparent;
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
