import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../services/api";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (filters = {}, { rejectWithValue }) => {
    try {
      let url = "/api/projects";
      const params = new URLSearchParams();

      if (filters.category) params.append("category", filters.category);
      if (filters.featured !== undefined) {
        params.append("featured", filters.featured);
      }

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await apiCall(url);

      // backend returns { success, count, data }
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedCategory: "all",
    filteredProjects: [],
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;

      if (action.payload === "all") {
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
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.filteredProjects = Array.isArray(action.payload)
          ? action.payload
          : [];
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.items = [];
        state.filteredProjects = [];
      });
  },
});

export const { filterByCategory } = projectsSlice.actions;
export default projectsSlice.reducer;