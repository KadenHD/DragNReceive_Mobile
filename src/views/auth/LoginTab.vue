<template>
  <AuthWrapper title="Connexion">
    <form @submit.prevent="submitLoginForm">
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
      <UiButton color="primary" type="submit">Se connecter</UiButton>
    </form>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/auth/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { defineComponent, reactive } from "vue";
import { emailIsValid, passwordIsValid } from "@/utils/validInputs.js";

export default defineComponent({
  name: "AuthLoginTab",
  components: {
    AuthWrapper,
    UiInput,
    UiButton,
  },
  setup() {
    window.onload = function () {
      document.getElementById("tab-button-Login").classList.add("tab-selected");
    };
    const data = reactive({
      email: "",
      password: "",
    });
    return {
      data,
      emailIsValid,
      passwordIsValid,
    };
  },
  methods: {
    submitLoginForm() {
      const formIsValid =
        emailIsValid(this.data.email).valid &&
        passwordIsValid(this.data.password).valid;
      if (formIsValid) {
        console.log("Valid");
      }
    },
  },
});
</script>