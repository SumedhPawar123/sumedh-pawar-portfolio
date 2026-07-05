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
    loading: false,
    error: null,
  },
  reducers: {},
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
        state.items = [];
      });
  },
});

export default skillsSlice.reducer;