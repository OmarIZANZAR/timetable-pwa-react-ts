import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import { StateInterface } from '../utils/interfaces'

const middlwares = [thunk]

export const initialState : StateInterface = {
    currentWeek: 1,
	lastWeek: 1,
    daysPlans: [],
	rawData: [],
	startDate: null,
    today: null,
    currentWeekStart: null,
    currentWeekEnd: null,
}

const store = createStore(
	reducer, 
	initialState, 
	compose( 
		applyMiddleware(...middlwares),
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store;
