const express = require('express');
const { body, validationResult } = require('express-validator');

const notesRoute = express.Router();

const { notes_data, write_note_in_file } = require('../../helper/read_write_mock_data');


// get note by slug
notesRoute.get('/:slug', function (req, res) {
  const notes = notes_data();
  const note = notes.filter(function (note) {
    return note.slug == req.params.slug;
  });
  if (note.length !== 0) {
    res.status(200).json(note[0]);
  } else {
    res.status(404).json({ message: 'note not found' })
  }
});

// create a new note
notesRoute.post(
  '/',
  body('title').isLength({ min: 3 }),
  body('body').isLength({ min: 3 }),
  body('slug').isLength({ min: 3 }),
  body('createdAt').isLength({ min: 3 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const notes = notes_data();
    // generate random id
    req.body.id = Math.random().toString(36).substring(2, 36);
    notes.push(req.body)
    write_note_in_file(JSON.stringify(notes));
    res.json({ note: req.body, message: 'note created successfully' });
  }
);

// delete note by id
notesRoute.delete('/:id', function (req, res) {
  let noteFound = false;
  let notes = notes_data();
  notes = notes.filter(function (note) {
    note.id == req.params.id ? (noteFound = true) : noteFound;
    return note.id != req.params.id;
  });
  write_note_in_file(JSON.stringify(notes));
  res.status(noteFound ? 200 : 404).json(
    noteFound
      ? { message: 'note deleted successfully' }
      : { message: 'note not found' }
  );
});

module.exports = { notesRoute };
