<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <img class="image" src="../assets/password.jpg" />
        </div>
        <div class="col">
            <form>
                <input type="text" name="email" placeholder="Email:" />
                <button>Submit</button>
            </form>
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.row{
    width: 100%;
    display: flex;
}
.col{
    height: 500px;
    width: 50%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.image{
    width: 350px;
    height: 350px;
    border: 1px solid black;
}
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>