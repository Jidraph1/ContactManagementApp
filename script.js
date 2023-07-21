const fullname = document.querySelector("#title")
const number = document.querySelector('#number')
const deleteAllBtn = document.querySelector("#delete-all-btn")

let contacts = [];

function addContact(event){
    event.preventDefault()
    const contact = {
        fullname : fullname.value,
        number : number.value,
    }
    
    // add contact
    contacts.push(contact)
}



