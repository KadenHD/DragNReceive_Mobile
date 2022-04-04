<template>
  <ion-page>
    <ion-tabs>
      <AuthUnloggedHeader />
      <ion-router-outlet></ion-router-outlet>
      <AuthUnloggedFooter />
    </ion-tabs>
  </ion-page>
</template>

<script>
import AuthUnloggedHeader from "@/components/auth/unlogged/Header.vue";
import AuthUnloggedFooter from "@/components/auth/unlogged/Footer.vue";
import { IonPage, IonTabs, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthTabs",
  components: {
    AuthUnloggedHeader,
    AuthUnloggedFooter,
    IonPage,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>