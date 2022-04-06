<template>
  <ion-page>
    <ion-content>
      <ion-icon
        @click="this.$router.push({ name: 'ProfileParameters' })"
        size="large"
        :icon="cogOutline"
      ></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import { cogOutline } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileTab",
  components: {
    IonPage,
    IonContent,
    IonIcon,
  },
  setup() {
    return { cogOutline };
  },
});
</script>