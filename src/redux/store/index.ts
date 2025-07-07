import { configureStore } from "@reduxjs/toolkit";
import postReducer from './../slice/index';
import themeReducer from './../slice/Theme';

const store = configureStore({
    reducer : {
        posts: postReducer,
        theme: themeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;