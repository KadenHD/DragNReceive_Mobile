<template>
  <ion-page>
    <ion-content>
      <AuthForm>
        <AuthTopSection title="Inscription" />
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
        <UiInput
          label="Confirmez le mot de passe"
          type="password"
          placeholder="Saisissez de nouveau votre mot de passe"
          v-model:value="data.confirmPassword"
        />
        <UiButton color="primary" @click="register">S'inscrire</UiButton>
      </AuthForm>
    </ion-content>
  </ion-page>
</template>

<script>
import AuthForm from "@/components/auth/Form.vue";
import AuthTopSection from "@/components/auth/TopSection.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "AuthRegisterTab",
  components: {
    AuthForm,
    AuthTopSection,
    UiInput,
    UiButton,
    IonPage,
    IonContent,
  },
  setup() {
    const data = reactive({
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