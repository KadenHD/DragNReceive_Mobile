<template>
  <ion-tab-bar>
    <ion-tab-button
      id="Login"
      tab="Login"
      @click="this.$router.push({ name: 'Login' })"
    >
      <ion-icon :icon="logInOutline" />
      <ion-label>Connexion</ion-label>
    </ion-tab-button>

    <ion-tab-button
      id="Register"
      tab="Register"
      @click="this.$router.push({ name: 'Register' })"
    >
      <ion-icon :icon="createOutline" />
      <ion-label>Inscription</ion-label>
    </ion-tab-button>

    <ion-tab-button
      id="Reset"
      tab="Reset"
      @click="this.$router.push({ name: 'Reset' })"
    >
      <ion-icon :icon="helpOutline" />
      <ion-label>Oublié</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script>
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/vue";
import { logInOutline, createOutline, helpOutline } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthFooter",
  components: {
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  },
  setup() {
    return {
      logInOutline,
      createOutline,
      helpOutline,
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
      if (tab === "Login") {
        this.addClass("Login");
        this.removeClass("Register");
        this.removeClass("Reset");
      } else if (tab === "Register") {
        this.removeClass("Login");
        this.addClass("Register");
        this.removeClass("Reset");
      } else if (tab === "Reset") {
        this.removeClass("Login");
        this.removeClass("Register");
        this.addClass("Reset");
      }
    },
  },
});
</script>

<style lang="scss">
ion-tab-bar {
  bottom: 20px;
  position: relative;
  border-radius: 16px;
  width: 92%;
  margin: 0 auto;
}
ion-tab-button {
  &::before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 2px;
  }
  &.tab-selected::before {
    background-color: var(--ion-color-primary);
  }
}
.tab-selected {
  color: var(--ion-color-primary);
}
</style>
