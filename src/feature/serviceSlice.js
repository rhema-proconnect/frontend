import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import srvcDataService from "../service/srvcService";

const initialState = {
    srvc: [],
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

export const retrieveService = createAsyncThunk(
    "srvc/retrieve",
    async () => {
        const res = await srvcDataService.getAll();
        // console.log()
        return res.data.data;
    }
);



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

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setServiceData: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        //get
        builder
        .addCase(retrieveService.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveService.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.srvc = action.payload
           //  console.log('ps_yo',state.ps)
        });
        builder
        .addCase(retrieveService.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.srvc = []
        });
    },
    })
    
    export const { setServiceData } = serviceSlice.actions
    export default serviceSlice.reducer
