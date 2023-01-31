import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3100/cell");
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    addItem(state, action) {
      // state.cell.push({
      //   id: new Date().toISOString(),
      //   date: action.payload.date,
      //   text: action.payload.text,
      //   completed: false,
      //   archieved: false,
      // });
    },
    removeItem(state, action) {},
    toggleItemCompleted(state, action) {},
    toggleItemArchieved(state, action) {},
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },

    [fetchData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export const { addItem, removeItem, toggleItemCompleted, toggleItemArchieved } =
  dataSlice.actions;
export default dataSlice.reducer;
