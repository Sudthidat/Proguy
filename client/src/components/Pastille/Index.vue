<template>
    <div class="background-image">
        <div>
            <br><br>
                <div class="head">
                <h1 class="text-center">Pastille</h1>
                <i class="bi bi-pastille"></i>
            </div>
            <br>
            <div class="subhead d-flex justify-content-between align-items-center mx-3">
                <h2 class="text-left mb-0">Information on all {{ pastilles.length }} types of medicines</h2>
                <button v-on:click="navigateTo('/pastille/create')" class="btn btn-success text-center">Add medicine</button>
            </div> <br>
            <div class="container-fluid ">

                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Name medicine</th>
                            <th class="text-center">Detail</th>
                            <th class="text-center">Price</th>
                            <th class="text-center col-md-3">Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pastille in pastilles" v-bind:key="pastille.id">
                            <td class="align-middle">{{ pastille.id }}</td>
                            <td class="align-middle">{{ pastille.Name }}</td>
                            <td class="align-middle">{{ pastille.Type }}</td>
                            <td class="align-middle">{{ pastille.Price }}</td>
                            <td>
                                <button v-on:click="navigateTo('/pastille/' + pastille.id)"
                                    class="btn btn-primary text-center">View data</button>
                                <button v-on:click="navigateTo('/pastille/edit/' + pastille.id)"
                                    class="btn btn-warning text-center">Edit data</button>
                                <button v-on:click="deletePastille(pastille)" class="btn btn-danger text-center">Delete data</button>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>

<script>

import PastilleService from '@/services/PastilleService'

export default {
    data() {
        return {
            pastilles: []
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },
        async deletePastille(pastille) {
            let result = confirm("Confirm to delete data?")
            if (result) {
                try {
                    await PastilleService.delete(pastille)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.pastilles = (await PastilleService.index()).data
        }
    },
    async created() {
        this.pastilles = (await PastilleService.index()).data
    }
}
</script>

<style scoped>
.background-image {
    text-align: center;
    /* background-color: rgb(252, 255, 205); */
    background-image: url('~@/pic/bg3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
.head {
    display: flex;
    justify-content: center;
    align-items: center;
}

.subhead {
    text-align: left;
}

.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>