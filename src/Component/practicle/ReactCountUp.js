   import React from 'react'
   import {CountUp, useCountUp } from 'react-countup';

   const ReactCountUp = () => {
    const countUpRef = React.useRef(null);

    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: 1234567,
        delay: 1000,
        duration: 5,
        onReset: () => console.log('Resetted!'),
        onUpdate: () => console.log('Updated!'),
        onPauseResume: () => console.log('Paused or resumed!'),
        onStart: ({ pauseResume }) => console.log(pauseResume),
        onEnd: ({ pauseResume }) => console.log(pauseResume),
      });
      
     return (
    //    <div>
    //     <h1><CountUp end={200} /></h1>
    //     <br></br>
    //     <h1><CountUp end={200} duration={5} /></h1>
    //     <br></br>
    //     <h1><CountUp  start={500} end={1000} duration={5}/></h1>
    //     <br></br>
    //     <h1><CountUp end={1000} duration={5} prefix='$' decimal={2} /></h1>
    //     <br></br>
    //     <h1><CountUp end={1000} duration={5} suffix='USD' decimal={2} /></h1>
    //     <br></br>
    //    </div>
    <div>
    <div ref={countUpRef} />
    <button onClick={start}>Start</button>
    <button onClick={reset}>Reset</button>
    <button onClick={pauseResume}>Pause/Resume</button>
    <button onClick={() => update(2000)}>Update to 2000</button>
  </div>
     )
   }
   
   export default ReactCountUp