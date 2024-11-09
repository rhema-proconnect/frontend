import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAllUsers} from "../service/authService";
// import axiosInstance from "../service/axiosInstance";

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};


export const retrieveUser = createAsyncThunk(
    "user/retrieve",
    async () => {
        const res = await getAllUsers()
        // console.log()
        return res.data.data;
    }
);

// export const getOnePage = createAsyncT
// export const deleteCat = createAsyncThunk(
//     "cat/delete",
//     async ({ id }) => {
//         await catDataService.remove(id);
//         return { id };
//     }
// );


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserData: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        //get
        builder
        .addCase(retrieveUser.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.users = action.payload
           //  console.log('ps_yo',state.ps)
        });
        builder
        .addCase(retrieveUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.users = []
        });
    },
    })
    
    export const { setUserData } = userSlice.actions
    export default userSlice.reducer
