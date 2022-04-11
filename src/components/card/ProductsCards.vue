<template>
  <div v-for="product in items" v-bind:key="product.id">
    <ion-item-divider v-if="product.id !== items[0].id" />
    <ion-item>
      {{ product }}
    </ion-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonItem, IonItemDivider } from "@ionic/vue";

export default defineComponent({
  name: "ProductsCards",
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

<style scoped lang="scss">
ion-item {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>