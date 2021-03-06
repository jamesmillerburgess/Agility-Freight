/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';

import { quote } from './quoteReducers';

if (Meteor.isClient) {
  describe('New Quote Reducers', () => {
    chai.should();
    it('defaults the various sections', () => {
      const newNewQuote = quote();

      newNewQuote.should.have.property('cargo');
      newNewQuote.should.have.property('movement');
      newNewQuote.should.have.property('otherServices');
      newNewQuote.should.have.property('charges');
    });
  });
}
