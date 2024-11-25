import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
// Import your reducers here

// Configure the Redux store
const store = configureStore({
  reducer: {
    app: appReducer, // Add the app reducer
    // Add other reducers here
  },
});

// Define RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;

export default store; // Export the configured store
