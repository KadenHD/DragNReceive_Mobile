<template>
  <ion-header>
    <ion-toolbar>
      <ion-searchbar
        placeholder="Cherchez des produits / boutiques"
      ></ion-searchbar>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from "vue";
import { IonHeader, IonToolbar, IonSearchbar } from "@ionic/vue";

export default defineComponent({
  name: "AuthSearchBarHeader",
  components: {
    IonHeader,
    IonToolbar,
    IonSearchbar,
  },
});
</script>