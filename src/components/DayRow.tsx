import styles from '../styles/DayRow.module.css';
import React from 'react'

import { SessionInterface } from '../utils/interfaces';

import ClassCard from './ClassCard'

interface Props {
    daySessions: SessionInterface[],
    dayName: string,
    today: string | null,
}

const DayRow : React.FC<Props> = ({ daySessions, dayName, today } : Props) : JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.stroke}></div>
            <p className={ today == dayName ? styles.dayHighlight : "" } >{dayName}</p>
            <div className={styles.dayGrid}>
                { daySessions.map(( session: any, i: number ) => (
                    <ClassCard  
                        key={i}
                        session={session}
                    />
                ))}
            </div>
        </div>
    )
}

export default DayRow