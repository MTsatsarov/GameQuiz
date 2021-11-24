import * as api from "../../../src/common/api"

export async function Register(model) {
    var result = await api.post(api.host+"/api/authenticate/register",model)
    return result;
}

export async function  Login(model) {
    var result = await api.post(api.host+"/api/authenticate/login",model)
    return result;
}