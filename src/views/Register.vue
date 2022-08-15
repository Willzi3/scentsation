<template>
  <div class="container">
    <h1>Register</h1>
    <p>Please </p>
    <form class="form">
        <input class="form-input" type="text" name="email" placeholder="Email:" />
        <input class="form-input" type="password" name="password" placeholder="Password" />
        <input class="form-input" type="text" name="full_name" placeholder="Full Name:" />
        <input class="form-input" type="text" name="billing_address" placeholder="Billing Address:" />
        <input class="form-input" type="text" name="default_shipping_address" placeholder="Default Shipping Address" />
        <input class="form-input" type="text" name="country" placeholder="Country" />
        <input class="form-input" type="text" name="phone" placeholder="Phone:" />
        <input class="form-input" type="text" name="user_type" value="user_type" readonly />
        <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/erol-ahmed-CbUYri28Lhg-unsplash.jpg");
  background-attachment: fixed;
  background-size: cover;
}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: lightsalmon;
    width: 300px;
    height: 400px;
}
.form-input{
    border: none;
    border-radius: 5px;
    height: 30px;
}
.form button {
    width: 178px;
    height: 30px;
    border: none;
    border-radius: 5px;
}
</style>