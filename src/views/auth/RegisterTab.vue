<template>
  <AuthWrapper title="Inscription">
    <UiInput
      label="Nom"
      type="text"
      placeholder="Saisissez votre nom"
      alert=""
      v-model:value="data.lastname"
    />
    <UiInput
      label="Prénom"
      type="text"
      placeholder="Saisissez votre prénom"
      alert=""
      v-model:value="data.firstname"
    />
    <UiInput
      label="Adresse Email"
      type="text"
      placeholder="Saisissez votre adresse email"
      alert=""
      v-model:value="data.email"
    />
    <UiInput
      label="Mot de passe"
      type="password"
      placeholder="Saisissez votre mot de passe"
      alert=""
      v-model:value="data.password"
    />
    <UiInput
      label="Confirmez le mot de passe"
      type="password"
      placeholder="Saisissez de nouveau votre mot de passe"
      alert=""
      v-model:value="data.confirmPassword"
    />
    <UiButton color="primary" @click="register()">S'inscrire</UiButton>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/auth/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "AuthRegisterTab",
  components: {
    AuthWrapper,
    UiInput,
    UiButton,
  },
  setup() {
    window.onload = function () {
      document
        .getElementById("tab-button-Register")
        .classList.add("tab-selected");
    };
    const data = reactive({
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const register = () => {
      console.log(data);
    };
    return { data, register };
  },
});
</script>