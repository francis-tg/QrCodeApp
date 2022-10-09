<template>
    <div class="row">
        <div class="col-md-6 py-5 mt-5 mt-md-5">
            <h1 class="text-center">
                Générateur de qrCode
            </h1>
            <form action="" @submit.prevent="Generate">
                <div class="form-group mb-3">
                  <label for=""></label>
                  <input type="text"
                    class="form-control" :required="!qr.data" v-model="qr.data" id="data" aria-describedby="data" placeholder="Enter your data">
                  <small id="data" class="form-text text-muted">
                    Enter your data
                  </small>
                </div>
                <div class="mb-3">
                   <div class="row">
                    <div class="col-md-8">
                        <label for="" class="form-label">Format</label>
                    <select class="form-select" :required="!qr.data || qr.format" v-model="qr.format" id="">
                        <option value="">Selectionner le format</option>
                        <option value="300">300x300</option>
                        <option value="400">400x400</option>
                        <option value="500">500x500</option>
                        <option value="600">600x600</option>
                    </select>
                    </div>
                    <div class="col-md-4">
                        <!-- <label for="" class="form-label">Couleur</label> -->
                        <span class="text-muted">
                            Choisir les couleurs
                        </span>
                        <div class="row">
                            <div class="col">
                                <label for="">Fond</label>
                                <input type="color" v-model="qr.back_color" class="form-control"/>
                            </div>
                            <div class="col">
                                <label for="">Carreau</label>
                                <input type="color" v-model="qr.color" class="form-control"/>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <button class="btn btn-dark w-100 ">
                    Générer votre qrCode
                </button>
            </form>
        </div>
        <div class="col-md-6 mt-5 py-5 d-flex flex-column">
            <a @click="downloadFile" class="btn btn-danger" v-if="result">Télécharger</a>
            <img :src=result?result:MainImg :height=h :width=w alt="" class="img-fluid">
        </div>
    </div>
</template>

<script>
import MainImg from "../assets/logo.jpg"
import QRCode from 'qrcode'
export default {
    name:"QrCodeVue",
    data() {
        return {
            MainImg,
            qr:{
                data:"",
                format:"",
                color:"#000000",
                back_color:"#ffffff"
            },
            result:"",
            w:"300",
            h:"300"
        }
    },
    created(){
        
    },
    mounted() {
        setTimeout(() => {
            this.$isLoading(false)
        }, 1500);
    },
    beforeMount() {
        this.$isLoading(true)
    },
    methods: {
        Generate(){
            QRCode.toDataURL(this.qr.data,{
                errorCorrectionLevel: 'H',
                type: 'image/png',
                quality: 0.3,
                margin: 3,
                color: {
                    dark:this.qr.color,
                    light:this.qr.back_color
                },
                version: 2
            },(err,url)=>{
                this.w = this.qr.format
                this.h = this.qr.format
                return !err?this.result = url:null
            })
        },
        downloadFile(){
            const link=document.createElement('a');
            link.href = this.result;
            link.download = new Date().toTimeString();
            link.click();
        }
    },
}
</script>
<style>
/* .img-fluid{
    width: 300px;
    height: 300px;
} */
</style>