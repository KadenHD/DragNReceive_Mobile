<template>
  <ion-item>
    <ion-label position="floating">{{ label }}</ion-label>
    <ion-input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    ></ion-input>
  </ion-item>
  <ion-text v-if="!valid" color="danger">{{ error }} </ion-text>
</template>

<script>
import { defineComponent } from "vue";
import { IonItem, IonLabel, IonInput, IonText } from "@ionic/vue";

export default defineComponent({
  name: "UiInput",
  props: {
    valid: Boolean,
    error: String,
    label: String,
    type: String,
    placeholder: String,
    value: String,
  },
  components: { IonItem, IonLabel, IonInput, IonText },
});
</script>