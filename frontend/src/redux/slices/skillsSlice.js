import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../services/api';

export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async (category = null, { rejectWithValue }) => {
    try {
      const url = category ? `/api/skills?category=${category}` : '/api/skills';
      const response = await apiCall(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedCategory: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedCategory } = skillsSlice.actions;
export default skillsSlice.reducer;