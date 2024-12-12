import React, { useState, useMemo } from "react";

const Factorial: React.FC = () => {
    const [num, setNum] = useState<number>(0);


    const calcFact = (num: number) => {
        let res = 1;
        for (let i = 1; i <= num; i++) {
            res *= i;
        }
        return res;
    }

    const factorial = useMemo(() => calcFact(num), [num]);

    return (
        <div>
            <h3>Factorial using usememo</h3>
            <div>
                <label>Enter a number to find factorial:</label>
                <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value) || 0)} />
            </div>
            <h3>The factorial os {num} is: {factorial}</h3>
        </div>
    )

}
export default Factorial;