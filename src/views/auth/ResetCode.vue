<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper title="Réinitialisation de mot de passe">
      <ion-text>Un code a été envoyé à votre adresse email !</ion-text><br />
      <ion-text>Saisissez le code :</ion-text>
      <form @submit.prevent="submitResetCodeForm">
        <ion-row>
          <ion-col>
            <ion-input
              type="tel"
              maxlength="1"
              v-model="data.one"
              inputmode="numeric"
              class="formCode"
            ></ion-input>
          </ion-col>
          <ion-col>
            <ion-input
              type="tel"
              maxlength="1"
              v-model="data.two"
              inputmode="numeric"
              class="formCode"
            ></ion-input>
          </ion-col>
          <ion-col>
            <ion-input
              type="tel"
              maxlength="1"
              v-model="data.three"
              inputmode="numeric"
              class="formCode"
            ></ion-input>
          </ion-col>
          <ion-col>
            <ion-input
              type="tel"
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
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRow,
  IonCol,
  IonText,
  IonInput,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import {
  passwordIsValid,
  confirmPasswordIsValid,
} from "@/utils/validInputs.js";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "AuthResetCode",
  components: {
    Wrapper,
    UiInput,
    UiButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonRow,
    IonCol,
    IonText,
    IonInput,
  },
  setup() {
    const data = reactive({
      code: "",
      one: "",
      two: "",
      three: "",
      four: "",
      password: "",
      confirmPassword: "",
      id: "",
      userId: "",
    });
    return { data, passwordIsValid, confirmPasswordIsValid };
  },
  watch: {
    $route() {
      this.data.code = "";
      this.data.one = "";
      this.data.two = "";
      this.data.three = "";
      this.data.four = "";
      this.data.password = "";
      this.data.confirmPassword = "";
    },
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
            id: "cancel-button",
          },
          {
            text: "Créer",
            id: "confirm-button",
            handler: () => {
              this.data.code =
                `${this.data.one}` +
                `${this.data.two}` +
                `${this.data.three}` +
                `${this.data.four}`;
              this.data.userId = this.$route.params.userId;
              this.data.id = this.$route.params.id;
              this.$store.dispatch("resetCode", this.data);
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
.formCode {
  width: 50px;
  height: 50px;
  box-shadow: 0px 5px 25px var(--ion-color-primary);
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 5px 45px var(--ion-color-primary);
  }
}
</style>