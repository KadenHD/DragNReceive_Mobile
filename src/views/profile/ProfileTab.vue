<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="setOpen(true)">Show Modal With Nav</ion-button>
      <ion-modal :is-open="isOpenRef" @onDidDismiss="setOpen(false)">
        <NavBaseModal :rootPage="ProfileParameters"></NavBaseModal>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonModal, IonButton } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import NavBaseModal from "@/components/NavBaseModal.vue";
import ProfileParameters from "@/views/profile/ProfileParameters.vue";

export default defineComponent({
  name: "ProfileTab",
  components: {
    IonContent,
    IonPage,
    IonModal,
    IonButton,
    NavBaseModal,
  },
  setup() {
    window.onload = function () {
      document
        .getElementById("tab-button-Profile")
        .classList.add("tab-selected");
    };

    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);
    return { isOpenRef, setOpen, ProfileParameters };
  },
});
</script>