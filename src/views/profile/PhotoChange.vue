<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper title="Changement de photo">
      <form @submit.prevent="submitPhotoChangeForm">
        <ion-img v-if="data.photo" :src="data.photo"></ion-img>
        <ion-input
          type="file"
          placeholder="Insérez une photo"
          accept="image/*"
          v-model:value="data.photo"
        />
        <UiButton color="primary" type="submit">Changer</UiButton>
      </form>
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonImg,
  IonInput,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import { photoIsValid } from "@/utils/validInputs.js";
import { defineComponent, reactive } from "vue";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "ProfilePhotoChange",
  components: {
    Wrapper,
    UiButton,
    IonPage,
    IonButtons,
    IonHeader,
    IonImg,
    IonInput,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const data = reactive({
      photo: null,
    });
    return { data };
  },
  methods: {
    submitPhotoChangeForm() {
      console.log(this.data.photo);
      const formIsValid = photoIsValid(this.data.photo).valid;
      if (formIsValid) {
        this.submitPasswordChangeFormConfirm();
      }
    },
    async submitPhotoChangeFormConfirm() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement modifier votre mot de passe ?",
        message:
          "Une fois modifié, pour vous connecter de nouveau il vous faudra utiliser votre nouveau mot de passe.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            cssClass: "danger",
            id: "cancel-button",
          },
          {
            text: "Confirmer",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("", this.data);
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>