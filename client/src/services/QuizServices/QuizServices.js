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
export async function GetAllByUser(id, page) {
    return await api.get(api.host + `/quiz/my-quizzes/${id}/${page ? page : 1}`)
}

export async function GetResult(obj) {
    return await api.post(api.host + `/quiz/result/${obj.id}`, obj)
}

export async function Update(id, quiz) {
    return await api.put(api.host + `/quiz/${id}`, quiz)
}
export async function Delete(id) {
    return await api.del(api.host + `/quiz/${id}`)
}
export async function Search(name) {
    return await api.get(api.host + `/api/search/${name}`)
}
