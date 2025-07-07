import { createSlice } from "@reduxjs/toolkit";
import type { Post } from "../../types/Post";
import { PostsData } from "../../data/PostsData";

interface PostsState {
    posts: Post[];
    recentPosts: Post[];
    currentPosts: Post[];
    currentPage: number;
    totalPages: number;
    postDetails: Post | null;
  }

const initialState : PostsState = {
    posts: PostsData,
    currentPosts: [],
    recentPosts: [],
    currentPage: 1,
    totalPages:  Math.ceil(PostsData.length / 6),
    postDetails: null
}

const todoSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostsByPage: (state, action) => {
            const { page , itemsPerPage} = action.payload;
            const indexOfLastItem = page * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            state.currentPage = page;
            state.currentPosts = [...state.posts].slice(indexOfFirstItem, indexOfLastItem);
        },
        getRecentPosts: (state, action) => {
            const { len ,id } = action.payload;
            if(id)
                state.recentPosts = [...state.posts].filter((item) => item.id != id).reverse().slice(0, len);
            else
                state.recentPosts = [...state.posts].reverse().slice(0, len);
            
        },
        getPost: (state, action) => {
            const post = state.posts.find((p) => p.id === action.payload.id);
            if (post) {
                state.postDetails = post;
            }
        }
    } 
});

export const { getPostsByPage, getRecentPosts, getPost } = todoSlice.actions;

export default todoSlice.reducer;