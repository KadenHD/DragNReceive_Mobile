<template>
  <ion-page>
    <ion-tabs>
      <Header />
      <ion-router-outlet></ion-router-outlet>
      <Footer />
    </ion-tabs>
  </ion-page>
</template>

<script>
import Header from "@/components/auth/SearchBarHeader.vue";
import Footer from "@/components/auth/logged/Footer.vue";
import { IonPage, IonTabs, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTabs",
  components: {
    Header,
    Footer,
    IonPage,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>