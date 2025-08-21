let notes = [
  {
    "id": 1,
    "title": "Shopping List",
    "content": "Milk, Bread, Eggs"
  },
  {
    "id": 2,
    "title": "Workout Plan",
    "content": "Monday: Chest, Tuesday: Back, Wednesday: Legs"
  },
  {
    "id": 3,
    "title": "Books to Read",
    "content": "Atomic Habits, Deep Work, Clean Code"
  }
]

exports.getAllNotes=(req,res)=>{
    res.json(notes)
}

exports.getNotebyId = (req,res)=>{
    let note = notes.find(n=>n.id ==req.params.id) 
    note ? res.json(note) : res.status(404).json({message : 'note not found'})
}

exports.