<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons>
        <ion-back-button></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonButtons, IonHeader, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonButtons, IonHeader, IonToolbar },
});
</script>