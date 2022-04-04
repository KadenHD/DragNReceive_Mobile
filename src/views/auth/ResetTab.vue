<template>
  <AuthUnloggedWrapper title="Réinitialisation de mot de passe">
    <form @submit.prevent="submitResetForm">
      <UiInput
        label="Adresse Email"
        type="text"
        placeholder="Saisissez votre adresse email"
        v-model:value="data.email"
        :valid="emailIsValid(data.email).valid"
        :error="emailIsValid(data.email).error"
      />
      <UiButton color="primary" type="submit">Envoyer</UiButton>
    </form>
  </AuthUnloggedWrapper>
</template>

<script>
import AuthUnloggedWrapper from "@/components/auth/unlogged/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { defineComponent, reactive } from "vue";
import { emailIsValid } from "@/utils/validInputs.js";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "AuthResetTab",
  components: {
    AuthUnloggedWrapper,
    UiInput,
    UiButton,
  },
  setup() {
    window.onload = function () {
      document.getElementById("tab-button-Reset").classList.add("tab-selected");
    };
    const data = reactive({
      email: "",
    });
    return { data, emailIsValid };
  },
  methods: {
    submitResetForm() {
      const formIsValid = emailIsValid(this.data.email).valid;
      if (formIsValid) {
        this.submitResetFormConfirm();
      }
    },
    async submitResetFormConfirm() {
      const alert = await alertController.create({
        header: "Souhaitez vous recevoir votre code de réinitialisation ?",
        message:
          "Vous recevrez un <strong>code</strong> par email vous permettant de changer de mot de passe",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            cssClass: "danger",
            id: "cancel-button",
          },
          {
            text: "Demander",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("reset", this.data);
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>