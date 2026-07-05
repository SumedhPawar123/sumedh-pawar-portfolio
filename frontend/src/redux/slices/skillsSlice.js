import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../services/api";

export const fetchSkills = createAsyncThunk(
  "skills/fetchSkills",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiCall("/api/skills");

      // backend returns { success, count, data }
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    items: [],
    filteredSkills: [],
    selectedCategory: "all",
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;

      if (action.payload === "all") {
        state.filteredSkills = state.items;
      } else {
        state.filteredSkills = state.items.filter(
          (skill) => skill.category === action.payload
        );
      }
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
        state.filteredSkills = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.items = [];
        state.filteredSkills = [];
      });
  },
});

export const { setSelectedCategory } = skillsSlice.actions;
export default skillsSlice.reducer;