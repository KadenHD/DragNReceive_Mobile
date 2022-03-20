<template>
  <div class="SearchBar">
    <ion-header>
      <ion-toolbar>
        <ion-searchbar
          show-cancel-button="focus"
          placeholder="Chercher des produits"
        ></ion-searchbar
      ></ion-toolbar>
    </ion-header>
  </div>
</template>

<script>
import { IonHeader, IonToolbar, IonSearchbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonSearchbar,
  },
});
</script>