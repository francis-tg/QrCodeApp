<template>
  <header>
    <div class="navbar top-0 bg-transparent fixed z-50 w-full backdrop-blur-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <!-- <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> -->
            <li><router-link to="/generate">Générer un qrcode</router-link></li>
          </ul>
        </div>
        <router-link to="/" class="btn btn-ghost text-xl">QRCODE GEN</router-link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <!-- <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li> -->
          <li><router-link to="/generate">Générer un qrcode</router-link></li>
        </ul>
      </div>
      <div class="navbar-end">
        <router-link to="/scan" class="btn">Scanner</router-link>
      </div>
    </div>



  </header>
  <main class="">
    <router-view></router-view>
    
  </main>
  <footer class="footer footer-center bg-base-300 w-full text-base-content p-4">
      <aside>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved by <a href="https://github.com/francis-tg"
            class="underline text-primary">CISCO DEV</a></p>
      </aside>
    </footer>
  <nav class="app-nav">
    <ul>
      <li @click="goTo('/')"><i class="fas fa-home    "></i></li>
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
    goTo(path) {
      this.$router.push(path)
    }
  },
}
</script>

<style>
body {
  position: relative;
}

.app-nav {
  display: none;
  background: var(--bs-dark);
  position: fixed;
  width: 100%;
  bottom: 0;
}

.app-nav ul {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  align-items: flex-start;

}

.app-nav li {
  list-style: none;
  padding: 20px;
  color: #fff;
}

.app-nav li:hover {
  color: var(--bs-dark);
  background: #ccc;
}

.active {
  color: var(--bs-dark);
  background: #ccc;
}

@media screen and (max-width:780px) {
  .app-nav {
    display: block;
  }
}
</style>
