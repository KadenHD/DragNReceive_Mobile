<template>
  <ion-page>
    <ion-tabs>
      <SearchBarHeader v-if="this.$route.name === 'Home'" />
      <DefaultHeader v-else />
      <ion-router-outlet></ion-router-outlet>
      <LoggedFooter />
    </ion-tabs>
  </ion-page>
</template>

<script>
import SearchBarHeader from "@/components/SearchBarHeader.vue";
import DefaultHeader from "@/components/DefaultHeader.vue";
import LoggedFooter from "@/components/LoggedFooter.vue";
import { IonPage, IonTabs, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTabs",
  components: {
    SearchBarHeader,
    DefaultHeader,
    LoggedFooter,
    IonPage,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>