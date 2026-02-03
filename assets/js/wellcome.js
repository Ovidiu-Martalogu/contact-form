console.log(`wellcome....`);

import {getUserName} from "./main";

const wellcome = document.querySelector('#wellcome')
const wellcomeMsg = `Bine ai venit: ${elemData}`;
function msg(){
    const messg = document.createElement('h1');
    document.textContent= wellcomeMsg;
    wellcome.append(messg)
}