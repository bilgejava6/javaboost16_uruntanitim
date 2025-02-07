import { configureStore } from "@reduxjs/toolkit";
import {useSelector} from 'react-redux'
import {
    userSlice
} from './feature'
const store = configureStore({
    reducer: {
        user: userSlice
    }
})
/**
 * Dikkat!!! 
 * öncelikle bir reducers içerisindeki methodu tetiklemek ya da asyncThunk ı tetiklemek için mutlaka
 * dispatch() e ihtiyacınız olacak, Ancak bunun bir standartı olması gerektiği için burada kendi
 * projenize uygun şekilde özelleştirmeniz gereklidir.
 */
export type tanitimDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;