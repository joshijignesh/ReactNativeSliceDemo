import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../services/modules/users/types";

interface usersState {
    users: User[],
    favourite: User[],
}

const initialState: usersState = {
    users: [],
    favourite: []
};


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            state.favourite = [...state.favourite, action.payload]
        },
        addUsers: (state, action) => {
            state.users = action.payload
        },
        appendUserData: (state, action) => {
            state.users = [...state.users, ...action.payload]
        },
    }
})

export const { addFavourite, addUsers , appendUserData} = usersSlice.actions

export default usersSlice.reducer

