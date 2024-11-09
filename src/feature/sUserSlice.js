import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import pageDataService from "../service/pageService";
import axiosInstance from "../service/axiosInstance";

const initialState = {
    suser: [],
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

export const retrieveSuser = createAsyncThunk(
    "susers/retrieve",
    async () => {
        const res = await axiosInstance.get("suser");
        // console.log(res.data.data)
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

export const sUserSlice = createSlice({
    name: 'suser',
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
        .addCase(retrieveSuser.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveSuser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.suser = action.payload
        });
        builder
        .addCase(retrieveSuser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.suser = []
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
    
    export const { setSuserData } = sUserSlice.actions
    export default sUserSlice.reducer
