<template>
  <AuthWrapper title="Réinitialisation de mot de passe">
    <form @submit.prevent="submitResetForm" autocomplete="off">
      <UiInput
        label="Adresse Email"
        type="text"
        placeholder="Saisissez votre adresse email"
        v-model:value="data.email"
      >
        <ion-text v-if="!emailIsValid(data.email).valid" color="danger"
          >{{ emailIsValid(data.email).error }}
        </ion-text>
      </UiInput>
      <UiButton color="primary" type="submit">Envoyer</UiButton>
    </form>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/auth/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { IonText } from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import { emailIsValid } from "@/utils/validInputs.js";

export default defineComponent({
  name: "AuthResetTab",
  components: {
    AuthWrapper,
    UiInput,
    UiButton,
    IonText,
  },
  setup() {
    window.onload = function () {
      document.getElementById("tab-button-Reset").classList.add("tab-selected");
    };
    const data = reactive({
      email: "",
    });
    return { emailIsValid, data };
  },
  methods: {
    submitResetForm() {
      const formIsValid = this.emailIsValid(this.data.email).valid;
      if (formIsValid) {
        console.log("Valid");
      } else {
        console.log("Invalid");
      }
    },
  },
});
</script>