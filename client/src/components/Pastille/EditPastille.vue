<template>
    <div class="background-image">
        <div class="container-fluid">
            <br>
            <div class="container">
                <h1 class>Edit medication detail : {{ pastille.id }}</h1><br>
                <form v-on:submit.prevent="editPastille" class="form">
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
                            <label for="price">Price (ฺbaht)</label>
                            <input type="text" v-model="pastille.Price" class="form-control" id="price">
                        </p>
                        <p>
                            <button type="submit" class="btn btn-primary float-right">Confirm</button>
                            <button v-on:click="navigateTo('/pastilles')" class="btn btn-primary float-right">Back</button>
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
        async editPastille() {
            try {
                await PastilleService.put(this.pastille)
                this.$router.push({
                    name: 'pastilles'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let pastilleId = this.$route.params.pastilleId
            this.pastille = (await PastilleService.show(pastilleId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped>
.background-image {
    text-align: center;
    /* background-color: rgb(168, 201, 208); */
    background-image: url('~@/pic/bg2.jpg');
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