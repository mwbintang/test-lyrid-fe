export async function login(identifier, password) {
    if(identifier == "admin" && password =="admin") return true
    else return false
}