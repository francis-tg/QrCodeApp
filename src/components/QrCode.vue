<template>
    <div class="grid md:grid-cols-2 py-24 px-24 gap-10 items-center justify-center">
        <div class="">
            <h1 class="text-center text-3xl uppercase font-bold">
                Générateur de qrCode
            </h1>
            <form action="" @submit.prevent="Generate">
                <div class="flex flex-col mb-3">
                    <label for="data">Les données à cacher</label>
                    <input type="text" class="input input-bordered" :required="!qr.data" v-model="qr.data" id="data"
                        aria-describedby="data" placeholder="Enter your data">
                    
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col-md-8">
                            <label for="" class="form-label">Format</label>
                            <select class="select select-bordered w-full" :required="!qr.data || qr.format" v-model="qr.format" id="">
                                <option value="">Selectionner le format</option>
                                <option value="300">300x300</option>
                                <option value="400">400x400</option>
                                <option value="500">500x500</option>
                                <option value="600">600x600</option>
                            </select>
                        </div>
                        <div class="w-full mt-3">
                            <!-- <label for="" class="form-label">Couleur</label> -->
                            <span class="text-muted">
                                Choisir les couleurs
                            </span>
                            <div class="flex items-center">
                                <div class="w-1/2">
                                    <label for="">Fond</label>
                                    <input type="color" v-model="qr.back_color" class="input w-full" />
                                </div>
                                <div class="w-1/2">
                                    <label for="">Carreau</label>
                                    <input type="color" v-model="qr.color" class="input w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary  w-full ">
                    Générer votre qrCode
                </button>
            </form>
        </div>
        <div class="flex md:flex-col flex-col-reverse">
            <a @click="downloadFile" class="btn btn-success" v-if="result">Télécharger</a>
            <img :src="result ? result : MainImg" :height=h :width=w alt="" class="img-fluid">
        </div>
    </div>
</template>

<script>
import MainImg from "../assets/logo.jpg"
import QRCode from 'qrcode'
export default {
    name: "QrCodeVue",
    data() {
        return {
            MainImg,
            qr: {
                data: "",
                format: "",
                color: "#000000",
                back_color: "#ffffff"
            },
            result: "",
            w: "300",
            h: "300"
        }
    },
    created() {

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
        Generate() {
            
            QRCode.toDataURL(this.qr.data, {
                //mode: 'alphanumeric',
                errorCorrectionLevel: 'H',
                type: 'image/jpeg',
                quality: 1,
                margin: 1,
                color: {
                    dark: this.qr.color,
                    light: this.qr.back_color
                },
                version: 5
            }, (err, url) => {
                this.w = this.qr.format
                this.h = this.qr.format
                console.log(err)
                return !err ? this.result = url : null
            })
        },
        downloadFile() {
            const link = document.createElement('a');
            link.href = this.result;
            link.download = `QRCode_${this.qr.data.substring(0, 20)}_${new Date().toISOString().split('T')[0]}.png`;
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