import datason from '../newData.json';
import { SessionInterface } from "./interfaces";

export function getDaysPlans ( currentWeek: number, data: any ) {
    let sessions: SessionInterface[][] = [[],[],[],[],[]];

    data.filter((session: any) => {
        if(session.startWeek <= currentWeek && session.endWeek >= currentWeek ) 
        return session; 
    })
    .forEach( (session: any) => {
        sessions[session.day - 1].push(session)
    })

    return sessions;
}

export function getWeeksStart () : string {
    console.log(datason.sessions.length)
    return datason.weeks_starting_count;
}