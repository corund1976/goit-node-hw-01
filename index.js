const { listContacts, getContactById, removeContact, addContact } = require('./contacts')

// const argv = require('yargs').argv

const { Command } = require('commander')

const program = new Command()
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)

const argv = program.opts()

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts().then(console.table)
      break

    case 'get':
      getContactById(id).then(console.log)
      break

    case 'add':
      addContact(name, email, phone).then(console.table)
      break

    case 'remove':
      removeContact(id).then(console.table)
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)