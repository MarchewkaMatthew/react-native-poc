import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorSliceState {
  value: string[];
}

const initialState: ColorSliceState = {
  value: [],
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export const addColor = createAction<string>('color/addColor')

// Slice - domyślny sposób pisania logiki
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state) => {
      state.value = [...state.value, randomRgb()];
    },
    addColorDiferently: {
      reducer: (state, action: PayloadAction<string>) => {
        state.value.push(action.payload)
      },
      prepare: (value: string) => ({ payload: value }),
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addColor, (state, action) => {
        state.value.push(action.payload);
      })
  }
});

// Action creators are generated for each case reducer function
export const { setColor, addColorDiferently } = colorSlice.actions;

export default colorSlice.reducer;