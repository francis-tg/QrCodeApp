<template>
  <div class="container">
    <h2 class="text-center mt-4">QR Scanner</h2>

    <div class="row mt-4">
      <div class="col-md-6">
        <!-- Scanner Controls -->
        <div class="text-center">
          <button v-if="!start" class="btn btn-primary mb-3" @click="startScan">
            Start Scanner
          </button>
          <button v-if="start" class="btn btn-danger mb-3" @click="stopScan">
            Stop Scanner
          </button>
        </div>
        <!-- Video Element -->
        <video id="qr-video" class="rounded border border-secondary mb-3"></video>
      </div>
      <div class="col-md-6">
        <!-- Scan Result Display -->
        <div class="card">
          <div class="card-header text-center bg-primary text-white">
            Scan Result
          </div>
          <div class="card-body">
            <p v-if="result">{{ result }}</p>
            <p v-if="!result" class="text-muted">No result yet.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrScanner from "qr-scanner";

export default {
  name: "ScanQrVue",
  data() {
    return {
      qrScanner: null,
      result: "",
      start: false,
    };
  },
  methods: {
    doScan() {
      const video = document.getElementById("qr-video");
      this.qrScanner = new QrScanner(video, (result) => {
        this.result = result.data;
      }, {
        highlightScanRegion: true,
        highlightCodeOutline: true,
      });
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
  },
  mounted() {
    this.doScan();
  },
  unmounted() {
    if (this.qrScanner) {
      this.qrScanner.stop();
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

video {
  width: 100%;
  height: auto;
  background: #000;
}

.card {
  border-radius: 0.5rem;
}

.card-header {
  font-size: 1.25rem;
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 1.5rem;
}

.mb-3 {
  margin-bottom: 1rem;
}

.text-muted {
  color: #6c757d;
}
</style>
