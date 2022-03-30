<template>
  <section class="auth__top__section">
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { IonCardHeader, IonCardTitle } from "@ionic/vue";

export default defineComponent({
  name: "AuthTopSection",
  props: {
    title: String,
  },
  components: {
    IonCardHeader,
    IonCardTitle,
  },
});
</script>