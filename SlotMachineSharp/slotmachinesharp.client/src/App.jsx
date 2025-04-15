import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    const [spinRes, setSpinRes] = useState([]);
    

    useEffect(() => {

    }, [onloadstart]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function spin() {

        const resArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const resArraySymbols = ["🍕","🍔","🍟","🌭","🍿","🥓","🥚","🍳","🧇","🥞"]
        let test = [];
        for (let i = 0; i < 3; i++) {
            console.log(resArray[i]);
            
            test.push(resArraySymbols[getRandomInt(10)]);
            setSpinRes(test)
            console.log(spinRes)
        }

  
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
            </article>

        </main>
    );
    
    // async function populateWeatherData() {
    //     const response = await fetch('weatherforecast');
    //     if (response.ok) {
    //         const data = await response.json();
    //         setForecasts(data);
    //     }
    // }
}

export default App;