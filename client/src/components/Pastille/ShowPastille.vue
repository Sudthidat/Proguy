<template>
    <div class="background-image">
        <div class="container-fluid">
            <br>
            <div class="card">
                <div class="card-header">
                    <center>
                        <h1 class="card-title">Show drug detail : {{ pastille.id }} </h1>
                    </center>
                </div>
                <div class="card-body">
                    <p class="card-text">Name medicine : {{ pastille.Name }}</p>
                    <p class="card-text">Type : {{ pastille.Type }}</p>
                    <p class="card-text">Detail : {{ pastille.Detail }}</p>
                    <p class="card-text">Instruction : {{ pastille.Instruction }}</p>
                    <p class="card-text">Price : {{ pastille.Price }}</p>
                </div>
                <div class="card-footer">
                    <button v-on:click="navigateTo('/pastilles')" class="btn btn-primary">ย้อนกลับ</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import PastilleService from '@/services/PastilleService';

export default {
    data() {
        return {
            pastille: "",
        };
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
    async created() {
        try{
            let pastilleId = this.$route.params.pastilleId
            this.pastille = (await PastilleService.show(pastilleId)).data
        }catch (err) {
            console.log (err)
        }
    },
};
</script>
  
<style scoped>
.background-image {
    text-align: center;
    /* background-color: rgb(208, 222, 205); */
    background-image: url('~@/pic/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    height: 100%;
}

.card {
    width: 800px;
    margin: 0 auto;
}
.card-header {
    background-color: rgb(250,250,210);
    font-size: 20px;
}
.card-body {
    padding: 20px;
}
.card-footer {
    background-color: rgb(250,250,210);
    padding: 10px;
    border-radius: 0 0 5px 5px;
    float: right;
    text-align: right;
    width: 100%;
}
.card-text {
    font-size: 20px;
}
</style>
  