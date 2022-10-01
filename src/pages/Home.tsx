import React from 'react';
import { Header, Table } from '../components';

const Home : React.FC = () : JSX.Element => {
    return (
        <div style={homeContainer}>
            <Header />
            <Table />
        </div>
    )
}

const homeContainer : React.CSSProperties = {
    backgroundColor: 'inherit',
    height: '100%',
    width: '100%',
    padding: '1rem',
}

export default Home;
