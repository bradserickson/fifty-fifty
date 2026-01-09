import { useState } from "react";

export default function Form() {
    const [subtotalOne, setSubtotalOne] = useState('0');
    const [systemTipsOne, setSystemTipsOne] = useState('0');
    const [cashTipsOne, setCashTipsOne] = useState('0');
    const [subtotalTwo, setSubtotalTwo] = useState('0');
    const [systemTipsTwo, setSystemTipsTwo] = useState('0');
    const [cashTipsTwo, setCashTipsTwo] = useState('0');
    const [subResult, setSubResult] = useState<{ server: number; amount: number } | null>({ server: 0, amount: 0 });
    const [tipResult, setTipResult] = useState<{ server: number; amount: number } | null>({ server: 0, amount: 0 });

    function handleSubmit(e){
        e.preventDefault();
        setSubResult(calculateTotal());
        setTipResult(calculateTips());
    }

    function calculateTotal(){
        let totalOne = parseFloat(subtotalOne);
        let totalTwo = parseFloat(subtotalTwo);
        const difference = Math.abs(totalOne - totalTwo);
        // server 1 has more sales
        if(totalOne > totalTwo){
            return {server: 1, amount: difference/2};
        }
        // server 2 has more sales
        else if(totalTwo > totalOne){
            return {server: 2, amount: difference/2};
        }
        // they are equal
        else{
            return null;
    }
}

    function calculateTips(){
        let tipsOne = (parseFloat(systemTipsOne) - (parseFloat(systemTipsOne) * 0.0725)) + parseFloat(cashTipsOne);
        let tipsTwo = (parseFloat(systemTipsTwo) - (parseFloat(systemTipsTwo) * 0.0725)) + parseFloat(cashTipsTwo);
        const difference = Math.abs(tipsOne - tipsTwo)
        // server 1 has more tips
        if(tipsOne > tipsTwo){
            return {server: 1, amount: difference/2};
        }
        // server 2 has more tips
        else if(tipsTwo > tipsOne){
            return {server: 2, amount: difference/2};
        }
        // they are equal
        else {
            return null;
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Server 1</h3>
                    <p>Subtotal</p>
                    <input value={subtotalOne} onChange={(e) => setSubtotalOne(e.target.value)} />
                </div>
                <div>
                    <p>Total System Tips</p>
                    <input value={systemTipsOne} onChange={(e) => setSystemTipsOne(e.target.value)} />
                </div>
                <div>
                    <p>Total Cash Tips</p>
                    <input value={cashTipsOne} onChange={(e) => setCashTipsOne(e.target.value)} />
                </div>
                <div>
                    <h3>Server 2</h3>
                    <p>Subtotal</p>
                    <input value={subtotalTwo} onChange={(e) => setSubtotalTwo(e.target.value)} />
                </div>
                <div>
                    <p>Total System Tips</p>
                    <input value={systemTipsTwo} onChange={(e) => setSystemTipsTwo(e.target.value)} />
                </div>
                <div>
                    <p>Total Cash Tips</p>
                    <input value={cashTipsTwo} onChange={(e) => setCashTipsTwo(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>{subResult && <p><u>Subtotal</u><br></br>${subResult.amount.toFixed(2)} <br></br>- Server {subResult.server} <br></br>+ Server {subResult.server === 1 ? 2 : 1}</p>}</div>
            <div>{tipResult && <p><u>Tips</u><br></br>${tipResult.amount.toFixed(2)} <br></br>- Server {tipResult.server} <br></br>+ Server {tipResult.server === 1 ? 2 : 1}</p>}</div>
        </>
    )
}
