import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../db/db";



const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser : (state, action) =>{
            state.push(action.payload)
        },
        updateUser : (state,action) =>{
            const {id,name,email,phone} = action.payload;
            const update = state.find(user => user.id === parseInt(id));
            if(update){
                update.name=name;
                update.email=email;
                update.phone=phone;
            }
        },
        userDelete :(state,action)=>{
            const {id} = action.payload;
            const update = state.find(user => user.id === parseInt(id));
            if(update){
                return state.filter(user => user.id !== parseInt(id))
            }
        }
    }
})

export const {addUser, updateUser, userDelete} = userSlice.actions
export default userSlice.reducer;