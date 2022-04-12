<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper :title="`Ticket n°${userTicket.id}`">
      <h2>{{ ticket.content }}</h2>
      <ion-card v-if="ticketMessages" scroll-y="true" class="groupList">
        <ion-list v-for="message in ticketMessages" v-bind:key="message.id">
          <ion-item-divider>
            <ion-row>
              <ion-col>
                <ion-avatar>
                  <ion-img
                    :src="
                      message.user.path
                        ? url + message.user.path
                        : 'assets/img/user.svg'
                    "
                  />
                </ion-avatar>
              </ion-col>
              <ion-col>
                <h2>
                  {{ message.user.firstname }} {{ message.user.lastname }}
                  <br />
                  {{ message.content }}
                </h2>
                <ion-card-subtitle>{{
                  reformatedDates(message.createdAt)
                }}</ion-card-subtitle>
              </ion-col>
            </ion-row>
          </ion-item-divider>
        </ion-list>
      </ion-card>
      <form
        v-if="userTicket.ticketStatusId != '2'"
        @submit.prevent="submitMessageForm"
      >
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
  IonRow,
  IonCol,
  IonItemDivider,
  IonCard,
  IonAvatar,
  IonImg,
  IonCardSubtitle,
  IonList,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";

import { mapGetters } from "vuex";
import _ from "lodash";
import { reformatedDates } from "@/utils/index.js";
import { contentIsValid } from "@/utils/validInputs.js";

export default defineComponent({
  name: "Ticket",
  components: {
    Wrapper,
    UiTextarea,
    UiButton,
    IonPage,
    IonButtons,
    IonHeader,
    IonRow,
    IonCol,
    IonItemDivider,
    IonCard,
    IonAvatar,
    IonImg,
    IonCardSubtitle,
    IonList,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const data = reactive({
      content: "",
      ticketId: "",
    });
    const url = process.env.VUE_APP_URL;
    return { data, url, reformatedDates, contentIsValid };
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
    ticketMessages: function () {
      if (!this.ticket.messages) {
        return null;
      } else {
        return _.orderBy(this.ticket.messages, ["updatedAt"], ["desc"]);
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

<style scoped lang="scss">
.groupList {
  height: 250px;
  overflow: scroll;
}
ion-row {
  padding-top: 10px;
}
ion-avatar {
  width: 60px !important;
  height: 60px !important;
}
h2 {
  color: var(--ion-text-color);
}
</style>