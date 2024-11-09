import axiosInstance from "./axiosInstance"


const getAll = () => {
    return axiosInstance.get("message");
};

const getOneMessage = id => {
    return axiosInstance.get(`message/${id}`);
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

const mailService = {
    getAll,
    getOneMessage,
    // createPage,
    // update,
    // remove,
    // removeAll,
    // findByTitle
};

export default mailService;