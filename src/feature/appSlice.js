import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appDataService from "../service/appService";

const initialState = {
    app: [],
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

export const retrieveApp = createAsyncThunk(
    "app/retrieve",
    async () => {
        const res = await appDataService.getAll();
        // console.log()
        return res.data.data;
    }
);
export const retrieveAppStatus = createAsyncThunk(
    "app/retrieve",
    async () => {
        const res = await appDataService.getAll();
        // console.log(res.data.data.status)
        return res.data.data;
    }
);



export const appSlice = createSlice({
    name: 'app',
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
        .addCase(retrieveApp.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveApp.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.app = action.payload
           //  console.log('ps_yo',state.ps)
        });
        builder
        .addCase(retrieveApp.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.app = []
        });
        // builder
        // .addCase(retrieveAppStatus.pending, (state) => {
        //     state.isLoading = true
        // });
        // builder
        // .addCase(retrieveAppStatus.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.app = action.payload
        //    //  console.log('ps_yo',state.ps)
        // });
        // builder
        // .addCase(retrieveAppStatus.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload.message
        //     state.app = []
        // });
    },
    })
    
    export const { setAppData } = appSlice.actions
    export default appSlice.reducer
