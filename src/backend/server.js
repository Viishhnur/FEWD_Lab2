const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contacts_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ CREATE
app.post('/contacts', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).send(contact);
});

// ✅ READ (All)
app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
});

// ✅ READ (Single)
app.get('/contacts/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.send(contact);
});

// ✅ UPDATE
app.put('/contacts/:id', async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// ✅ DELETE
app.delete('/contacts/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.send({ success: true });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
