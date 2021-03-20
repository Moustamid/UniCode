import { combineReducers } from 'redux';
import repositoryReducer from './repositoriesRedecer';

const reducers = combineReducers({
  repositories: repositoryReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
