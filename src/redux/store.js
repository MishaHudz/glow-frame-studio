import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import languageReducer from './language/languageSlice';

const languagePersistConfig = {
  key: 'language',
  storage,
  whitelist: ['isEnglish'],
};

const persistedLanguageReducer = persistReducer(
  languagePersistConfig,
  languageReducer
);

export const store = configureStore({
  reducer: {
    language: persistedLanguageReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['transactions.date'],
      },
    }),
});

export const persistor = persistStore(store);
