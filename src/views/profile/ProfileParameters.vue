<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-button @click="closeModal">CLOSE</ion-button>
        </ion-buttons>
        <ion-title>MODAL HOME</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>MODAL HOME</h2>
      <ion-button @click="nextPage">SHOW MODAL DETAIL</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonButton,
  IonButtons,
  modalController,
} from "@ionic/vue";
import test from "@/views/profile/parameters/test.vue";

export default defineComponent({
  name: "ProfileParameters",
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonButton,
    IonButtons,
  },

  setup() {
    const modalNav = ref(null);

    onMounted(() => {
      const v = document.getElementById("modal-nav");
      modalNav.value = v;
    });

    const nextPage = () => {
      modalNav.value.push(test, {
        modalNav: modalNav,
      });
    };

    const closeModal = async () => {
      await modalController.dismiss();
    };

    return {
      nextPage,
      closeModal,
    };
  },
});
</script>