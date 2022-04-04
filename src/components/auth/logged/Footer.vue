<template>
  <ion-tab-bar>
    <ion-tab-button
      class="borderRadiusLeft"
      id=""
      tab=""
      @click="this.$router.push({ name: '' })"
    >
      <ion-icon :icon="logInOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-tab-button
      class="borderRadiusBeforeCenter"
      id=""
      tab=""
      @click="this.$router.push({ name: '' })"
    >
      <ion-icon :icon="logInOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-img src="assets/img/Jimdo/DragNReceive/hexaName/logo.svg"></ion-img>

    <ion-tab-button
      class="borderRadiusAfterCenter"
      id=""
      tab=""
      @click="this.$router.push({ name: '' })"
    >
      <ion-icon :icon="logInOutline" />
      <ion-label></ion-label>
    </ion-tab-button>

    <ion-tab-button
      class="borderRadiusRight"
      id=""
      tab=""
      @click="this.$router.push({ name: '' })"
    >
      <ion-icon :icon="logInOutline" />
      <ion-label></ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script>
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonImg } from "@ionic/vue";
import {
  logInOutline,
  createOutline,
  helpOutline,
  earOutline,
} from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthUnloggedFooter",
  components: {
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonImg,
  },
  setup() {
    return {
      logInOutline,
      createOutline,
      helpOutline,
      earOutline,
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
  position: relative;
  width: 92%;
  border: 0;
  bottom: 20px;
  margin: 0 auto;
  background-color: transparent;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
}
.buttonCenter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.borderRadiusLeft {
  border-radius: 16px 0px 0px 16px;
}
.borderRadiusRight {
  border-radius: 0px 16px 16px 0px;
}
.borderRadiusBeforeCenter {
  border-radius: 0px 16px 16px 0px;
  margin-right: 10px;
}
.borderRadiusAfterCenter {
  border-radius: 16px 0px 0px 16px;
  margin-left: 10px;
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
}
</style>
