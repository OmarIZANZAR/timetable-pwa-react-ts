import styles from '../styles/Header.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API } from '../context';

const Header = () => {
    const state: any = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(API.setCurrentWeekEnds(state.currentWeek, state.startDate))
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
