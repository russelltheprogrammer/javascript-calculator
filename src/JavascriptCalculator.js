import React, { useState } from "react";
import './index.scss';


const JavascriptCalculator = () => {

    const [display, setDisplay] = useState(0);
    const [maxDigitMessageDisplay, setMaxDigitMessageDisplay ] = useState(null);


    const maxDigitLimit = () => {
        const MaxDigitMessage = "   Max Digits Allowed";
        setMaxDigitMessageDisplay(MaxDigitMessage)
            setTimeout(() => {setMaxDigitMessageDisplay(null)}, 750)

    };

    const handleNumbers = (e) => {
        if(display.length > 20){
            maxDigitLimit();
        }
        else {
            const number = e.target.value;
            const regexZero = /^0/g;
            if(regexZero.test(display)) {
                return setDisplay(number);
            }
                return setDisplay(display.concat(number));
        }
    }

    const handleOperators = (operator) => {
        if(display.length > 20){
            maxDigitLimit();
        }
        else {
            const regexZero = /^0/g;
            const regexOperatorTestMoreThanOne = /[*]+$|[/]+$|[+]+$|[-]+$/g;
            const regexOperatorTestNegative = /[/*+]{2,}$|[-]{2,}|[/*+-]{3,}$/g;
        
                if (regexZero.test(display)) {
                    return setDisplay(operator) & console.log(display);
                    
                }
                else if (regexOperatorTestMoreThanOne.test(display)){
                    if(regexOperatorTestNegative.test(display.concat(operator))){
                        return display;
                    }
                    else {
                        return setDisplay(display.concat(operator));
                    }
                }
                else {
                    return setDisplay(display.concat(operator));
                }
        }
    }

    const handleDecimals = (e) => {

    }

    const handleEqual = (e) => {

    }

    return ( 
    
    <div className="container-fluid">
        <table className="calculator-container" border="0" align="center" width="100%">
            <tbody>
                <tr>
                    <td colSpan="5" id="display">
                        <div>
                        {maxDigitMessageDisplay === null ? display : maxDigitMessageDisplay}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><button id="seven" className="btn btn-secondary" value="7" onClick={handleNumbers}>7</button></td>
                    <td><button id="eight" className="btn btn-secondary" value="8" onClick={handleNumbers}>8</button></td>
                    <td><button id="nine" className="btn btn-secondary" value="9" onClick={handleNumbers}>9</button></td>
                    <td><button id="divide" className="btn btn-primary" onClick={() => handleOperators("/")}><i className="fas fa-divide"></i></button></td>
                    <td><button id="clear" className="btn btn-danger" onClick={() => setDisplay(0)}>AC</button></td>
                </tr>
                <tr>
                    <td><button id="four" className="btn btn-secondary" value="4" onClick={handleNumbers}>4</button></td>
                    <td><button id="five" className="btn btn-secondary" value="5" onClick={handleNumbers}>5</button></td>
                    <td><button id="six" className="btn btn-secondary" value="6" onClick={handleNumbers}>6</button></td>
                    <td><button id="multiply" className="btn btn-primary" onClick={() => handleOperators("*")}><i className="fas fa-times"></i></button></td>
                    <td rowSpan="3"><button id="equal" className="btn btn-success" value="=" onClick={handleEqual}><i className="fas fa-equals"></i></button></td>
                </tr>
                <tr>
                    <td><button id="one" className="btn btn-secondary" value="1" onClick={handleNumbers}>1</button></td>
                    <td><button id="two" className="btn btn-secondary" value="2" onClick={handleNumbers}>2</button></td>
                    <td><button id="three" className="btn btn-secondary" value="3" onClick={handleNumbers}>3</button></td>
                    <td><button id="subtract" className="btn btn-primary" onClick={() => handleOperators("-")}><i className="fas fa-minus"></i></button></td>
                </tr>
                <tr>
                    <td colSpan="2"><button id="zero" className="btn btn-secondary" value="0" onClick={handleNumbers}>0</button></td>
                    <td><button id="decimal" className="btn btn-secondary"value="." onClick={handleDecimals}>.</button></td>
                    <td><button id="add" className="btn btn-primary" onClick={() => handleOperators("+")}><i className="fas fa-plus"></i></button></td>
                </tr>
            </tbody>
        </table>
        
    </div> 

    );
}
 
export default JavascriptCalculator;

// when evaluation cannot be completed,  blank / 9 return undefined or 9 / blank return undefined
// Add description to title of calculator so it is known how it calculates
