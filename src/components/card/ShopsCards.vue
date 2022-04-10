<template>
  <div v-for="shop in items" v-bind:key="shop.id">
    <ion-item>
      {{ shop }}
    </ion-item>
    <ion-item-divider />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonItem, IonItemDivider } from "@ionic/vue";

export default defineComponent({
  name: "ShopsCards",
  props: {
    items: Object,
  },
  components: {
    IonItem,
    IonItemDivider,
  },
  setup() {},
  methods: {},
});
</script>