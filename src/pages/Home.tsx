import CSS from 'csstype';
import { Header, Table } from '../components';

const Home = () => {
    return (
        <div style={homeContainer}>
            <Header />
            <Table />
        </div>
    )
}

const homeContainer : CSS.Properties = {
    backgroundColor: 'inherit',
    height: '100%',
    width: '100%',
    padding: '1rem',
}

export default Home;
