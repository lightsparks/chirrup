import axios from "axios";

export const login = (data) => {
    return post([ "auth", "login" ], data);
};

export const register = (data) => {
    return post([ "auth", "register" ], data);
};

export const messages = () => {
    return get([ "messages" ]);
};

export const sendNewMessage = (data) => {
    return post([ "messages" ], data);
};

export const getFriends = (data) => {
    return get([ "friends" ], data);
};

export const findfriend = (data) => {
    return get([ "users", "find" ], data);
};

export const connectfriend = (data) => {
    return post([ "friends" ], data);
};

/**
 * Post Request
 *
 * @param params
 * @returns {Promise<unknown>}
 */
function post(...params) {
    return request("POST", ...params);
}

/**
 * Get Request
 *
 * @param params
 * @returns {Promise<unknown>}
 */
function get(...params) {
    return request("GET", ...params);
}

/**
 * Generic request method
 *
 * @param method: string (GET / POST)
 * @param url: array
 * @param data: object
 * @returns {Promise<unknown>}
 */
function request(method, url = [], data = {}) {
    url.unshift(process.env.VUE_APP_API_URL);

    let token = "";
    try {
        token = JSON.parse(localStorage.getItem("token")).access_token;
    }
    catch ( exception ) {
        //
    }

    const headers = {
        Authorization: `Bearer ${ token }`
    };

    const config = {
        method,
        url: url.join("/"),
        headers,
    };

    if(method === 'GET'){
        config.params = data;
    }else{
        config.data = data;
    }

    return new Promise((resolve, reject) => {
        axios(config)
        .then((response) => {
            resolve(response);

        })
        .catch(error => {
            reject(error);
        });
    });
}


