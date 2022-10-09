<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
        <router-link class="navbar-brand" to="/">QRCODE GEN</router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
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
</template>

<script>
export default {
  name: 'App',
  components: {

}
}
</script>

<style>
</style>
