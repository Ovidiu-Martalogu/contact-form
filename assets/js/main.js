console.log(`loading Contact Form..`);

import { insertFormContact } from "./partials.js";

insertFormContact(1)

const formContact = document.querySelector('#formAction');

// const contactForm = new FormData(formContact)

export function getUserName(elemata) {

    document.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        const elemData = Object.fromEntries(new FormData(formContact));
       console.log(elemData.name)
    }
    )
}getUserName()
const apiLog = 'http://127.0.0.1:5501/';
async function getData() {
    const fetchdata = await fetch(apiLog)
    const getData = await fetchdata.json();

    console.log(getData);

} getData()