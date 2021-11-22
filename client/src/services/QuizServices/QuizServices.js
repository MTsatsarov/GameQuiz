import * as api from "../../../src/common/api"

export async function GetAll(id) {
    return await api.get(api.host + `/all/${id ? id :1}`)
}

export async function Create(quiz) {
    return await api.post(api.host + "/quiz/create", quiz)
}

export async function GetById(id) {
    return await api.get(api.host + `/quiz/${id}`)
}