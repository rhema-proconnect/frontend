import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentsService from "../service/studentsService";
import axiosInstance from "../service/axiosInstance";

const initialState = {
    sdt: [],
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

export const retrieveSdt = createAsyncThunk(
    "sdt/retrieve",
    async () => {
        const res = await studentsService.getAll();
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

export const sdtSlice = createSlice({
    name: 'sdt',
    initialState,
    reducers: {
        setSdtData: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        //get
        builder
        .addCase(retrieveSdt.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveSdt.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.sdt = action.payload
           //  console.log('ps_yo',state.ps)
        });
        builder
        .addCase(retrieveSdt.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.sdt = []
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
    
    export const { setSdtData } = sdtSlice.actions
    export default sdtSlice.reducer
