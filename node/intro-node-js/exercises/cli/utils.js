const fs = require('fs')
const path = require('path')

const contactsLocation = path.join(__dirname, 'contacts.json');

/**
 * shouldread the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => JSON.parse(fs.readFileSync(contactsLocation));

/**
 * takes a contancs object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => fs.writeFileSync(contactsLocation, JSON.stringify(contacts));

module.exports = { contactsLocation, getContacts, saveContacts };

