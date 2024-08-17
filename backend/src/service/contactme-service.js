import { schemaValidate } from "../validation/validate.js";
import { ResponseError } from "../error/ResponseError.js";
import contactmeValidation from "../validation/contactme-validation.js";
import contactmeUtills from "../utility/contactme-utills.js";

const createContactService = async (request) => {
  const contact = await schemaValidate(
    contactmeValidation.createContactMeValidation,
    request
  );
  const findContact = await contactmeUtills.findContactMe(
    contact.name,
    contact.email,
    contact.subject
  );
  if (findContact) {
    throw new ResponseError(400, "message already send!");
  }
  return contactmeUtills.createContactMe(contact);
};

const getAllContactMeService = async () => {
  const findAllContacts = await contactmeUtills.findAllContacts();
  if (findAllContacts.length === 0) {
    throw new ResponseError(400, "contacts is not found!");
  }
  return findAllContacts;
};

const removeContactMeService = async (contactMeId) => {
  contactMeId = await schemaValidate(
    contactmeValidation.getContactMeValidation,
    contactMeId
  );
  const findContact = await contactmeUtills.findContactMeById(contactMeId);
  if (!findContact) {
    throw new ResponseError(400, "contact is not found!");
  }
  return contactmeUtills.removeContact(contactMeId);
};

export default {
  createContactService,
  getAllContactMeService,
  removeContactMeService,
};
