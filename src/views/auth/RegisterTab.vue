<template>
  <ion-page>
    <Wrapper title="Inscription">
      <form @submit.prevent="submitRegisterForm">
        <UiInput
          label="Nom"
          type="text"
          placeholder="Saisissez votre nom"
          v-model:value="data.lastname"
          :valid="lastnameIsValid(data.lastname).valid"
          :error="lastnameIsValid(data.lastname).error"
        />
        <UiInput
          label="Prénom"
          type="text"
          placeholder="Saisissez votre prénom"
          v-model:value="data.firstname"
          :valid="firstnameIsValid(data.firstname).valid"
          :error="firstnameIsValid(data.firstname).error"
        />
        <UiInput
          label="Adresse Email"
          type="text"
          placeholder="Saisissez votre adresse email"
          v-model:value="data.email"
          :valid="emailIsValid(data.email).valid"
          :error="emailIsValid(data.email).error"
        />
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
        <UiButton color="primary" type="submit">S'inscrire</UiButton>
      </form>
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { IonPage } from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import {
  lastnameIsValid,
  firstnameIsValid,
  emailIsValid,
  passwordIsValid,
  confirmPasswordIsValid,
} from "@/utils/validInputs.js";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "AuthRegisterTab",
  components: {
    Wrapper,
    UiInput,
    UiButton,
    IonPage,
  },
  setup() {
    const data = reactive({
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      confirmPassword: "",
      roleId: "4",
    });
    return {
      data,
      lastnameIsValid,
      firstnameIsValid,
      emailIsValid,
      passwordIsValid,
      confirmPasswordIsValid,
    };
  },
  watch: {
    $route() {
      this.data.lastname = "";
      this.data.firstname = "";
      this.data.email = "";
      this.data.password = "";
      this.data.confirmPassword = "";
    },
  },
  methods: {
    submitRegisterForm() {
      const formIsValid =
        lastnameIsValid(this.data.lastname).valid &&
        firstnameIsValid(this.data.firstname).valid &&
        emailIsValid(this.data.email).valid &&
        passwordIsValid(this.data.password).valid &&
        confirmPasswordIsValid(this.data.confirmPassword, this.data.password)
          .valid;
      if (formIsValid) {
        this.submitRegisterFormConfirm();
      }
    },
    async submitRegisterFormConfirm() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement créer votre compte ?",
        message:
          "Message Vos données personnelles seront sécurisée, de plus vous pourrez supprimer votre compte par la suite : <strong>nous ne gardons aucune donnée</strong> !",
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
              this.$store.dispatch("register", this.data);
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>