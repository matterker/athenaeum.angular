'use strict';

/* jasmine specs for controllers go here */
describe('Athenaeum controllers', function() {

  describe('BookListCtrl', function(){

    it('should create "books" model with 3 books', function() {
      var scope = {},
          ctrl = new BookListCtrl(scope);

      expect(scope.books.length).toBe(3);
    });
  });
});
