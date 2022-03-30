<template>
  <ion-page>
    <ion-content>
      <AuthForm>
        <AuthTopSection title="Réinitialisation de mot de passe" />
        <UiInput
          label="Adresse Email"
          type="text"
          placeholder="Saisissez votre adresse email"
          v-model:value="data.email"
        />
        <UiButton color="primary" @click="reset">Envoyer</UiButton>
      </AuthForm>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import AuthTopSection from "@/components/auth/TopSection.vue";
import UiButton from "@/components/ui/Button.vue";
import AuthForm from "@/components/auth/Form.vue";
import UiInput from "@/components/ui/Input.vue";

export default defineComponent({
  name: "AuthResetTab",
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
    });
    const reset = () => {
      console.log(data);
    };
    return { data, reset };
  },
});
</script>