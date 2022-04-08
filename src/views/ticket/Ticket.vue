<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper :title="`Ticket n°${userTicket.id}`">
      <ion-card scroll-y="true" class="groupList">
        <ion-card-header> Messages </ion-card-header>
        <ion-card-content>
          <ion-list v-for="message in ticket.messages" v-bind:key="message.id">
            <ion-item>
              <ion-label>
                <h2>{{ message.content }}</h2>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
      <form @submit.prevent="submitMessageForm">
        <UiTextarea
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
import UiTextarea from "@/components/ui/Textarea.vue";
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
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
    UiTextarea,
    UiButton,
    IonPage,
    IonButtons,
    IonHeader,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const data = reactive({
      content: "",
      ticketId: "",
    });
    const url = process.env.VUE_APP_URL;
    return { data, url, contentIsValid };
  },
  watch: {
    $route() {
      this.data.content = "";
      this.data.ticketId = "";
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
        this.data.ticketId = this.$route.params.id;
        this.$store.dispatch("createMessage", this.data);
        this.data.content = "";
      }
    },
  },
});
</script>

<style lang="scss">
.groupList {
  height: 220px;
  overflow: scroll;
}
</style>