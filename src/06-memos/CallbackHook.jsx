import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const incrementFunc = () => {
    //     setCounter(counter+1);
    // }

    const incrementFunc = useCallback(
      (value) => {
        // console.log('setcounter(counter+1');
        // setCounter(counter+1);
        setCounter((c)=> c+value);
      },
      [],
    )

    useEffect(() => {
    //   incrementFunc();
    }, [incrementFunc])
    
    

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFunc} />
        </>
    )
}
