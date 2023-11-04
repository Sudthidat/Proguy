<template>
    <div class="background-image">
        <div class="container-fluid">
            <br>
            <div class="container">
                <h1 class="mt-5">เพิ่มข้อมูล</h1><br>
                <form v-on:submit.prevent="createPastille" class="form">
                    <center>

                        <p class="form-group col-md-4">
                            <label for="title">Name medicine</label>
                            <input type="text" v-model="pastille.Name" class="form-control" id="name">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="author">Type</label>
                            <input type="text" v-model="pastille.Type" class="form-control" id="type">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="format">Detail</label>
                            <input type="text" v-model="pastille.Detail" class="form-control" id="detail">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="genre">Instruction</label>
                            <input type="text" v-model="pastille.Instruction" class="form-control" id="instruction">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="price">Price(ฺbaht)</label>
                            <input type="text" v-model="pastille.Price" class="form-control" id="price">
                        </p>
                        <p>
                            <button type="submit" class="btn btn-primary float-right">ยืนยัน</button>
                            <button v-on:click="navigateTo('/pastilles')" class="btn btn-primary float-right">ย้อนกลับ</button>
                        </p>
                    </center>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

import PastilleService from '@/services/PastilleService'
export default {
    data() {
        return {

            pastille: {
                Name: "",
                Type: "",
                Detail: "",
                Instruction: "",
                Price: ""
            }
        }
    },
    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async createPastille() {
            try {
                await PastilleService.post(this.pastille)
                this.$router.push({
                    name: 'pastilles',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped>
.background-image {
    text-align: center;
    /* background-image: linear-gradient(rgb(202, 188, 193)); */
    background-image: url('~@/pic/bg3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

.container-fluid {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}
</style>
