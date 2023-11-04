import Api from '@/services/Api'

export default {
    index(pastille) {
        return Api().get('pastilles')
    },
    show(pastilleId) {
        return Api().get('pastille/' + pastilleId)
    },
    post(pastille) {
        return Api().post('pastille', pastille)
    },
    put(pastille) {
        return Api().put('pastille/' + pastille.id, pastille)
    },
    delete(pastille) {
        return Api().delete('pastille/' + pastille.id, pastille)
    },
}