<template>
  <div class="SearchBar">
    <ion-header>
      <ion-toolbar>
        <ion-title> DragN'Receive </ion-title>
      </ion-toolbar>
    </ion-header>
  </div>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
  },
});
</script>