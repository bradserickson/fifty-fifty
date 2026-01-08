import { useState } from "react";

export default function Form() {
    const [subtotalOne, setSubtotalOne] = useState('');
    const [systemTipsOne, setSystemTipsOne] = useState('');
    const [cashTipsOne, setCashTipsOne] = useState('');
    const [subtotalTwo, setSubtotalTwo] = useState('');
    const [systemTipsTwo, setSystemTipsTwo] = useState('');
    const [cashTipsTwo, setCashTipsTwo] = useState('');

    function handleSubmit(e){
        e.preventDefault();
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
        </>
    )
}
