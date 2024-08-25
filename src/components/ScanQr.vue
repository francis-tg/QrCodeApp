<template>
    <div class="container mx-auto px-4 py-24 sm:py-12 lg:py-24">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center uppercase">Scanner votre QR Code</h2>
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div class="w-full lg:w-1/2 flex flex-col items-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mb-4" v-if="!start">
            <button class="btn w-full h-16 btn-warning" @click="startScan">
              <Fullscreen class="mr-2" size="24" />
              <span>Scanner</span>
            </button>
            <div class="relative h-16">
              <input type="file" id="qr-image" @change="onGetImage" class="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer">
              <div class="absolute inset-0 flex items-center justify-center btn btn-warning">
                <Camera class="mr-2" size="24" />
                <span>Charger une image</span>
              </div>
            </div>
          </div>
          <button v-if="start" class="btn w-full max-w-md btn-error mb-4" @click="stopScan">
            Arrêter
          </button>
          <video id="qr-video" class="w-full max-w-md aspect-square object-cover rounded-lg shadow-lg"></video>
        </div>
        
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div class="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="card-header bg-gray-200 text-center py-3 font-semibold">
              Résultat
            </div>
            <div class="card-body p-4">
              <p class="text-gray-700 break-words">{{ result || 'Aucun résultat' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import QrScanner from "qr-scanner";
  import { Camera, Fullscreen } from 'lucide-vue-next';
  
  export default {
    name: "ScanQrVue",
    components: {
      Camera,
      Fullscreen
    },
    data() {
      return {
        qrScanner: null,
        result: "",
        start: false,
      }
    },
    mounted() {
      this.$isLoading(true);
      this.initializeScanner();
      setTimeout(() => {
        this.$isLoading(false);
      }, 2000);
    },
    methods: {
      initializeScanner() {
        const video = document.getElementById("qr-video");
        this.qrScanner = new QrScanner(video, 
          result => this.result = result.data,
          {
            highlightScanRegion: true,
            highlightCodeOutline: true,
          }
        );
      },
      startScan() {
        this.start = true;
        this.qrScanner.start();
      },
      stopScan() {
        this.start = false;
        this.qrScanner.stop();
        this.result = "";
      },
      onGetImage(event) {
        const file = event.target.files[0];
        if (file) {
          QrScanner.scanImage(file)
            .then(result => this.result = result)
            .catch(error => console.error(error || 'Aucun QR code trouvé.'));
        }
      }
    },
    beforeUnmount() {
      if (this.qrScanner) {
        this.qrScanner.destroy();
      }
    },
  }
  </script>
  
  <style scoped>
  video {
    width: 100%;
    height: 100%;
    background: #0000;
  }
  </style>
