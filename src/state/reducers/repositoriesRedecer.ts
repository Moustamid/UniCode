import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loadings: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loadings: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loadings: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loadings: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
