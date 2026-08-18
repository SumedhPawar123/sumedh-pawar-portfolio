import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './slices/skillsSlice';
import projectsReducer from './slices/projectsSlice';
import contactReducer from './slices/contactSlice';
import authReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
    contact: contactReducer,
    auth: authReducer,
  },
});

export default store;
