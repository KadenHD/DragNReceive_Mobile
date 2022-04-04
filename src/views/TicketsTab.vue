<template>
  <ion-page> Tickets </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketsTab",
  components: {
    IonPage,
  },
  setup() {
    window.onload = function () {
      document
        .getElementById("tab-button-Tickets")
        .classList.add("tab-selected");
    };
  },
});
</script>