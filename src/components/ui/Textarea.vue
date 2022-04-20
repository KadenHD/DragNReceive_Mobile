<template>
  <div>
    <ion-item>
      <ion-label position="floating">{{ label }}</ion-label>
      <ion-textarea
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        rows="8"
      ></ion-textarea>
    </ion-item>
    <ion-text v-if="!valid" color="danger">{{ error }} </ion-text>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonItem, IonLabel, IonTextarea, IonText } from "@ionic/vue";

export default defineComponent({
  name: "UiTextarea",
  props: {
    disabled: Boolean,
    valid: Boolean,
    error: String,
    label: String,
    type: String,
    placeholder: String,
    value: String,
  },
  components: { IonItem, IonLabel, IonTextarea, IonText },
});
</script>