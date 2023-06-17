const argv = require("yargs").argv;

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    // break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    // break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    // break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    // break;

    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// ============================================================
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1DEXoP8AuCGYc1YgoQ6hw" });

// invokeAction({
//   action: "add",
//   name: "Anna Sonechko",
//   email: "anna_sv@gmail.com",
//   phone: "(888) 512-7250",
// });

// invokeAction({
//   action: "update",
//   id: "ttnFHosr6l5Op4Xm2nodi",
//   name: "Anna Sonechko",
//   email: "anna_sun@gmail.com",
//   phone: "(888) 512-7250",
// });
// invokeAction({ action: "remove", id: "ttnFHosr6l5Op4Xm2nodi" });
