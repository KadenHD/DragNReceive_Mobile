<template>
  <div>
    <div v-for="shop in items" v-bind:key="shop.id">
      <ion-item-divider v-if="shop.id !== items[0].id" />
      <ion-card>
        <ion-img
          :src="shop.path ? url + shop.path : 'assets/img/default.svg'"
        />
        <ion-card-header>
          <ion-card-subtitle
            ><a :href="`mailto:${shop.email}`">{{
              shop.email
            }}</a></ion-card-subtitle
          >
          <ion-card-subtitle
            ><a :href="`tel:${shop.phone}`">{{
              shop.phone
            }}</a></ion-card-subtitle
          >
          <ion-card-title>{{ shop.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Adresse de la boutique partenaire :
          {{ shop.city }}, {{ shop.street }},
          {{ shop.postal }}
        </ion-card-content>
        <UiButton
          class="button"
          color="secondary"
          @click="
            this.$router.push({
              name: 'Shop',
              params: { id: shop.id },
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