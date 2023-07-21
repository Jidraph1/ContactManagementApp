
const fullname = document.querySelector("#title");
const number = document.querySelector("#number");
const deleteAllBtn = document.querySelector("#delete-all-btn");
const addContactForm = document.querySelector("#add-contact-form");
const display = document.querySelector('.displayContact');
let contacts = [];


function localS() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
//   to review localstorage


// class Contact {
//     constructor(fullname, number) {
//       this.fullname = fullname;
//       this.number = number;
//     }
//   }

// class ContactManager {
//     constructor() {;
//       this.displayContacts();
//     }

function addContact(event) {
  event.preventDefault();

  // Get contact form
  const full_name = fullname.value;
  const pNumber = number.value;

  // Create contact
  const contact = {
    fullname: full_name,
    number: pNumber,
  };

  // Add contact
  contacts.push(contact);

  displayC();
}

// Update not working............

function updateContact(contactIndex) {
  const updatedName = prompt("Update Name:");
  const updatedNumber = prompt("Update Number:");
}

// Update not working.........

function deleteAllContacts() {
   
    contacts = [];
    displayC();
  }


function displayC() {
  display.innerHTML = "";

  contacts.forEach((contact, index) => {
    const contactElement = document.createElement("div");
    contactElement.innerHTML = `
      <h3>${contact.fullname}</h3>
      <p>${contact.number}</p>
      <button onclick="updateContact(${index})">Update</button>
      <button onclick="deleteContact(${index})">Delete</button>
    `;
    display.appendChild(contactElement);
  });
}

// delete
function deleteContact(contactIndex) {
    contacts.splice(contactIndex, 1);
    displayC();
  
}

// Click
deleteAllBtn.addEventListener("click", deleteAllContacts);
addContactForm.addEventListener("submit", addContact);

displayC();



