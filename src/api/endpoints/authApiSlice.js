import { handleOnQueryStarted } from '../../utils/apiCalls/handleOnQueryStarted';
import apiSlice from '../apiSlice';
import { setToken } from '../../features/userSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userLoginData) => ({
        url: '/users/login',
        method: 'POST',
        body: userLoginData,
      }),
      onQueryStarted: (arg, { dispatch, queryFulfilled }) => {
        const onSuccess = (response, dispatch) => {
          dispatch(setToken(response.data.token));
        };

        const onError = (error, dispatch) => {
          console.error('Login failed:', error);
        };

        handleOnQueryStarted(queryFulfilled, onSuccess, onError)(dispatch);
      },
    }),
    registerUser: builder.mutation({
      query: (userRegisterData) => ({
        url: '/users/signup',
        method: 'POST',
        body: userRegisterData,
      }),
      onQueryStarted: (arg, { dispatch, queryFulfilled }) => {
        const onSuccess = (response, dispatch) => {
          const token = response.data.token;
          console.log('Registration successful:', token);
          dispatch(setToken(token));
        };

        const onError = (error, dispatch) => {
          console.error('Registration failed:', error);
        };

        handleOnQueryStarted(queryFulfilled, onSuccess, onError)(dispatch);
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApiSlice;
