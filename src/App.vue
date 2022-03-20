<template>
  <ion-app>
    <ion-page>
      <!--- if --->
      <SearchBar v-if="currentUser" />
      <!--- else --->
      <LogoBar v-else />
      <ion-content>
        <ion-router-outlet />
      </ion-content>
      <!--- if logged --->
      <Footer />
    </ion-page>
  </ion-app>
</template>

<script>
import { IonApp, IonPage, IonContent, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

import SearchBar from "@/components/SearchBar.vue";
import LogoBar from "@/components/LogoBar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonPage,
    IonContent,
    IonRouterOutlet,
    SearchBar,
    LogoBar,
    Footer,
  },
});
</script>