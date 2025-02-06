/**
 * Slice yazmak için temel olarak 3 kullanım alanı yazılır.
 * 1. Değişkenleri tanımlama
 * 2. Fetch işlemlerini tanımlama
 * 3. Slice ı oluşturmak
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IUserProfile } from "../../model/IUserProfile"

//1.
interface Team{
    userName: string,
    image: string,
    uuid: string
}
interface IInitialState{
    aTeamList: Team[],
    bTeamList: Team[],
    userList: IUserProfile[]
}
const initialStateUser: IInitialState = {
    aTeamList: [],
    bTeamList: [],
    userList: []
}

//2.  OPTIONAL
const fetchUserList = createAsyncThunk('', ()=>{})


//3. 
const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {},
    extraReducers: (build)=>{}
})

export default userSlice.reducer;