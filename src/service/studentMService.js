import axiosInstance from "./axiosInstance"


const getAll = () => {
    return axiosInstance.get("studentM");
};

const getOneCpny = id => {
    return axiosInstance.get(`student/${id}`);
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

const studentMService = {
    getAll,
    getOneCpny,
    // createPage,
    // update,
    // remove,
    // removeAll,
    // findByTitle
};

export default studentMService;