import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../services/api';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (filters = {}, { rejectWithValue }) => {
    try {
      let url = '/api/project';
      const params = new URLSearchParams();
      
      if (filters.category) params.append('category', filters.category);
      if (filters.featured !== undefined) params.append('featured', filters.featured);
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      
      const response = await apiCall(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedCategory: 'all',
    filteredProjects: [],
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload === 'all') {
        state.filteredProjects = state.items;
      } else {
        state.filteredProjects = state.items.filter(
          (project) => project.category === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredProjects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { filterByCategory } = projectsSlice.actions;
export default projectsSlice.reducer;