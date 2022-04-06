<template>
  <ion-page>
    <ion-content>
      <ion-button>
        <ion-icon :icon="cogOutline"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { cogOutline } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileTab",
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
  },
  setup() {
    window.onload = function () {
      document
        .getElementById("tab-button-Profile")
        .classList.add("tab-selected");
    };
    return { cogOutline };
  },
});
</script>