<template>
  <ion-page>
    <ion-content>
      <AuthForm>
        <AuthTopSection title="Connexion" />
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
        <UiButton color="primary" @click="login">Se connecter</UiButton>
      </AuthForm>
    </ion-content>
  </ion-page>
</template>

<script>
import AuthForm from "@/components/auth/Form.vue";
import AuthTopSection from "@/components/auth/TopSection.vue";
import UiButton from "@/components/ui/Button.vue";
import UiInput from "@/components/ui/Input.vue";
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "AuthLoginTab",
  components: {
    AuthForm,
    AuthTopSection,
    UiButton,
    UiInput,
    IonPage,
    IonContent,
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