<template>
  <div v-if="products" class="prods">
   <Card class="card"
   v-for="product in products" 
   :key="product.product_id" 
   :product="product"/>

  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getproducts");
  }
};
</script>

<style>
.prods{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>