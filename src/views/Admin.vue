<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <router-link to="/users">
                <div class="box">
                <h1>Users</h1>
            </div>
            </router-link> 
        </div>
        <div class="col">
            <router-link to="/product">
                 <div class="box">
                <h1>Products</h1>
            </div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.row{
    display: flex;
    gap: 10px;

}
.box{
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px lightpink;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>