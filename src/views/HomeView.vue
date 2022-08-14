<template>
  <div id="Landing">
    <form class="form">
      <input class="form-input" type="text" name="email" placeholder="Email:" />
      <input class="form-input" type="text" name="email" placeholder="Password:" />
      <button>Login</button>
      <div class="form-extra">
        <a href="#"><p>Register</p></a>
        <a href="#"><p>ForgotPsw</p></a>
      </div>
    </form>
  </div>
</template>

<script>

</script>
<style scoped>
#app{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#Landing{
  height: 98vh;
  background-image: url("../assets/erol-ahmed-CbUYri28Lhg-unsplash.jpg");
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  background: salmon transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
}
.form-input{
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;

}
.form button {
  width: 203px;
  height: 40px;
  border-radius: 10px;
  border: none;
}
.form-extra a {
  text-decoration: none;
  color: white;
  border-radius: 10px;
  width: 95px;
  font-weight: bold;
  background: lightsalmon;

}
.form-extra
{
  display: flex;
  gap: 10px;
}

</style>
