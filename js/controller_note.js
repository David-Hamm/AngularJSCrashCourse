guidebook.controller('AddNoteController', function($scope, $location, $routeParams, NoteModel) {
    let chapterId = $routeParams.chapterId
    $scope.cancel = function() {
        $location.path('#!/chapter/' + chapterId);
    };
    $scope.createNote = function() {
        NoteModel.addNote(chapterId, $scope.note.content);
        $location.path('#!/chapter/' + chapterId);
    };
});

guidebook.controller('DeleteNoteController', function($scope, $location, $routeParams, NoteModel) {
    console.log('In delete note controller');
    let chapterId = $routeParams.chapterId;
    console.log("ABOUT TO ENTER MODEL FUNCTIONS WITH PARAMS: Chapter ID: " + chapterId + " and note ID: " + $routeParams.noteId);
    NoteModel.deleteNote(chapterId, $routeParams.noteId);
    $location.path('#!/chapter/' + chapterId);
});