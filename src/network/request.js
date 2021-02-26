import axios from 'axios'
export function request(config){
    let axiosInstance = axios.create({
        baseURL: '/proxyurl',
        timeout: 5000
    });
    return axiosInstance(config);
}

export function postRequest(url,params){
    return axios({
        method: 'post',
        url: url,
        data: params
    });
}
