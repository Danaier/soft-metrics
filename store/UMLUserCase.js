export const actions = {
    getUUCandUAW({},file){
        return this.$api.UMLUserCase.getUUCandUAW(file).then((res)=>{
            console.log(res.data)
            if(res.data.code==200){
                return Promise.resolve(res.data.data)
            }
            else
            {
                this.$router.push("/mainPage/error")
                return Promise.reject(new Error(res.data.msg))
            }
        },(error)=>{
            this.$router.push("/mainPage/error")
            return Promise.reject(error)
        }).catch((error)=>{
            this.$router.push("/mainPage/error")
            return Promise.reject(error)
        })
    },
}