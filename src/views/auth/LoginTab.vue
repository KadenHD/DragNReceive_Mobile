<template>
  <ion-page>
    <Wrapper title="Connexion">
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
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { IonPage } from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import { emailIsValid, passwordIsValid } from "@/utils/validInputs.js";

export default defineComponent({
  name: "AuthLoginTab",
  components: {
    Wrapper,
    UiInput,
    UiButton,
    IonPage,
  },
  setup() {
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
  watch: {
    $route() {
      this.data.email = "";
      this.data.password = "";
    },
  },
  methods: {
    submitLoginForm() {
      const formIsValid =
        emailIsValid(this.data.email).valid &&
        passwordIsValid(this.data.password).valid;
      if (formIsValid) {
        this.$store.dispatch("login", this.data);
      }
    },
  },
});
</script>