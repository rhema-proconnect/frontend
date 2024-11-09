import axiosInstance from "./axiosInstance"


const getAll = () => {
    return axiosInstance.get("company");
};

const getOneCpny = id => {
    return axiosInstance.get(`company/${id}`);
};

// const createPage = data => {
//     const res = axiosInstance.post("add/page/", data);
//     return res.data
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

const cpnyService = {
    getAll,
    getOneCpny,
    // createPage,
    // update,
    // remove,
    // removeAll,
    // findByTitle
};

export default cpnyService;