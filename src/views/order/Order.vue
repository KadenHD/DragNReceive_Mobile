<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons> <ion-back-button></ion-back-button> Annuler </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <Wrapper
      v-if="perShopOrders"
      :title="`Commande n°${this.$route.params.id}`"
    >
      <ion-icon
        v-if="perShopOrders.globalStatus"
        :icon="trashOutline"
        size="large"
        @click="cancelOrder()"
      />
      <ion-card v-for="(shop, i) in perShopOrders.shops" v-bind:key="shop.id">
        <ion-row>
          <ion-card-title class="shopTitle">{{
            shop.orders[0].shop.name
          }}</ion-card-title>
          <ion-icon
            v-if="shop.status === '1'"
            class="shopIcon"
            :icon="closeOutline"
            size="large"
            @click="cancelOneShop(i)"
          />
        </ion-row>
        <div v-for="order in shop.orders" v-bind:key="order.id">
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-img :src="url + order.product.path" />
              </ion-col>
              <ion-col>
                <ion-card-title
                  >{{ order.product.name }} x{{ order.quantities }}
                </ion-card-title>
                <ion-card-content>{{ order.price }} €</ion-card-content>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-card>
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonRow,
  IonGrid,
  IonCol,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { trashOutline, closeOutline } from "ionicons/icons";

export default defineComponent({
  name: "Ticket",
  components: {
    Wrapper,
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonRow,
    IonGrid,
    IonCol,
    IonIcon,
  },
  setup() {
    const url = process.env.VUE_APP_URL;
    return { url, trashOutline, closeOutline };
  },
  created() {
    this.$store.dispatch("setOrder", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["order"]),
    perShopOrders: function () {
      if (!this.order.length) {
        return null;
      } else {
        let shopTab = {
          shops: [],
          globalStatus: true,
        };
        for (let i = 0; i < this.order.length; i++) {
          let exist = false;
          for (let j = 0; j < shopTab.shops.length; j++) {
            if (this.order[i].shopId === shopTab.shops[j].id) {
              exist = true;
            }
          }
          if (!exist) {
            shopTab.shops.push({
              id: this.order[i].shopId,
              orders: [],
              status: "0",
            });
          }
        }
        for (let i = 0; i < shopTab.shops.length; i++) {
          let status = "0";
          for (let j = 0; j < this.order.length; j++) {
            if (this.order[j].shopId === shopTab.shops[i].id) {
              if (this.order[j].orderStatusId > "1") {
                shopTab.globalStatus = false;
              }
              if (status < this.order[j].orderStatusId) {
                status = this.order[j].orderStatusId;
                shopTab.shops[i].status = status;
              }
              shopTab.shops[i].orders.push(this.order[j]);
            }
          }
        }
        return shopTab;
      }
    },
  },
  methods: {
    cancelOneShop(i) {
      const orders = this.perShopOrders.shops[i].orders;
      console.log(orders);
      // alertController
      // then this.$store.dispatch("cancelOrder", orders)
    },
    cancelOrder() {
      const orders = this.order;
      console.log(orders);
      // alertController
      // then this.$store.dispatch("cancelOrder", orders)
    },
  },
});
</script>

<style scoped lang="scss">
ion-card {
  background-color: var(--ion-background-color);
}
ion-img {
  max-height: 250px;
  max-width: 250px;
}
.shopTitle {
  margin-left: 10px;
  margin-top: 10px;
}
.shopIcon {
  margin-left: 10px;
  margin-top: 5px;
}
</style>