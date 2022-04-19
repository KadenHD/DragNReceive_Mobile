<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <Wrapper v-if="myProduct" :title="myProduct.name">
        <ion-img :src="url + myProduct.path" />
        <ion-card-header>
          <ion-card-subtitle v-if="myProduct.stock > 0"
            >{{ myProduct.stock }} restant</ion-card-subtitle
          >
          <ion-card-subtitle color="danger" v-else
            >Le stock est épuisé...</ion-card-subtitle
          >
          <ion-card-title>{{ myProduct.price }} €</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ myProduct.description }} <br />
        </ion-card-content>
        <form @submit.prevent="submitBuyForm" v-if="myProduct.stock > 0">
          <UiInput
            disabled
            label="Quantité"
            type="number"
            v-model:value="data.quantities"
            :valid="stockIsValid(data.quantities, myProduct.stock).valid"
            :error="stockIsValid(data.quantities, myProduct.stock).error"
          />
          <br />
          <ion-icon
            @click="addQuantities()"
            size="large"
            :icon="addCircleOutline"
          />
          <ion-icon
            @click="subQuantities()"
            size="large"
            :icon="removeCircleOutline"
          />
          <UiButton color="secondary" type="submit">Ajouter au panier</UiButton>
        </form>
      </Wrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonContent,
  IonImg,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
} from "@ionic/vue";
import {
  chevronForward,
  addCircleOutline,
  removeCircleOutline,
} from "ionicons/icons";
import { defineComponent, reactive } from "vue";
import { mapGetters } from "vuex";
import { stockIsValid } from "@/utils/validInputs.js";

export default defineComponent({
  name: "ProfileParameters",
  components: {
    Wrapper,
    UiInput,
    UiButton,
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonImg,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
  },
  setup() {
    const url = process.env.VUE_APP_URL;
    const data = reactive({
      quantities: "1",
    });
    return {
      url,
      data,
      stockIsValid,
      chevronForward,
      addCircleOutline,
      removeCircleOutline,
    };
  },
  watch: {
    $route() {
      this.data.quantities = "1";
    },
  },
  created() {
    this.$store.dispatch("setProduct", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["product"]),
    myProduct: function () {
      if (!this.product) {
        return null;
      } else {
        return this.product;
      }
    },
  },
  methods: {
    addQuantities() {
      const result = parseInt(this.data.quantities) + 1;
      this.data.quantities = result.toString();
    },
    subQuantities() {
      const result = parseInt(this.data.quantities) - 1;
      this.data.quantities = result.toString();
    },
    submitBuyForm() {
      const formIsValid = stockIsValid(
        this.data.quantities,
        this.myProduct.stock
      ).valid;
      if (formIsValid) {
        const payload = {
          quantities: this.data.quantities,
          id: this.myProduct.id,
        };
        this.$store.dispatch("addToCart", payload);
      }
    },
  },
});
</script>

<style scoped lang="scss">
ion-img {
  height: 250px;
  width: 250px;
  margin: 0 auto;
}
</style>