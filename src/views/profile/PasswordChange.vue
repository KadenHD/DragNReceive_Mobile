<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper title="Changement de mot de passe">
      <form @submit.prevent="submitPasswordChangeForm">
        <UiInput
          label="Mot de passe actuel"
          type="password"
          placeholder="Saisissez votre mot de passe actuel"
          v-model:value="data.actualPassword"
          :valid="passwordIsValid(data.actualPassword).valid"
          :error="passwordIsValid(data.actualPassword).error"
        />
        <UiInput
          label="Nouveau mot de passe"
          type="password"
          placeholder="Saisissez votre nouveau mot de passe"
          v-model:value="data.newPassword"
          :valid="
            newPasswordIsValid(data.newPassword, data.actualPassword).valid
          "
          :error="
            newPasswordIsValid(data.newPassword, data.actualPassword).error
          "
        />
        <UiButton color="primary" type="submit">Changer</UiButton>
      </form>
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import { passwordIsValid, newPasswordIsValid } from "@/utils/validInputs.js";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "ProfilePasswordChange",
  components: {
    Wrapper,
    UiInput,
    UiButton,
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const data = reactive({
      newPassword: "",
      actualPassword: "",
    });
    return { data, passwordIsValid, newPasswordIsValid };
  },
  watch: {
    $route() {
      this.data.newPassword = "";
      this.data.actualPassword = "";
    },
  },
  methods: {
    submitPasswordChangeForm() {
      const formIsValid =
        passwordIsValid(this.data.actualPassword).valid &&
        newPasswordIsValid(this.data.newPassword, this.data.actualPassword)
          .valid;
      if (formIsValid) {
        this.submitPasswordChangeFormConfirm();
      }
    },
    async submitPasswordChangeFormConfirm() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement modifier votre mot de passe ?",
        message:
          "Une fois modifié, pour vous connecter de nouveau il vous faudra utiliser votre nouveau mot de passe.",
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
              this.$store.dispatch("profileChangePassword", this.data);
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>