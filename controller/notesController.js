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

exports.createNote= (req,res)=>{

   const{title,content}=req.body

   if(!title || !content) 
    {res.status(400).json({message:"note not found"})}

  let newNote = {
    id:notes.length + 1,
    title ,
    content
  }

  notes.push(newNote)
  res.status(201).json(newNote)
}

exports.updatedNoteById = (req,res)=>{

  const {title,content}= req.body
  const id = parseInt (req.params.id)
  const note = notes.find(n=>n.id===id)
  if (!note){
    return  res.status(404).json({message:"item not found"})
  } 

  if (title) note.title=title
  if(content) note.content= content
  res.json(note)
}

exports.deleteNoteById = (req,res)=>{
  const id = parseInt(req.params.id)
  const indexNote = notes.findIndex(n=>n.id===id)
  if (indexNote===-1){
    return res.status(404).json({message:"note not found"})
  }

  const deleteNote =notes.splice(indexNote,1)
  res.json(deleteNote[0])
}