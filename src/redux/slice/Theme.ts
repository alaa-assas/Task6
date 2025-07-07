import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') return true;
  if (savedTheme === 'light') return false;

  localStorage.setItem('theme', 'light');
  return false;
};

interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
      const root = document.documentElement;
      if (state.isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },
    setDarkMode: (state, action: { payload: boolean }) => {
      state.isDark = action.payload;
      const root = document.documentElement;
      if (state.isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;