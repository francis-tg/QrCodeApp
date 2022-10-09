<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
        <a class="navbar-brand" href="#">QRCODE GEN</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">

          </ul>
          
        </div>
      </div>
    </nav>
    
  </header>
  <main class="container">
    <QrCode/>
  </main>
  <footer>
    <p class="text-center text-muted">Copyright &copy; Cisco_dev</p>
  </footer>
</template>

<script>
import QrCode from './view/QrCode.vue';
export default {
  name: 'App',
  components: {
    QrCode
}
}
</script>

<style>
</style>
