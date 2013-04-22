'use strict';

/* Controllers */

function BookListCtrl($scope) {
  $scope.books = [
    {
      "name": "Book One",
      "path": "/path/book-one",
      "publisher": "Publisher One",
      "year": "2001",
      "month": "July",
      "tags": ["tag-one", "tag-two", "tag-three"]
    },
    {
      "name": "Book Two",
      "path": "/path/book-two",
      "publisher": "Publisher One",
      "year": "2002",
      "month": "June",
      "tags": ["tag-one", "tag-three", "tag-four"]
    },
    {
      "name": "Book Three",
      "path": "/path/book-three",
      "publisher": "Publisher Two",
      "year": "2003",
      "month": "May",
      "tags": ["tag-two"]
    }
  ];
}
