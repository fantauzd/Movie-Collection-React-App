import React from 'react';

function Greeting({ name, time }) {
    return (
        <div>
            <p>
                Hello {name}!
            </p>
            <p>
                Did you know it is {time}?
            </p>
        </div>
    );
}

export default Greeting;