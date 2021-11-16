import * as api from "../../../src/common/api"
export async function Vote(data) {
    await api.post(api.host+"/vote/quiz",data)
}