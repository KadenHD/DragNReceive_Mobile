<template>
  <div v-for="shop in items" v-bind:key="shop.id">
    <ion-item-divider v-if="shop.id !== items[0].id" />
    <ion-item>
      {{ shop }}
    </ion-item>
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

<style scoped lang="scss">
ion-item {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>