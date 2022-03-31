<template>
  <AuthWrapper title="Réinitialisation de mot de passe">
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
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/auth/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { defineComponent, reactive } from "vue";
import { emailIsValid } from "@/utils/validInputs.js";

export default defineComponent({
  name: "AuthResetTab",
  components: {
    AuthWrapper,
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
        console.log("Valid");
      }
    },
  },
});
</script>