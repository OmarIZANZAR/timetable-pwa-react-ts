import styles from '../styles/ClassCard.module.css';
import React from 'react'

import { SessionInterface } from '../utils/interfaces';

interface Props {
    session: SessionInterface,
}

const ClassCard : React.FC<Props> = ({ session } : Props) : JSX.Element => {

    let start: number = 1;
    switch(session.startTime){
        case 8: start = 1; break;
        case 10: start = 2; break;
        case 14: start = 3; break;
        case 16: start = 4; break;
    }

    let end: number = 2;
    switch(session.endTime){
        case 10: end = 2; break;
        case 12: end = 3; break;
        case 16: end = 4; break;
        case 18: end = 5; break;
    }

    return (
        <div className={styles.container} style={{
            gridColumnStart: start,
            gridColumnEnd: end,
            gridRowStart: 1,
            gridRowEnd: 1,
        }}>
            <div className={styles.title}>
                <p>{session.isTp ? "TP " : ""}{session.Element.title}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.badge} style={{ 
                    backgroundColor: session.isTp ? "orange" : "#94B8FF"  
                }}>
                    <p>Pr.{session.Element.Teacher?.firstname || ''}</p>
                </div>
                <div className={styles.time}>
                    <p>{ session.endTime - session.startTime }h</p>
                </div>
            </div>
        </div>
    )
}

export default ClassCard
