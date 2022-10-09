<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
        <router-link class="navbar-brand" to="/">QRCODE GEN</router-link>
        <!-- <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link to="/scan" class="nav-link">Scanner un QrCode</router-link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    
  </header>
  <main class="container">
    <router-view></router-view>
    
  </main>
  <footer>
    <p class="text-center text-muted">Copyright &copy; Cisco_dev</p>
  </footer>
  <nav class="app-nav">
      <ul>
        <li @click="goTo('/')" ><i class="fas fa-home    "></i></li>
        <li @click="goTo('/scan')"><i class="fas fa-qrcode    "></i></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'App',
  components: {

},
methods: {
  goTo(path){
    this.$router.push(path)
  }
},
}
</script>

<style>
body{
  position: relative;
}
.app-nav{
  display: none;
  background: var(--bs-dark);
  position: fixed;
  width: 100%;
  bottom:0;
}

.app-nav ul{
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  align-items: flex-start;
  
}
.app-nav li{
  list-style: none;
  padding: 20px;
  color: #fff;
}

.app-nav li:hover{
  color: var(--bs-dark);
  background: #ccc;
}

.active{
  color: var(--bs-dark);
  background: #ccc;
}

@media  screen and (max-width:780px) {
  .app-nav{
    display:block;
  }
}
</style>
