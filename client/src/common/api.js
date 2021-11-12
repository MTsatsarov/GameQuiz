async function request(url, options) {
console.log(options);
    const response = await fetch(url, options);
    
    if (!response.ok) {
        const error = await response.json();  
        alert(error.message);
        throw new Error(error.message);
    }
    try {
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (err) {
        return response;

    }


}

export function createOptions(method = 'get', data) {
    const result = {
        method,
        headers: {}
    };

    if (data) {
        result.headers['Content-Type'] = 'application/json';
        result.headers['Accept'] = "*/*";
        result.body = JSON.stringify(data);
        console.log(data);
    }
    return result;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data))
};

export async function put(url, data) {
    return request(url, createOptions('put', data))
};

export async function del(url) {
    return request(url, createOptions('delete'))
}

export const host = 'https://localhost:44377';