<template>
  <form class="auth__form">
    <ion-card>
      <ion-card-content>
        <slot></slot>
      </ion-card-content>
    </ion-card>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import { IonCard, IonCardContent } from "@ionic/vue";

export default defineComponent({
  name: "AuthForm",
  components: {
    IonCard,
    IonCardContent,
  },
});
</script>

<style lang="scss">
form.auth__form {
  margin: 40px 20px 80px 20px;
}
</style>