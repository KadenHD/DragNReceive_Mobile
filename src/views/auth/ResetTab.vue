<template>
  <AuthWrapper title="Réinitialisation de mot de passe">
    <UiInput
      label="Adresse Email"
      type="text"
      placeholder="Saisissez votre adresse email"
      v-model:value="data.email"
    />
    <UiButton color="primary" @click="reset()">Envoyer</UiButton>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/auth/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { defineComponent, reactive } from "vue";

window.onload = function () {
  document.getElementById("tab-button-Reset").classList.add("tab-selected");
};

export default defineComponent({
  name: "AuthResetTab",
  components: {
    AuthWrapper,
    UiInput,
    UiButton,
  },
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    const reset = () => {
      console.log(data);
    };
    return { data, reset };
  },
});
</script>