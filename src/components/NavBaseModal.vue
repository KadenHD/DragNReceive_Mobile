<template>
  <div>
    <ion-nav :root="rootPage" id="modal-nav"></ion-nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonNav } from "@ionic/vue";
export default defineComponent({
  name: "NavBaseModal",
  components: {
    IonNav,
  },
  props: ["rootPage"],
});
</script>