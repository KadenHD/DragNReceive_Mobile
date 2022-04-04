<template>
  <ion-page> Home </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeTab",
  components: {
    IonPage,
  },
  setup() {
    window.onload = function () {
      document.getElementById("tab-button-Home").classList.add("tab-selected");
    };
  },
});
</script>