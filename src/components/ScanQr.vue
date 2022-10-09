<template>
    <div class="">
        <h2>Scanner votre QrCode</h2>

        <div class="row">
            <div class="col-md-6">
                <button v-if="!start" class="btn btn-warning mt-3" @click="startScan()">
                    Scanner
                </button>
                <button v-if="start" class="btn btn-warning mb-0" @click="stopScan()">
                    Arrêter
                </button>
                <video id="qr-video" class="mb-5"></video>
            </div>
            <div class="col-md-6">
                <!-- <div v-if="result" class="alert alert-success" role="alert">
                    {{result}}
                </div> -->
                <div class="card mt-5">
                    <div class="card-header text-center">
                        Résultat
                    </div>
                    <div class="card-body">
                        {{result}}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import QrScanner from "qr-scanner"
export default {
    name:"ScanQrVue",
    created() {
       setTimeout(() => {
        this.start =false
        this.doScan()
       }, 5000);

    },
    data() {
        return {
            qrScanner:"",
            result:"",
            start:true
        }
    },
    methods: {
        doScan(){
            const video = document.getElementById("qr-video")
        // console.log(video)
         this.qrScanner = new QrScanner(video, (result)=>{
            return this.result = result.data
         },{
            highlightScanRegion: true,
            highlightCodeOutline: true,
         })

        //  this.qrScanner.start()
        
        },
        startScan(){
        this.start = true
        this.qrScanner.start()
    },
    stopScan(){
        this.start = false
        this.qrScanner.stop()
        return this.result =""
    },
    },
    
    unmounted() {
       this.qrScanner.stop()
    },
}
</script>
<style scoped>
video{
    width: 100%;
    height: 100%;
    background:dark;
}
</style>