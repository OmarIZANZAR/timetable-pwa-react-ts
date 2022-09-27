import React from 'react'
import styles from '../styles/TableHead.module.css';

const TableHead = () => {
    return (
        <div className={styles.container}>
            <div className={styles.timer}>
                <div><p>8 </p><p>10</p><p>12</p></div>
                <div><p>14</p><p>16</p><p>18</p></div>
            </div>
        </div>
    )
}

export default TableHead
