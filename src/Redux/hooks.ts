import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootStore, AppThunk } from './store';

export const useAppDispatch = () => useDispatch<AppThunk>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
