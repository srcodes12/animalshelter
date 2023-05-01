import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../app/utils/mapImageURL';

export const fetchAnimals = createAsyncThunk(
    'animals/fetchAnimals',
    async () => {
        const response = await fetch(baseUrl + 'animals');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    animalsArray: [],
    isLoading: true,
    errMsg: ''
};

const animalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAnimals.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchAnimals.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.animalsArray = mapImageURL(action.payload);
        },
        [fetchAnimals.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const animalsReducer = animalsSlice.reducer;

export const selectAllanimals = (state) => {
    return state.animals.animalsArray;
};

export const selectAnimalsById = (id) => (state) => {
    return state.animals.animalsArray.find(
        (animal) => animal.id === parseInt(id)
    );
};

export const selectFeaturedAnimals = (state) => {
    return { 
        featuredItem: state.animals.animalsArray.find((animal) => animal.featured),
        isLoading: state.animals.isLoading,
        errMsg: state.animals.errMsg
    
}
};