import * as Actions from './actions'
import { initialState } from './store';
import { ActionInterface, StateInterface } from '../utils/interfaces'

function reducer( state: StateInterface = initialState, action: ActionInterface) : StateInterface {
    switch(action.type){
        case Actions.INITIATE_STATE : return action.payload;

        case Actions.NEXT_WEEK:
            return {
                ...state,
                currentWeek: state.currentWeek + 1 > state.lastWeek ? state.currentWeek : state.currentWeek + 1 ,
                // current_week_start: '03 january',
                // current_week_end: '07 january',
            };

        case Actions.PREV_WEEK:
            return {
                ...state,
                currentWeek: state.currentWeek > 1 ? state.currentWeek - 1 : state.currentWeek,
                // current_week_start: '03 january',
                // current_week_end: '07 january',
            };

        case Actions.SET_DAYS_PLANS: 
            return {
                ...state,
                daysPlans: action.payload
            };

        case Actions.SET_CURRENT_WEEK_ENDS: 
            return {
                ...state,
                currentWeekStart: action.payload.currentWeekStart,
                currentWeekEnd: action.payload.currentWeekEnd,
            };

        case Actions.SET_RAW_DATA: 
            return {
                ...state,
                rawData: action.payload,
            };

        default: return state;
    }
}

export default reducer;