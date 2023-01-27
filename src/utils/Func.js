class Func {
    static isValid = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i] && arr[i] !== '') {
                return false
            }
        }
        return true
    }
}

export default Func;