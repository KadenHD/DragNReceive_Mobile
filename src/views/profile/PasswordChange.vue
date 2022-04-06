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
          label="Mot de passe"
          type="password"
          placeholder="Saisissez votre mot de passe"
          v-model:value="data.password"
          :valid="passwordIsValid(data.password).valid"
          :error="passwordIsValid(data.password).error"
        />
        <UiInput
          label="Confirmez le mot de passe"
          type="password"
          placeholder="Saisissez de nouveau votre mot de passe"
          v-model:value="data.confirmPassword"
          :valid="
            confirmPasswordIsValid(data.confirmPassword, data.password).valid
          "
          :error="
            confirmPasswordIsValid(data.confirmPassword, data.password).error
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
import {
  passwordIsValid,
  confirmPasswordIsValid,
} from "@/utils/validInputs.js";
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
      password: "",
      confirmPassword: "",
    });
    return { data, passwordIsValid, confirmPasswordIsValid };
  },
  methods: {
    submitPasswordChangeForm() {
      const formIsValid =
        passwordIsValid(this.data.password).valid &&
        confirmPasswordIsValid(this.data.confirmPassword, this.data.password)
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