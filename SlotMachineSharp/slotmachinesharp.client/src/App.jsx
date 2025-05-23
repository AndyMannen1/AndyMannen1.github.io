import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    const [spinRes, setSpinRes] = useState([]);
    
    const [winStat, setWinStat] = useState("Click SPIN to play!");

    // useEffect(() => {
    //     gambling();
    // }, [onloadstart]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      async function spin() {
        let spinRes = await gambling();
        console.log(spinRes);
        const resArraySymbols = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥓", "🥚", "🍳", "🧇", "🥞"];
        let test = [];
    
        for (let i = 0; i < 3; i++) {
            test.push(resArraySymbols[spinRes[i] -1]);
            
        }
 
        if (spinRes[3] == 1) {
            setWinStat("You won!");
        }    
        else {
            setWinStat("You lost!");
        }
    
        setSpinRes(test); // ✅ Set it once after loop
    }
    

    

    return (
        <main>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstra.</p>

            <article className='slotMachine'>
                <section className='slotMachineItemWrapper'>
                    <section className='slotMachineSection'>
                        <div className='slotMachineItem'>
                            {spinRes[0]}
                        </div>
                    </section>
                    <section className='slotMachineSection'>   
                        <div className='slotMachineItem'>
                            {spinRes[1]}
                        </div>
                    </section>
                    <section className='slotMachineSection'>
                        <div className='slotMachineItem'>
                            {spinRes[2]}
                        </div>
                    </section>
                </section>
                <section className='slotMachineBottom'> 
                    <button onClick={spin} className='slotMachineStart'>SPIN!</button>

                </section>
                <h2>{winStat}</h2>
            </article>

        </main>
    );
    
    async function gambling() {
        const response = await fetch('https://localhost:7070/gamble');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data; // 👈 You need to return this
        } else {
            console.error("Failed to fetch gamble data");
            return [];
        }
    }
    
}

export default App;