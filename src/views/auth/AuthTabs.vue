<template>
  <ion-page>
    <ion-tabs>
      <Header />
      <ion-router-outlet></ion-router-outlet>
      <Footer v-if="this.$route.name != 'ResetCode'" />
    </ion-tabs>
  </ion-page>
</template>

<script>
import Header from "@/components/auth/DefaultHeader.vue";
import Footer from "@/components/auth/unlogged/Footer.vue";
import { IonPage, IonTabs, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthTabs",
  components: {
    Header,
    Footer,
    IonPage,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>