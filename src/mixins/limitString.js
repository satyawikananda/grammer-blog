export const limitString = {
    methods: {
        limitString(desc) {
            const string = desc
            const length = 200
            const result = string.length > length ? string.substring(0, length) + '....' : string

            return result
        }
    }
}