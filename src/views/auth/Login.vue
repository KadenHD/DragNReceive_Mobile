<template>
  <div class="Login">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Connexion</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Addresse email</ion-label>
          <ion-input v-model="data.email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password" v-model="data.password"></ion-input>
        </ion-item>
        <ion-button class="ion-margin-top" expand="full" @click="login()"
          >Se connecter</ion-button
        >
      </ion-card-content>
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
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.data);
    },
  },
});
</script>