<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item @click="this.$router.push({ name: 'ProfilePasswordChange' })">
          <ion-label>Changer mon mot de passe</ion-label>
          <ion-icon :icon="chevronForward" />
        </ion-item>
        <ion-item @click="this.$router.push({ name: 'ProfilePhotoChange' })">
          <ion-label>Changer ma photo de profil</ion-label>
          <ion-icon :icon="chevronForward" />
        </ion-item>
        <ion-item @click="deleteClick()">
          <ion-label color="danger">Supprimer mon compte</ion-label>
        </ion-item>
        <ion-item @click="logoutClick()">
          <ion-label color="danger">Se déconnecter</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  alertController,
} from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileParameters",
  components: {
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  },
  setup() {
    return { chevronForward };
  },
  methods: {
    async deleteClick() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement supprimer votre compte ?",
        message:
          "Il n'y aura pas de retour en arrière, toutes les données vous concernant serront effacés.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Supprimer",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("deleteAccount");
            },
          },
        ],
      });
      return alert.present();
    },
    async logoutClick() {
      const alert = await alertController.create({
        header: "Souhaitez vous réellement vous déconnecter ?",
        message:
          "Vous devrez à nouveau vous connecter pour utiliser l'application.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Déconnexion",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("logout");
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>