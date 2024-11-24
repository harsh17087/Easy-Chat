import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
// Import your reducers here

const store = configureStore({
  reducer: {
    app: appReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
