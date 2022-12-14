
export interface BrancheInterface {
    uuid: string,
    title: string,
}

export interface ClassroomInterface {
    uuid: string,
    title: string,
    grade: number,
    Branche: BrancheInterface
}

export interface TeacherInterface {
    uuid: string,
    firstname: string,
    lastname: string
}

export interface ElementInterface {
    uuid: string,
    title: string,
    Teacher: TeacherInterface
}

export interface SessionInterface {
    uuid: string,
    startDate: string,
    startWeek: number,
    endWeek: number,
    day: number,
    startTime: number,
    endTime: number,
    isTp: boolean,
    Classroom: ClassroomInterface,
    Element: ElementInterface
}

export interface StateInterface {
    currentWeek: number,
    lastWeek: number,
    daysPlans: SessionInterface[][],
    
    rawData: SessionInterface[],

    startDate: string | null,
    today: string | null,
    currentWeekStart: string | null,
    currentWeekEnd: string | null,
}

export interface ActionInterface {
    type: string,
    payload?: any, 
}
