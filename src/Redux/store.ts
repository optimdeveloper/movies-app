import { AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);
export { persistor };

export type RootStore = ReturnType<typeof store.getState>;
export type AppThunk = ThunkDispatch<{}, RootStore, AnyAction>

export default store;

