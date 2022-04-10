<template>
  <ion-tab-bar>
    <ion-tab-button
      v-if="this.$route.name === 'Login'"
      class="tab-selected"
      id="Login"
      tab="Login"
      @click="this.$router.push({ name: 'Login' })"
    >
      <ion-icon :icon="logInOutline" />
      <ion-label>Connexion</ion-label>
    </ion-tab-button>
    <ion-tab-button
      v-else
      id="Login"
      tab="Login"
      @click="this.$router.push({ name: 'Login' })"
    >
      <ion-icon :icon="logInOutline" />
      <ion-label>Connexion</ion-label>
    </ion-tab-button>

    <ion-tab-button
      v-if="this.$route.name === 'Register'"
      class="tab-selected"
      id="Register"
      tab="Register"
      @click="this.$router.push({ name: 'Register' })"
    >
      <ion-icon :icon="createOutline" />
      <ion-label>Inscription</ion-label>
    </ion-tab-button>
    <ion-tab-button
      v-else
      id="Register"
      tab="Register"
      @click="this.$router.push({ name: 'Register' })"
    >
      <ion-icon :icon="createOutline" />
      <ion-label>Inscription</ion-label>
    </ion-tab-button>

    <ion-tab-button
      v-if="this.$route.name === 'Reset'"
      class="tab-selected"
      id="Reset"
      tab="Reset"
      @click="this.$router.push({ name: 'Reset' })"
    >
      <ion-icon :icon="helpOutline" />
      <ion-label>Oublié</ion-label>
    </ion-tab-button>
    <ion-tab-button
      v-else
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
  name: "UnloggedFooter",
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
});
</script>

<style scoped lang="scss">
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
  &.tab-selected {
    color: var(--ion-color-primary);
    &::before {
      background-color: var(--ion-color-primary);
    }
  }
}
</style>
