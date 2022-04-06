<template>
  <ion-page>
    <ion-content>
      <Wrapper title="Profil" parameters>
        <ion-avatar>
          <img
            :src="
              currentUser.path ? url + currentUser.path : 'assets/img/user.svg'
            "
          />
        </ion-avatar>
        <UiInput label="Nom" disabled :value="currentUser.lastname" />
        <UiInput label="Prénom" disabled :value="currentUser.firstname" />
        <UiInput label="Email" disabled :value="currentUser.email" />
        <UiInput
          label="Date de création du compte"
          disabled
          :value="reformatedDates(currentUser.createdAt)"
        />
        <UiInput
          label="Dernière modification du profil"
          disabled
          :value="reformatedDates(currentUser.updatedAt)"
        />
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import { IonPage, IonContent, IonAvatar } from "@ionic/vue";
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
  },
});
</script>

<style lang="scss">
ion-avatar {
  width: 150px !important;
  height: 150px !important;
  margin: 0 auto;
}
</style>