<template>
  <AuthWrapper title="Connexion">
    <UiInput
      label="Adresse Email"
      type="text"
      placeholder="Saisissez votre adresse email"
      v-model:value="data.email"
    />
    <UiInput
      label="Mot de passe"
      type="password"
      placeholder="Saisissez votre mot de passe"
      v-model:value="data.password"
    />
    <UiButton color="primary" @click="login()">Se connecter</UiButton>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/auth/Wrapper.vue";
import UiButton from "@/components/ui/Button.vue";
import UiInput from "@/components/ui/Input.vue";
import { defineComponent, reactive } from "vue";

window.onload = function () {
  document.getElementById("tab-button-Login").classList.add("tab-selected");
};

export default defineComponent({
  name: "AuthLoginTab",
  components: {
    AuthWrapper,
    UiButton,
    UiInput,
  },
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    const login = () => {
      console.log(data);
    };
    return { data, login };
  },
});
</script>