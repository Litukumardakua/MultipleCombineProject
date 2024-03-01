import React, { useRef } from 'react';
import IdleTimer from 'react-idle-timer';

const IdleTimerc = () => {
    const idleTimer = useRef(null);

    const onIdle = () => {
        console.log("user is idle");
    }

    return (
        <>
            <IdleTimer ref={idleTimer} timeout={2 * 1000} onIdle={onIdle} />
        </>
    );
}

export default IdleTimerc;
