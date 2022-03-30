<template>
  <ion-page>
    <ion-tabs>
      <AuthHeader />
      <ion-router-outlet></ion-router-outlet>
      <AuthFooter />
    </ion-tabs>
  </ion-page>
</template>

<script>
import AuthHeader from "@/components/auth/Header.vue";
import AuthFooter from "@/components/auth/Footer.vue";
import { IonPage, IonTabs, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthTabs",
  components: {
    AuthHeader,
    AuthFooter,
    IonPage,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>