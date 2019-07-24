guidebook.service('NoteModel', function() {
    this.getNotesForChapter = function(chapterId) {
        let chapter = JSON.parse(window.localStorage.getItem(chapterId));
        if (!chapter) {
            return [];
        }
        return chapter.notes;
    };
    this.addNote = function(chapterId, noteContent) {
        let now = new Date();
        let note = {
            content: noteContent,
            id : now
        };
        let chapter = JSON.parse(window.localStorage.getItem(chapterId));
        if (!chapter) {
            chapter = {
                id : chapterId,
                notes : []
            }
        }
        chapter.notes.push(note);
        window.localStorage.setItem(chapterId, JSON.stringify(chapter))
    };
    this.deleteNote = function(chapterId, noteId) {
        let chapter = JSON.parse(window.localStorage.getItem(chapterId));
        if (!chapter || !chapter.notes) {
            return;
        }
        for (let i = 0; i < chapter.notes.length; i++) {
            if (chapter.notes[i].id === noteId) {
                chapter.notes.splice(i, 1);
                window.localStorage.setItem(chapterId, JSON.stringify(chapter));
                return;
            }
        }
    }
});