<template>
  <AuthWrapper title="Réinitialisation de mot de passe">
    <ion-text>Un code a été envoyé à votre adresse email !</ion-text>
    <ion-text>Saisissez le code :</ion-text>
    <form @submit.prevent="submitResetCodeForm">
      <ion-row>
        <ion-col>
          <ion-input
            type="number"
            maxlength="1"
            v-model="data.one"
            inputmode="numeric"
            class="formCode"
          ></ion-input>
        </ion-col>
        <ion-col>
          <ion-input
            type="number"
            maxlength="1"
            v-model="data.two"
            inputmode="numeric"
            class="formCode"
          ></ion-input>
        </ion-col>
        <ion-col>
          <ion-input
            type="number"
            maxlength="1"
            v-model="data.three"
            inputmode="numeric"
            class="formCode"
          ></ion-input>
        </ion-col>
        <ion-col>
          <ion-input
            type="number"
            maxlength="1"
            v-model="data.four"
            inputmode="numeric"
            class="formCode"
          ></ion-input>
        </ion-col>
      </ion-row>

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
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/auth/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { IonRow, IonCol, IonText, IonInput } from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import {
  passwordIsValid,
  confirmPasswordIsValid,
} from "@/utils/validInputs.js";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "AuthResetCode",
  components: {
    AuthWrapper,
    UiInput,
    UiButton,
    IonRow,
    IonCol,
    IonText,
    IonInput,
  },
  setup() {
    const data = reactive({
      one: "",
      two: "",
      three: "",
      four: "",
      password: "",
      confirmPassword: "",
    });
    return { data, passwordIsValid, confirmPasswordIsValid };
  },
  methods: {
    submitResetCodeForm() {
      const formIsValid =
        !!this.data.one &&
        !!this.data.two &&
        !!this.data.three &&
        !!this.data.four &&
        passwordIsValid(this.data.password).valid &&
        confirmPasswordIsValid(this.data.confirmPassword, this.data.password)
          .valid;
      if (formIsValid) {
        this.submitResetCodeFormConfirm();
      }
    },
    async submitResetCodeFormConfirm() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement modifier votre mot de passe ?",
        message:
          "Une fois modifié, vous pourrez de nouveau vous connecter à votre compte.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            cssClass: "danger",
            id: "cancel-button",
          },
          {
            text: "Créer",
            id: "confirm-button",
            handler: () => {
              console.log("Valid");
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>

<style lang="scss">
.formCode {
  width: 50px;
  height: 50px;
  box-shadow: 0px 5px 25px rgba(42, 122, 227, 0.911);
  border-radius: 15px;
}
</style>