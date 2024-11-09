import axiosInstance from "./axiosInstance"


const getAll = () => {
    return axiosInstance.get("service");
};

const get = id => {
    return axiosInstance.get(`service/${id}`);
};

// const create = data => {
//     return axios.post(`${baseUrl}cat/`, data);
// };

// const update = (id, data) => {
//     return axios.put(`${baseUrl}cat/${id}`, data);
// };

// const remove = id => {
//     return axios.delete(`${baseUrl}cat/${id}`);
// };

// const removeAll = () => {
//     return axios.delete(`${baseUrl}cat/`);
// };

// const findByTitle = name => {
//     return axios.get(`${baseUrl}cat?name=${name}`);
// };

const srvcService = {
    getAll,
    get,
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle
};

export default srvcService;