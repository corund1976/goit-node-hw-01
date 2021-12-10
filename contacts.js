const fs = require('fs').promises
const path = require('path')
const uniqid = require('uniqid')

const contactsPath = path.join(__dirname, 'db/contacts.json')
console.log('Путь к contacts.json - contactsPath=', contactsPath)

async function listContacts() {
  try {
    const jsonData = await fs.readFile(contactsPath, 'utf-8')
    const contacts = JSON.parse(jsonData)
    return contacts
  } catch (err) {
    console.log(err)
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts()
    const contactById = contacts.find((contact) =>
      contact.id.toString() === contactId.toString())
    return contactById
  } catch (err) {
    console.log(err)
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts()
    const newContacts = contacts.filter((contact) =>
      contact.id.toString() !== contactId.toString())
    fs.writeFile(contactsPath, JSON.stringify(newContacts), (err) => {
      if (err) throw err
    })
    console.log('✅ File writed successfully')
    return newContacts
  } catch (err) {
    console.log(err)
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts()
    const newContacts = [...contacts, { id: uniqid(), name, email, phone }]
    fs.writeFile(contactsPath, JSON.stringify(newContacts), (err) => {
      if (err) throw err
    })
    console.log('✅ File writed successfully')
    return newContacts
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};