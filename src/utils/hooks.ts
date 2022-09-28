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

export function getWeeksStart (data: any) : string {
    const sessions = data.sort( (a: any, b: any) => {
        return new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf()
    })

    return sessions[0].startDate;
}