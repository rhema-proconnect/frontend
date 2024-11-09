import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cpnyDataService from "../service/cpnyService";
import axiosInstance from "../service/axiosInstance";

const initialState = {
    cpny: [],
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

export const retrieveCpny = createAsyncThunk(
    "company/retrieve",
    async () => {
        const res = await cpnyDataService.getAll();
        // console.log()
        return res.data.data;
    }
);

export const getOneCpny = createAsyncThunk(
    "page/onePage",
    async (id) => {
        const res = await cpnyDataService.getOnePage(id);
        return res.data
    }
)

export const postCpny = createAsyncThunk('cpny/postCpny', async (newData) => {
    const response = await axiosInstance.post('add/company', newData);
    return response.data;
});

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

export const cpnySlice = createSlice({
    name: 'cpny',
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
        .addCase(retrieveCpny.pending, (state) => {
            state.isLoading = true
        });
        builder
        .addCase(retrieveCpny.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cpny = action.payload
           //  console.log('ps_yo',state.ps)
        });
        builder
        .addCase(retrieveCpny.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.cpny = []
        });
        builder
        .addCase(postCpny.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(postCpny.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.cpny.push(action.payload); 
        })
        .addCase(postCpny.rejected, (state, action) => {
            state.status = 'failed';
            state.isError = action.error.message;
        });
    },
    })
    
    export const { setCpnyData } = cpnySlice.actions
    export default cpnySlice.reducer