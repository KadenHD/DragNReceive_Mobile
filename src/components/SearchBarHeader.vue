<template>
  <ion-header>
    <ion-toolbar>
      <ion-searchbar
        placeholder="Cherchez des produits / boutiques"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      ></ion-searchbar>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from "vue";
import { IonHeader, IonToolbar, IonSearchbar } from "@ionic/vue";

export default defineComponent({
  name: "SearchBarHeader",
  props: {
    value: String,
  },
  components: {
    IonHeader,
    IonToolbar,
    IonSearchbar,
  },
});
</script>