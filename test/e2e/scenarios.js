'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Athenaeum App', function() {

  describe('Book List view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });


    it('should list books', function() {
      expect(repeater('.books li').count()).toBe(3);
    });
  });
});
