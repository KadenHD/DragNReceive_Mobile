<template>
  <ion-page>
    <ion-content>
      <Wrapper v-if="userInfos" title="Profil" profileParameters>
        <ion-avatar>
          <ion-img
            :src="userInfos.path ? url + userInfos.path : 'assets/img/user.svg'"
          />
        </ion-avatar>
        <UiInput label="Nom" disabled :value="userInfos.lastname" />
        <UiInput label="Prénom" disabled :value="userInfos.firstname" />
        <UiInput label="Email" disabled :value="userInfos.email" />
        <UiInput
          label="Date de création du compte"
          disabled
          :value="reformatedDates(userInfos.createdAt)"
        />
        <UiInput
          label="Dernière modification du profil"
          disabled
          :value="reformatedDates(userInfos.updatedAt)"
        />
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import { IonPage, IonContent, IonAvatar, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

import { mapGetters } from "vuex";
import { reformatedDates } from "@/utils/index.js";

export default defineComponent({
  name: "ProfileTab",
  components: {
    Wrapper,
    UiInput,
    IonPage,
    IonContent,
    IonAvatar,
    IonImg,
  },
  setup() {
    const url = process.env.VUE_APP_URL;
    return { url, reformatedDates };
  },
  created() {
    this.$store.dispatch("setCurrentUser");
  },
  computed: {
    ...mapGetters(["currentUser"]),
    userInfos: function () {
      if (!this.currentUser) {
        return null;
      } else {
        return this.currentUser;
      }
    },
  },
});
</script>

<style scoped lang="scss">
ion-avatar {
  width: 150px !important;
  height: 150px !important;
  margin: 0 auto;
}
</style>