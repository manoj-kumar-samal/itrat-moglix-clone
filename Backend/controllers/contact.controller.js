const Contact = require('../models/contact.model.js');

const contact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message", details: error.message });
  }
};

module.exports = {
  contact
};
