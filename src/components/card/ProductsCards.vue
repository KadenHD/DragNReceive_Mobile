<template>
  <div>
    <div v-for="product in items" v-bind:key="product.id">
      <ion-item-divider v-if="product.id !== items[0].id" />
      <ion-card>
        <ion-img :src="url + product.path" />
        <ion-card-header>
          <ion-card-title>{{ product.name }} </ion-card-title>
          <ion-card-title>{{ product.price }} €</ion-card-title>
          <ion-card-subtitle color="danger" v-if="product.stock <= 0">
            Le stock est épuisé...</ion-card-subtitle
          >
        </ion-card-header>
        <UiButton
          class="button"
          color="secondary"
          @click="
            this.$router.push({
              name: 'Product',
              params: { id: product.id },
            })
          "
          >Voir</UiButton
        >
      </ion-card>
    </div>
  </div>
</template>

<script>
import UiButton from "@/components/ui/Button.vue";
import {
  IonItemDivider,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsCards",
  props: {
    items: Object,
  },
  components: {
    UiButton,
    IonItemDivider,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  },
  setup() {
    const url = process.env.VUE_APP_URL;
    return { url };
  },
});
</script>

<style scoped lang="scss">
ion-item {
  margin-top: 10px;
  margin-bottom: 10px;
}
ion-card {
  margin: 0 auto;
}
ion-img {
  height: 250px;
  width: 250px;
  margin: 0 auto;
}
.button {
  margin: 0 auto;
}
</style>