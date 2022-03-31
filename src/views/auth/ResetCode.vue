<template>
  <ion-page>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-card-header>
            <a href="/">Annuler</a>
            <ion-title>Réinitialiser le mot de passe</ion-title>
          </ion-card-header>
          <ion-text>Un code a été envoyé à votre adresse email</ion-text><br />
          <div class="ion-text-center">
            <ion-text>Entrez le code</ion-text>
          </div>
          <ion-row>
            <ion-col>
              <ion-input
                maxlength="1"
                v-model="one"
                @input="gotoNextField('two')"
                inputmode="numeric"
                class="rectangle one"
              ></ion-input>
            </ion-col>
            <ion-col>
              <ion-input
                maxlength="1"
                v-model="two"
                @input="gotoNextField('three')"
                inputmode="numeric"
                class="rectangle two"
              ></ion-input>
            </ion-col>
            <ion-col>
              <ion-input
                maxlength="1"
                v-model="three"
                @input="gotoNextField('four')"
                inputmode="numeric"
                class="rectangle three"
              ></ion-input>
            </ion-col>
            <ion-col>
              <ion-input
                maxlength="1"
                v-model="four"
                inputmode="numeric"
                class="rectangle four"
              ></ion-input>
            </ion-col>
          </ion-row>

          <a href="/"> Button </a>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonTitle,
  IonText,
  IonInput,
} from "@ionic/vue";
export default {
  setup() {
    return {
      one: null,
      two: null,
      three: null,
      four: null,
    };
  },
  components: {
    IonPage,
    IonContent,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonTitle,
    IonText,
    IonInput,
  },
  methods: {
    gotoNextField(nextElement) {
      nextElement.setFocus(); //eaze
    },
  },
};
</script>

<style>
.rectangle {
  width: 50px;
  height: 50px;
  box-shadow: 0px 5px 25px rgba(42, 122, 227, 0.911);
  border-radius: 15px;
}
</style>