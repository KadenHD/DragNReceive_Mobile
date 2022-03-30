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
</template>

<script>
import { defineComponent } from "vue";
import { IonItem, IonLabel, IonInput } from "@ionic/vue";

export default defineComponent({
  name: "UiInput",
  props: {
    label: String,
    type: String,
    placeholder: String,
    value: String,
  },
  components: { IonItem, IonLabel, IonInput },
});
</script>