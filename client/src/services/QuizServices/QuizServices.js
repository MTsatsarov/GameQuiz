import * as api from "../../../src/common/api"

export async function GetAll() {
    return await api.get(api.host +"/quiz/getAll")
}

export async function Create(quiz) {
return await api.post(api.host+"/quiz/create",quiz)
}
