import axios from 'axios';
import { Actions } from '../context';
import { StateInterface, SessionInterface } from '../utils/interfaces';
import { getDaysPlans, getWeeksStart } from '../utils/hooks';

export const initiateState = (state: StateInterface) => async (dispatch: any) => {
  try {
    // Get sessions
    const res = await axios.get('https://timetable.cyclic.app/sessions?classroom=1')
    const data : SessionInterface[] = res.data.data

    // Initiating the state
    const initiatedState : StateInterface = {
      ...state
    };

    // Setting the last week
    const lastSession: SessionInterface = data.sort( (a:any, b:any) => b.endWeek - a.endWeek )[0]
    initiatedState.lastWeek = lastSession.endWeek

    // Setting the current day
    const today: Date = new Date()
    initiatedState.today = today.toLocaleDateString(undefined, { weekday: 'long' })

    // Getting the timtable start date
    const weeksCountStartDate: string = getWeeksStart(data);
    initiatedState.startDate = weeksCountStartDate

    // Setting the current week count
    const countingStartDay: Date = new Date( weeksCountStartDate );
    const dt: number = today.getTime() - countingStartDay.getTime();
    const weekCount: number = Math.floor( ( dt / ( 1000*3600*24 ) ) / 7 ) + 1
    initiatedState.currentWeek = weekCount < initiatedState.lastWeek ? weekCount : initiatedState.lastWeek;

    // Setting raw data
    initiatedState.rawData = data

    // Setting days plans for the current week
    initiatedState.daysPlans = getDaysPlans(initiatedState.currentWeek, data);

    // Dispatching
    dispatch({ type: Actions.INITIATE_STATE, payload: initiatedState })
  } catch (error) {
      console.log("INITIATE_STATE_ERROR", error)
  }
}

export const prevWeek = () => (dispatch: any) : void => {
  try {
    dispatch({ type: Actions.PREV_WEEK })
  } catch (error) {
    console.log("CHANGE_TO_PREV_WEEK_ERROR", error)
  }
}

export const nextWeek = () => (dispatch: any) : void => {
  try {
    dispatch({ type: Actions.NEXT_WEEK })
  } catch (error) {
    console.log("CHANGE_TO_NEXT_WEEK_ERROR", error)
  }
}

export const setCurrentWeekEnds = (currentWeek: number, startDate: string) => (dispatch: any) : void => {
  try {
    const options : Intl.DateTimeFormatOptions = {month: 'long', day: 'numeric'}

    let initMS: number = new Date( startDate ).getTime()
    let firstMS: number = ( ( currentWeek - 1 ) * 7 * 24 * 3600 * 1000 ) + initMS
    let lastMS: number = firstMS + ( 4 * 24 * 3600 * 1000 )

    let currentWeekStart: string = new Date(firstMS).toLocaleDateString('fr-FR', options )
    let currentWeekEnd: string = new Date(lastMS).toLocaleDateString('fr-FR', options )

    dispatch({ 
      type: Actions.SET_CURRENT_WEEK_ENDS,
      payload: { currentWeekStart, currentWeekEnd }
    })
  } catch (error) {
      console.log("SET_CURRENT_WEEK_ENDS_DATES_ERROR", error)
  }
}