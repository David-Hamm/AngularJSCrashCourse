const guidebookConfig = function($routeProvider) {
    $routeProvider
    .when('/', {
        controller : 'ChaptersController',
        templateUrl : 'views/chapters.html'
    })
    .when('/chapter/:chapterId', {
        controller : 'ChaptersController',
        templateUrl : 'views/chapters.html'
    })
    .when('/addNote/:chapterId', {
        controller : 'AddNoteController',
        templateUrl : 'views/addNote.html'
    })
    .when('/deleteNote/:chapterId/:noteId', {
        controller : 'DeleteNoteController',
        templateUrl : 'views/addNote.html'
    });
};
const guidebook = angular.module('guidebook', ["ngRoute"]).config(guidebookConfig);