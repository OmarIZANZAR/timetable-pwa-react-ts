import axios from 'axios';
import { Actions } from '../context';
import { StateInterface } from '../utils/interfaces';
import { getDaysPlans, getWeeksStart } from '../utils/hooks';

export const initiateState = (state: any) => async (dispatch: any) => {
  // Get sessions
  let data = [];
  try {
    const res = await axios.get('http://localhost:5000/sessions?classroom=1')
    data = res.data.data
  } catch (error) {
    console.log(error)
  }

  // Initiating the state
  const initiatedState: StateInterface = {
    ...state,
    daysPlans: [],
  };

  // Setting the last week
  const lastSession = data.sort( (a:any, b:any) => b.endWeek - a.endWeek )[0]
  initiatedState.lastWeek = lastSession.endWeek

  // Setting the current day
  let today = new Date()
  initiatedState.today = today.toLocaleDateString(undefined, { weekday: 'long' })

  // Setting the current week count
  let countingStartDay = new Date( getWeeksStart() );
  let dt = today.getTime() - countingStartDay.getTime();
  let cw = Math.floor( ( dt / ( 1000*3600*24 ) ) / 7 ) + 1
  initiatedState.currentWeek = cw < initiatedState.lastWeek ? cw : initiatedState.lastWeek;

  // Setting raw data
  initiatedState.rawData = data

  // Setting days plans for the current week
  initiatedState.daysPlans = getDaysPlans(initiatedState.currentWeek, data);

  // Dispatching
  dispatch({ type: Actions.INITIATE_STATE, payload: initiatedState })
}

export const prevWeek = () => (dispatch: any) : void => {
  dispatch({ type: Actions.PREV_WEEK })
}

export const nextWeek = () => (dispatch: any) : void => {
  dispatch({ type: Actions.NEXT_WEEK })
}

export const setCurrentWeekEnds = (currentWeek: number) => (dispatch: any) : void => {
  const options : any = { month: 'long', day: 'numeric'  }

  let initMS = new Date( getWeeksStart() ).getTime()
  let firstMS = ( ( currentWeek - 1 ) * 7 * 24 * 3600 * 1000 ) + initMS
  let lastMS = firstMS + ( 4 * 24 * 3600 * 1000 )

  let currentWeekStart = new Date(firstMS).toLocaleDateString('fr-FR', options )
  let currentWeekEnd = new Date(lastMS).toLocaleDateString('fr-FR', options )

  dispatch({ 
    type: Actions.SET_CURRENT_WEEK_ENDS,
    payload: { currentWeekStart, currentWeekEnd }
  })
}