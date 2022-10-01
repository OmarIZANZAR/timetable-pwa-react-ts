import styles from '../styles/Header.module.css';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API } from '../context';
import { StateInterface } from '../utils/interfaces';

const Header : React.FC = () : JSX.Element => {
    const state = useSelector((state: StateInterface) => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(API.setCurrentWeekEnds(state.currentWeek, state.startDate!))
    }, [state.currentWeek])
 
    return (
        <header className={styles.container}>
            <div className={styles.details}>
                <div>
                    <h2>S{ state.currentWeek }</h2>
                </div>
                <p>du { state.currentWeekStart } au {state.currentWeekEnd}</p>
            </div>

            <div className={styles.controls}>
                <button onClick={() => dispatch(API.prevWeek())}>Prev</button>
                <button onClick={() => dispatch(API.nextWeek())}>Next</button>
            </div>
        </header>
    )
}

export default Header;
