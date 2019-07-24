guidebook.controller('ChaptersController', function($scope, $location, $routeParams, ChapterModel, NoteModel) {
    const chapters = ChapterModel.getChapters();
    for (let i = 0; i < chapters.length; i++) {
        chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
    }
    $scope.chapters = chapters;
    $scope.selectedChapterId = $routeParams.chapterId;
    $scope.onDelete = function(chapterId, noteId) {
        let confirmDelete = confirm('Are you sure you want to delete this note');
        if (confirmDelete) {
            NoteModel.deleteNote(chapterId, noteId);
            $location.path('#!/deleteNote/' + chapterId + "/" + noteId);
        }
    };
});