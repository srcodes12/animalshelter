import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { animalsReducer } from '../features/animals/AnimalsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnerSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer,
  },
  middleware: (getDeafaultMiddleware) => getDeafaultMiddleware().concat([logger])
});


