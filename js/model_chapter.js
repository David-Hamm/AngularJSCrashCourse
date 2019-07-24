guidebook.service('ChapterModel', function() {
    this.getChapters = function() {
        return [
            {
                id : 0,
                title : 'Chapter 1: So, what is Angular JS?',
                summary : 'Find out what separates Angular JS from...'
            },
            {
                id : 1,
                title : 'Chapter 2: Hello World',
                summary : 'Learn how to get up and running with...'
            },
            {
                id : 2,
                title : 'Chapter 3: Quickstart',
                summary : 'Brush up on the Model-View-Controller...'
            },
            {
                id : 3,
                title : 'Chapter 4: Key AngularJS Features',
                summary : 'Discover the strengths of AngularJS...'
            },
            {
                id : 4,
                title : 'Chapter 5: The AngularJS Community',
                summary : 'Get to know the top contributors...'
            }
        ]
    }
});