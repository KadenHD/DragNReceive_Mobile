<template>
  <div class="Register">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Inscription</ion-card-title>
      </ion-card-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Identifiants</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Adresse email</ion-label>
            <ion-input v-model="data.email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Mot de passe</ion-label>
            <ion-input type="password" v-model="data.password"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Informations personnelles</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Nom</ion-label>
            <ion-input v-model="data.lastname"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Prénom</ion-label>
            <ion-input v-model="data.firstname"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card-content>
        <ion-button expand="full" @click="register()"
          >S'inscrire</ion-button
        ></ion-card-content
      >
    </ion-card>
  </div>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      data: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        roleId: "4",
      },
    };
  },
  methods: {
    register() {
      console.log(this.data);
    },
  },
});
</script>