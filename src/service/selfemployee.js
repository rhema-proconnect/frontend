import axiosInstance from "./axiosInstance"


const getAll = () => {
    return axiosInstance.get("self_work");
};

// const getAllStatus = () => {
//     const res = axiosInstance.get("app");
//     return res.data.status
// };

// const get = id => {
//     return axiosInstance.get(`service/${id}`);
// };

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

const selfWorkService = {
    getAll,
    // get,
    // getAllStatus
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle
};

export default selfWorkService;