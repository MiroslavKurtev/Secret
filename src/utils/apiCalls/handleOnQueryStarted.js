export const handleOnQueryStarted = (queryFulfilled, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      const result = await queryFulfilled;
      if (onSuccess) {
        onSuccess(result, dispatch);
      }
    } catch (error) {
      if (onError) {
        onError(error, dispatch);
      } else {
        console.error('API call failed:', error);
      }
    }
  };
};
