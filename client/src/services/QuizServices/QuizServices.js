import * as api from "../../../src/common/api"

export async function GetAll() {
    return await api.get(api.host/"quiz"/"getAll")
}

