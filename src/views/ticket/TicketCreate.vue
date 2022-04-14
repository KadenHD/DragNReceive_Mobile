<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper title="Création d'un ticket">
      <form @submit.prevent="submitTicketCreateForm">
        <UiInput
          label="Titre"
          type="text"
          placeholder="Saisissez le titre de votre ticket"
          v-model:value="data.title"
          :valid="titleIsValid(data.title).valid"
          :error="titleIsValid(data.title).error"
        />
        <UiTextarea
          label="Contenu"
          type="text"
          placeholder="Saisissez le contenu de votre ticket"
          v-model:value="data.content"
          :valid="contentIsValid(data.content).valid"
          :error="contentIsValid(data.content).error"
        />
        <UiButton color="primary" type="submit">Envoyer</UiButton>
      </form>
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiTextarea from "@/components/ui/Textarea.vue";
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import { titleIsValid, contentIsValid } from "@/utils/validInputs.js";
import { alertController } from "@ionic/vue";

export default defineComponent({
  name: "TicketCreate",
  components: {
    Wrapper,
    UiInput,
    UiTextarea,
    UiButton,
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const data = reactive({
      title: "",
      content: "",
    });
    return { data, titleIsValid, contentIsValid };
  },
  watch: {
    $route() {
      this.data.title = "";
      this.data.content = "";
    },
  },
  methods: {
    submitTicketCreateForm() {
      const formIsValid =
        titleIsValid(this.data.title).valid &&
        contentIsValid(this.data.content).valid;
      if (formIsValid) {
        this.submitTicketCreateFormConfirm();
      }
    },
    async submitTicketCreateFormConfirm() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement envoyer le ticket ?",
        message:
          "Une fois envoyé, par la suite vous ne pourrez plus modifier le titre et le contenu.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Confirmer",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("createTicket", this.data);
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>