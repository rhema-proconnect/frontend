import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sdtMDataService from "../service/studentMService";
import axiosInstance from "../service/axiosInstance";

const initialState = {
    page: [],
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

export const retrieveStdM = createAsyncThunk(
    "stdM/retrieve",
    async () => {
        const res = await sdtMDataService.getAll();
        // console.log(res)
        return res.data.data;
    }
);

// export const getOnePage = createAsyncThunk(
//     "page/onePage",
//     async (id) => {
//         const res = await pageDataService.getOnePage(id);
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

export const stdMSlice = createSlice({
    name: 'stdM',
    initialState,
    reducers: {
        setPageData: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        //get
        builder
        .addCase(retrieveStdM.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveStdM.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.stdM = action.payload
           //  console.log('ps_yo',state.ps)
        });
        builder
        .addCase(retrieveStdM.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.stdM = []
        });
        // builder
        // .addCase(postPage.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(postPage.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.page.push(action.payload); 
        // })
        // .addCase(postPage.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.isError = action.error.message;
        // });
    },
    })
    
    export const { setStdMData } = stdMSlice.actions
    export default stdMSlice.reducer
