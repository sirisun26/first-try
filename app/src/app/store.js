import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import assessmentReducer from '../features/assessment/assessmentSlice';

const rootReducer = combineReducers({
  assessment: assessmentReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck:false
  })
});
const persistor = persistStore(store);
export { store, persistor };
