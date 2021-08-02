import React from "react";
import './index.scss';


const JavascriptCalculator = () => {
    return ( 
    
    <div class="container-fluid">
        <table class="calculator-container" border="0" align="center" width="100%">
        <tr>
            <td colspan="5" id="display">DISPLAY</td>
        </tr>
        <tr>
            <td><button id="seven" class="btn btn-secondary">7</button></td>
            <td><button id="eight" class="btn btn-secondary">8</button></td>
            <td><button id="nine" class="btn btn-secondary">9</button></td>
            <td><button id="divide" class="btn btn-primary"><i class="fas fa-divide"></i></button></td>
            <td><button id="clear" class="btn btn-danger">AC</button></td>
        </tr>
        <tr>
            <td><button id="four" class="btn btn-secondary">4</button></td>
            <td><button id="five" class="btn btn-secondary">5</button></td>
            <td><button id="six" class="btn btn-secondary">6</button></td>
            <td><button id="multiply" class="btn btn-primary"><i class="fas fa-times"></i></button></td>
            <td rowspan="3"><button id="equal" class="btn btn-success"><i class="fas fa-equals"></i></button></td>
        </tr>
        <tr>
            <td><button id="one" class="btn btn-secondary">1</button></td>
            <td><button id="two" class="btn btn-secondary">2</button></td>
            <td><button id="three" class="btn btn-secondary">3</button></td>
            <td><button id="subtract" class="btn btn-primary"><i class="fas fa-minus"></i></button></td>
        </tr>
        <tr>
            <td colspan="2"><button id="zero" class="btn btn-secondary">0</button></td>
            <td><button id="decimal" class="btn btn-secondary">.</button></td>
            <td><button id="add" class="btn btn-primary"><i class="fas fa-plus"></i></button></td>
        </tr>







        </table>
        
    </div> 

    );
}
 
export default JavascriptCalculator;