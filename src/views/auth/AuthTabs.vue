<template>
  <ion-page>
    <ion-tabs>
      <DefaultHeader v-if="this.$route.name != 'ResetCode'" />
      <ion-router-outlet></ion-router-outlet>
      <UnloggedFooter v-if="this.$route.name != 'ResetCode'" />
    </ion-tabs>
  </ion-page>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import UnloggedFooter from "@/components/UnloggedFooter.vue";
import { IonPage, IonTabs, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthTabs",
  components: {
    DefaultHeader,
    UnloggedFooter,
    IonPage,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>