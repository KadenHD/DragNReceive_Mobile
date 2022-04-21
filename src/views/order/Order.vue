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
      <ion-card v-for="shop in perShopOrders.shops" v-bind:key="shop.id">
        <ion-row>
          <ion-card-title class="shopTitle"
            >{{ shop.orders[0].shop.name }}
          </ion-card-title>
          <ion-icon
            v-if="shop.status === '1'"
            class="shopIcon"
            :icon="closeOutline"
            size="large"
            @click="cancelOneShop(shop.id)"
          />
        </ion-row>
        <ion-card-title :class="`shopTitle status${shop.status}`">
          {{ orderStatusName(shop.status) }}
        </ion-card-title>
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
      <ion-card-title
        >Prix total : {{ perShopOrders.totalPrice }} €</ion-card-title
      >
      <UiButton
        v-if="perShopOrders.globalStatus"
        color="danger"
        @click="cancelOrder()"
        >Annuler</UiButton
      >
    </Wrapper>
  </ion-page>
</template>

<script>
import Wrapper from "@/components/Wrapper.vue";
import UiButton from "@/components/ui/Button.vue";
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
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { trashOutline, closeOutline } from "ionicons/icons";
import { orderStatusName } from "@/utils/index.js";

export default defineComponent({
  name: "Ticket",
  components: {
    Wrapper,
    UiButton,
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
    return { url, trashOutline, closeOutline, orderStatusName };
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
          totalPrice: 0.0,
        };
        for (let i = 0; i < this.order.length; i++) {
          shopTab.totalPrice = (
            parseFloat(shopTab.totalPrice) + parseFloat(this.order[i].price)
          ).toFixed(2);
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
    async cancelOneShop(shopId) {
      const data = {
        number: this.$route.params.id,
        shops: [shopId],
      };
      const alert = await alertController.create({
        header: "Souhaitez vous vraiment annuler cette partie de la commande ?",
        message:
          "Une fois annulée, la commande de cette boutique sera annulée et non-facturée.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Confirmer",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("cancelOrder", data);
            },
          },
        ],
      });
      return alert.present();
      // this.$store.dispatch("cancelOrder", orders)
    },
    async cancelOrder() {
      let shops = [];
      for (let i = 0; i < this.perShopOrders.shops.length; i++) {
        shops.push(this.perShopOrders.shops[i].id);
      }
      const data = {
        number: this.$route.params.id,
        shops: shops,
      };
      const alert = await alertController.create({
        header: "Souhaitez vous vraiment annuler cette commande ?",
        message:
          "Une annulée, la commande entière sera annulée et non-facturée.",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
            id: "cancel-button",
          },
          {
            text: "Confirmer",
            id: "confirm-button",
            handler: () => {
              this.$store.dispatch("cancelOrder", data);
            },
          },
        ],
      });
      return alert.present();
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
.status1 {
  color: rgb(0, 119, 255);
}
.status2 {
  color: rgb(255, 208, 0);
}
.status3 {
  color: rgb(174, 0, 255);
}
.status4 {
  color: rgb(28, 207, 22);
}
.status5 {
  color: rgb(192, 21, 21);
}
</style>