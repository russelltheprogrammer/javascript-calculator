import React, { useState } from "react";
import './index.scss';


const JavascriptCalculator = () => {

const [display, setDisplay] = useState(0);

const numberButton = (e) => {
    const number = e.target.value;
    return setDisplay(display + number);
}

    return ( 
    
    <div className="container-fluid">
        <table className="calculator-container" border="0" align="center" width="100%">
            <tbody>
                <tr>
                    <td colSpan="5" id="display">{display}</td>
                </tr>
                <tr>
                    <td><button id="seven" className="btn btn-secondary" onClick={numberButton}>7</button></td>
                    <td><button id="eight" className="btn btn-secondary" onClick={numberButton}>8</button></td>
                    <td><button id="nine" className="btn btn-secondary" onClick={numberButton}>9</button></td>
                    <td><button id="divide" className="btn btn-primary"><i className="fas fa-divide"></i></button></td>
                    <td><button id="clear" className="btn btn-danger" onClick={() => setDisplay(0)}>AC</button></td>
                </tr>
                <tr>
                    <td><button id="four" className="btn btn-secondary">4</button></td>
                    <td><button id="five" className="btn btn-secondary">5</button></td>
                    <td><button id="six" className="btn btn-secondary">6</button></td>
                    <td><button id="multiply" className="btn btn-primary"><i className="fas fa-times"></i></button></td>
                    <td rowSpan="3"><button id="equal" className="btn btn-success"><i className="fas fa-equals"></i></button></td>
                </tr>
                <tr>
                    <td><button id="one" className="btn btn-secondary">1</button></td>
                    <td><button id="two" className="btn btn-secondary">2</button></td>
                    <td><button id="three" className="btn btn-secondary">3</button></td>
                    <td><button id="subtract" className="btn btn-primary"><i className="fas fa-minus"></i></button></td>
                </tr>
                <tr>
                    <td colSpan="2"><button id="zero" className="btn btn-secondary">0</button></td>
                    <td><button id="decimal" className="btn btn-secondary">.</button></td>
                    <td><button id="add" className="btn btn-primary"><i className="fas fa-plus"></i></button></td>
                </tr>
            </tbody>
        </table>
        
    </div> 

    );
}
 
export default JavascriptCalculator;