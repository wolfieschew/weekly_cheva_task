let notes = [];

function loadData() {
  const data = localStorage.getItem("notes");
  if (data) {
    notes = JSON.parse(data);
  }
}

function saveData() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

document.addEventListener("DOMContentLoaded", function() {
  let notesElement = document.getElementById("tasks-grid");


  function renderNotes() {
    notesElement.innerHTML = ""; 
    notes.forEach((note, index) => {
      const newElement = `
        <div class="task-card">
          <div class="task-title">${note.title}</div>
          <div class="task-description">${note.description}</div>
          <div class="task-deadline">${note.deadline}</div>
          <button class="task-delete" onclick="deleteNote(${index})">Hapus</button>
        </div>
      `;
      notesElement.innerHTML += newElement; 
    });
  }


  function addNote() {
    const newTitle = document.getElementById("task-name").value;  
    const newDescription = document.getElementById("task-desc").value;  
    const newDeadline = document.getElementById("task-deadline").value;  

  
    if (newTitle && newDescription && newTitle.length > 0 && newDescription.length > 0) {
      const newData = {
        title: newTitle,
        description: newDescription,
        deadline: newDeadline,
      };
      notes.push(newData);
      saveData();
      renderNotes();
    }
  }

  window.deleteNote = function(index) {
    notes.splice(index, 1);
    saveData();
    renderNotes();
  }

  document.getElementById("add-task").addEventListener("click", addNote);

  
  loadData();
  renderNotes();
});
