<template>
  <div v-for="product in items" v-bind:key="product.id">
    <ion-item-divider v-if="product.id !== items[0].id" />
    <ion-item>
      <ion-card>
        <ion-img :src="url + product.path" />
        <ion-card-header>
          <ion-card-subtitle>{{ product.stock }} restant</ion-card-subtitle>
          <ion-card-title>{{ product.name }} </ion-card-title>
          <ion-card-title>{{ product.price }} €</ion-card-title>
        </ion-card-header>
        <ion-card-content> {{ product.description }} <br /> </ion-card-content>
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
    </ion-item>
  </div>
</template>

<script>
import UiButton from "@/components/ui/Button.vue";
import {
  IonItemDivider,
  IonItem,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
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
    IonItem,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
  },
  setup() {
    const url = process.env.VUE_APP_URL;
    return { url };
  },
  methods: {},
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
  max-height: 150px;
  max-width: 150px;
  margin: 0 auto;
}
.button {
  margin: 0 auto;
}
</style>