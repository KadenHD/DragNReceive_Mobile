<template>
  <ion-page>
    <ion-tabs>
      <DefaultHeader
        v-if="
          this.$route.name != 'Home' &&
          this.$route.name != 'ProfileParameters' &&
          this.$route.name != 'ProfilePasswordChange' &&
          this.$route.name != 'ProfilePhotoChange' &&
          this.$route.name != 'Ticket' &&
          this.$route.name != 'TicketCreate' &&
          this.$route.name != 'Shop' &&
          this.$route.name != 'Product' &&
          this.$route.name != 'Order'
        "
      />
      <ion-router-outlet></ion-router-outlet>
      <LoggedFooter
        v-if="
          this.$route.name != 'ProfileParameters' &&
          this.$route.name != 'ProfilePasswordChange' &&
          this.$route.name != 'ProfilePhotoChange' &&
          this.$route.name != 'Ticket' &&
          this.$route.name != 'TicketCreate' &&
          this.$route.name != 'Shop' &&
          this.$route.name != 'Product' &&
          this.$route.name != 'Order'
        "
      />
    </ion-tabs>
  </ion-page>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import LoggedFooter from "@/components/LoggedFooter.vue";
import { IonPage, IonTabs, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTabs",
  components: {
    DefaultHeader,
    LoggedFooter,
    IonPage,
    IonTabs,
    IonRouterOutlet,
  },
});
</script>