import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import selfemployeeService from "../service/selfemployee";
import axiosInstance from "../service/axiosInstance";

const initialState = {
    sw: [],
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

export const retrieveEmp = createAsyncThunk(
    "page/retrieve",
    async () => {
        const res = await selfemployeeService.getAll();
        // console.log(res)
        return res.data.data;
    }
);

// export const getOnePage = createAsyncThunk(
//     "page/onePage",
//     async (id) => {
//         const res = await selfemployeeService.getOnePage(id);
//         return res.data
//     }
// )

// export const postPage = createAsyncThunk('page/postPage', async (newData) => {
//     const response = await axiosInstance.post('add/page', newData);
//     return response.data;
// });

// export const updateCat = createAsyncThunk(
//     "cat/update",
//     async ({ id, data }) => {
//         const res = await catDataService.update(id, data);
//         return res.data;
//     }
// );

// export const deletePage = createAsyncThunk(
//     "page/delete",
//     async ({ id }) => {
//         const res = await axiosInstance.delete(id);
//         return res.data.data;
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

export const selfWSlice = createSlice({
    name: 'sw',
    initialState,
    reducers: {
        setSwData: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        //get
        builder
        .addCase(retrieveEmp.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveEmp.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.sw = action.payload
           //  console.log('ps_yo',state.ps)
        });
        builder
        .addCase(retrieveEmp.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.sw = []
        });
        // builder
        // .addCase(postPage.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(postPage.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.sw.push(action.payload); 
        // })
        // .addCase(postPage.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.isError = action.error.message;
        // });
    },
    })
    
    export const { setSwData } = selfWSlice.actions
    export default selfWSlice.reducer
