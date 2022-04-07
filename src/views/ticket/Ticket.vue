<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper :title="`Ticket n°${userTicket.id}`">
      <form @submit.prevent="submitMessageForm">
        <UiInput
          label="Contenu"
          type="text"
          placeholder="Saisissez le contenu de votre message"
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
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";

import { mapGetters } from "vuex";
// import { reformatedDates } from "@/utils/index.js";
import { contentIsValid } from "@/utils/validInputs.js";

export default defineComponent({
  name: "TicketCreate",
  components: {
    Wrapper,
    UiInput,
    UiButton,
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const data = reactive({
      content: "",
    });
    const url = process.env.VUE_APP_URL;
    return { data, url, contentIsValid };
  },
  watch: {
    $route() {
      this.data.content = "";
    },
  },
  created() {
    this.$store.dispatch("setTicket", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["ticket"]),
    userTicket: function () {
      if (!this.ticket) {
        return null;
      } else {
        return this.ticket;
      }
    },
  },
  methods: {
    submitMessageForm() {
      const formIsValid = contentIsValid(this.data.content).valid;
      if (formIsValid) {
        this.$store.dispatch("createMessage", this.data);
      }
    },
  },
});
</script>