import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mailDataService from "../service/mailService";
// import axiosInstance from "../service/axiosInstance";

const initialState = {
    mail: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// export const createCat = createAsyncThunk(
//     "cat/create",
//     async ({ name, description }) => {
//         const res = await catDataService.create({ name, description });
//         return res.data;
//     }
// );

export const retrieveMail = createAsyncThunk(
    "mail/retrieve",
    async () => {
        const res = await mailDataService.getAll();
        // console.log()
        return res.data.data;
    }
);

export const getOnemail = createAsyncThunk(
    "mail/oneMail",
    async (id) => {
        const res = await mailDataService.getOneMessage(id);
        return res.data
    }
)

// export const postCpny = createAsyncThunk('mail/postCpny', async (newData) => {
//     const response = await axiosInstance.post('add/company', newData);
//     return response.data;
// });

// export const updateCat = createAsyncThunk(
//     "cat/update",
//     async ({ id, data }) => {
//         const res = await catDataService.update(id, data);
//         return res.data;
//     }
// );

// export const deleteCat = createAsyncThunk(
//     "cat/delete",
//     async ({ id }) => {
//         await catDataService.remove(id);
//         return { id };
//     }
// );

// export const deleteAllCat = createAsyncThunk(
//     "cat/deleteAll",
//     async () => {
//         const res = await catDataService.removeAll();
//         return res.data;
//     }
// );

// export const findCatByTitle = createAsyncThunk(
//     "cat/findByTitle",
//     async ({ name }) => {
//         const res = await catDataService.findByTitle(name);
//         return res.data;
//     }
// );

export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        setMailData: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        //get
        builder
        .addCase(retrieveMail.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveMail.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.mail = action.payload
        });
        builder
        .addCase(retrieveMail.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.mail = []
        });
    },
    })
    
    export const { setMailData } = mailSlice.actions
    export default mailSlice.reducer