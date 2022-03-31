<template>
  <ion-button
    class="ui__button"
    expand="block"
    :color="color"
    :disabled="!form"
  >
    <slot></slot>
  </ion-button>
</template>

<script>
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";

export default defineComponent({
  name: "UiButton",
  props: {
    color: String,
    form: Boolean,
  },
  components: {
    IonButton,
  },
});
</script>

<style lang="scss">
.ui__button {
  margin-top: 20px;
  font-weight: bold;
}
</style>