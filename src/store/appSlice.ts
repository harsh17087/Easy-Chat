import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean;
  error: string | null;
  menuOpen: boolean;
  mobileResolution: boolean;
  chatPreviewListOpen: boolean;
  liveChat: boolean;
}

const initialState: AppState = {
  isLoading: false,
  error: null,
  menuOpen: true,
  mobileResolution: false,
  chatPreviewListOpen: false,
  liveChat: false,
};

/**
 * Slice for managing application state.
 *
 * @remarks
 * This slice contains reducers to manage loading state, error state, menu visibility, and mobile resolution state.
 *
 * @example
 * ```typescript
 * import { appSlice } from './appSlice';
 * ```
 *
 * @public
 */
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    /**
     * Sets the loading state of the application.
     *
     * @param state - The current state of the application.
     * @param action - The action containing the loading state payload.
     */
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    /**
     * Sets the error state of the application.
     *
     * @param state - The current state of the application.
     * @param action - The action containing the error message payload.
     */
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    /**
     * Clears the error state of the application.
     *
     * @param state - The current state of the application.
     */
    clearError(state) {
      state.error = null;
    },
    /**
     * Toggles the menu visibility state.
     *
     * @param state - The current state of the application.
     */
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    /**
     * Sets the menu visibility state.
     *
     * @param state - The current state of the application.
     * @param action - The action containing the menu visibility state payload.
     */
    menubarOpen(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
    /**
     * Sets the menu bar drawer state
     *
     * @param state - The current state of the application.
     * @param action - The action containing the mobile resolution state payload.
     */
    fromMobile(state, action: PayloadAction<boolean>) {
      state.mobileResolution = action.payload;
    },
    /**
     * Sets the mobile resolution state.
     *
     * @param state - The current state of the application.
     * @param action - The action containing the chat mode state payload.
     */
    chatPreviewListOpen(state, action: PayloadAction<boolean>) {
      state.chatPreviewListOpen = action.payload;
    },
    /**
     * Sets the chat mode state.
     * @param state - The current state of the application.
     * @param action - The action containing the chat mode state payload.
     */
    liveChatOpen(state, action: PayloadAction<boolean>) {
      state.liveChat = action.payload;
    },
    /**
     * Sets the chat mode state.
     * @param state - The current state of the application.
     * @param action - The action containing the chat mode state payload.
     */
  },
});

export const {
  setLoading,
  setError,
  clearError,
  toggleMenu,
  fromMobile,
  menubarOpen,
  chatPreviewListOpen,
  liveChatOpen,
} = appSlice.actions;

export default appSlice.reducer;
