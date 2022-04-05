<template>
  <ion-page>
    <ion-content>
      <div class="wrapper">
        <ion-card>
          <ion-card-content>
            <a v-if="this.$route.name === 'ResetCode'" href="/"> Annuler</a>
            <ion-card-header>
              <ion-card-title>{{ title }}</ion-card-title>
            </ion-card-header>
            <slot></slot>
          </ion-card-content>
        </ion-card>
      </div> </ion-content
  ></ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

export default defineComponent({
  name: "AuthUnloggedWrapper",
  props: {
    title: String,
  },
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },
});
</script>

<style lang="scss">
div.wrapper {
  margin: 40px 20px 80px 20px;
}
</style>