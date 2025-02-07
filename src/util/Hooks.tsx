import {useSelector, useDispatch} from 'react-redux'
import {RootState, tanitimDispatch} from '../store/index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<tanitimDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();