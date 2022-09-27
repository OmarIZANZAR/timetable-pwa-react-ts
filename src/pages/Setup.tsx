import CSS from 'csstype';

const Setup = () => {
    return (
        <div style={setupContainer}>
            <div style={head}>
                <h1>ENSEM</h1>
                <p>Steps</p>
            </div>
            <div>

                <div>
                    <p>Branche title description card</p>
                </div>

            </div>
        </div>
    )
}

const setupContainer : CSS.Properties = {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    padding: '1rem',
    // background: 'aliceblue',
}

const head: CSS.Properties = {
    width: '50%',
    height: '100%',
    border: '1px solid black',
}

export default Setup;
