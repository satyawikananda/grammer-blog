export const changeDate = {
    methods: {
        changeDate(tanggal) {
            const date = new Date(tanggal)
            const year = date.getFullYear()
            let month = date.getMonth() + 1
            let dt = date.getDate()
      
            if(dt < 10) {
              dt = '0' + dt
            }
            if(month < 10) {
              month = '0' + month
            }
      
            const result = dt + '-' + month + '-' + year
            return result
        }
    }
}