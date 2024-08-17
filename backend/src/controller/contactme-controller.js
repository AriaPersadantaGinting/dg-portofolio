import contactmeService from "../service/contactme-service.js";

const create = async (req, res, next) => {
  try {
    const result = await contactmeService.createContactService(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const all = async (req, res, next) => {
  try {
    const result = await contactmeService.getAllContactMeService();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    await contactmeService.removeContactMeService(contactId);
    res.status(200).json({
      data: "remove contact is succesfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  all,
  remove,
};
