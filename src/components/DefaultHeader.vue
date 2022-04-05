<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>DragN'Receive</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from "vue";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";

export default defineComponent({
  name: "DefaultHeader",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
  },
});
</script>