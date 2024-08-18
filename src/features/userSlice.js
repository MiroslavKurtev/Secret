import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    token: '',
    fist_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    team: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.user.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
