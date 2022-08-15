<template>
        <div class="col">
    <div v-if="products" class="prod">
       <h2><img :src="products.image"></h2>
           <p>Branding:{{ products.name }}</p>
        <p>Price:{{ products.price }}</p>
        <p>Category:{{ products.category }}</p>
       
    </div>
        </div>
</template>
<script>
export default {
   props: ["id"],
   computed: {
    products() {
        return this.$store.state.product;
    },
   },
   mounted() {
    this.$store.dispatch("getproduct", this.id)
   }
}
</script>

<style>
.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.row{
    display: flex;
    width: 100%;
}
.col{
    width: 50%;
    border: 1px solid black;
    padding: 10px;
}
.prods{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid black;
    height: 250px;
    
}
.prod img {
    height: 600px;
    width: 500px;
}
.prods img{
width: 200px;
height: 200px;
border-radius: 10px;
box-shadow: 5px 5px 5px 5px lightsalmon;
}
.prod-img{
    width: 50%;
}
.prod-des{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.prod-des p {
    display: flex;
    justify-content: space-between;
}
</style>