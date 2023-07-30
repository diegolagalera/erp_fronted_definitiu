// en las otras partes del codigo puedo llamar a utils.test()
export default {
    test() {
        return 'holaa soy un test'

    },
    copy(item) {
        return JSON.parse(JSON.stringify(item))
    }
}

