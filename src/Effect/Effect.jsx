import { useState } from "react"

function Effect(){
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    function updateCount(e){
       // increase the count by 1
       
    }
    return (
        <div>
            <button onClick={updateCount} value={count}>increase</button>
            <p>{count}</p>
            <button onClick={updateCount} value={count1}>Uprise</button>
            <p>{count1}</p>
        </div>
    )
}

export default Effect;