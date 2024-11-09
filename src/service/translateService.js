// import axio
import axiosInstance from "./axiosInstance"

const translateText = async (text, targetLanguage) => {
    try {
    const response = await axiosInstance.post('/auth/translate', {
        text,
        targetLanguage,
    });
    return response.data;
    } catch (error) {
        console.error('Error translating text:', error);
        return '';
    }
};

export default translateText;