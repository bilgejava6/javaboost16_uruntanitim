/**
 * Slice yazmak için temel olarak 3 kullanım alanı yazılır.
 * 1. Değişkenleri tanımlama
 * 2. Fetch işlemlerini tanımlama
 * 3. Slice ı oluşturmak
 */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
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
    reducers: {
        /**
         * 
         * @param state -> initialState içerisinde tanımlı olan değişkenleri kapsar ve böylece değiştirebilirsiniz.
         * @param action -> user gönderdiğinizi düşünün bu bilgiyi alarak ilgili alana set edebilirsiniz.
         * PayloadAction<Team> -> bu ifade action içerisinde gelecek olan değerin türünü belirler.
         */
        addATeam(state, action: PayloadAction<Team>){
            state.aTeamList = [...state.aTeamList, action.payload]
        },
        addBTeam(state, action: PayloadAction<Team>){
            state.bTeamList = [...state.bTeamList, action.payload]
        }
    },
    extraReducers: (build)=>{}
})
/**
 * DİKKAT!!!!
 * eğer reducers yazmış iseniz bunu mutlaka export etmeniz gereklidir
 */
export const {
    addATeam, addBTeam
} = userSlice.actions;
export default userSlice.reducer;