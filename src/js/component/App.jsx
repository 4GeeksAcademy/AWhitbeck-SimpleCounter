import react, { useEffect, useState } from "react";
import SimpleCounter from "./SimpleCounter.jsx";
import calculateSeconds from "../../lib/time";
import { StopButton, ResumeButton, ResetButton } from "./Buttons.jsx";


function App() {
    const [counter, setCounter] = useState(0);
    const [countingUp, setCountingUp] = useState(true);
    const [startNumber, setStartNumber] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval();
        if (isRunning) {
            interval = setInterval(() => {
                if (countingUp) {
                    setCounter(prevCounter => prevCounter + 1);
                } else {
                    if (counter > 0) {
                        setCounter(prevCounter => prevCounter - 1);
                    }
                }
            }, 1000);
        }
    }
    )


}


export default App;