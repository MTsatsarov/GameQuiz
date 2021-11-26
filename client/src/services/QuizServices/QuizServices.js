import * as api from "../../../src/common/api"

export async function GetAll(id) {
    return await api.get(api.host + `/all/${id ? id : 1}`)
}

export async function Create(quiz) {
    return await api.post(api.host + "/quiz/create", quiz)
}

export async function GetById(id) {
    return await api.get(api.host + `/quiz/${id}`)
}
export async function GetAllByUser(id) {
    return await api.get(api.host + `/quiz/my-quizzes/${id}`)
}

export async function GetResult(obj) {
    return await api.post(api.host + `/quiz/result/${obj.id}`,obj)
}