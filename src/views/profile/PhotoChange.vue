<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper title="Changement de photo">
      <form @submit.prevent="submitPhotoChangeForm">
        <ion-avatar v-if="data.file">
          <ion-img :src="data.url" />
        </ion-avatar>
        <ion-input
          type="file"
          accept="image/png, image/jpeg"
          @change="onFileChange($event)"
        />
        <ion-text v-if="photoIsValid(data.file).error" color="danger"
          >{{ photoIsValid(data.file).error }}
        </ion-text>
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
  IonAvatar,
  IonImg,
  IonInput,
  IonText,
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
    IonAvatar,
    IonImg,
    IonInput,
    IonText,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const data = reactive({
      file: null,
      url: "",
    });
    return { data, photoIsValid };
  },
  watch: {
    $route() {
      this.data.file = null;
      this.data.url = "";
    },
  },
  methods: {
    onFileChange(fileChangeEvent) {
      this.data.file = fileChangeEvent.target.files[0];
      this.data.url = URL.createObjectURL(this.data.file);
    },
    submitPhotoChangeForm() {
      const formIsValid = photoIsValid(this.data.file).valid;
      if (formIsValid) {
        this.submitPhotoChangeFormConfirm();
      }
    },
    async submitPhotoChangeFormConfirm() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement modifier votre photo de profil ?",
        message: "Une fois modifié, la photo serra mise à jour sur notre site.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Confirmer",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("profileChangePhoto", this.data.file);
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>

<style scoped lang="scss">
ion-avatar {
  width: 150px !important;
  height: 150px !important;
  margin: 0 auto;
}
</style>