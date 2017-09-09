/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';

import EditShipmentOperations, {
  AirWaybillButton,
  ConfirmBookingButton,
  BillOfLadingButton,
} from './EditShipmentOperations.jsx';

if (Meteor.isClient) {
  chai.should();
  describe('EditShipmentOperations Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <EditShipmentOperations
          shipment={{ cargo: {}, movement: {} }}
          dispatchers={{}}
          match={{ params: {} }}
        />,
      );
    });
    it('renders only confirm booking button if status is unconfirmed', () => {
      wrapper.setProps({
        shipment: {
          status: 'Unconfirmed',
          cargo: {},
          movement: { mode: 'Sea' },
        },
      });
      wrapper
        .containsMatchingElement(<ConfirmBookingButton />)
        .should.equal(true);
      wrapper
        .containsMatchingElement(<BillOfLadingButton />)
        .should.equal(false);
      wrapper.containsMatchingElement(<AirWaybillButton />).should.equal(false);
      wrapper.setProps({
        shipment: {
          status: 'Unconfirmed',
          cargo: {},
          movement: { mode: 'Air' },
        },
      });
      wrapper
        .containsMatchingElement(<ConfirmBookingButton />)
        .should.equal(true);
      wrapper
        .containsMatchingElement(<BillOfLadingButton />)
        .should.equal(false);
      wrapper.containsMatchingElement(<AirWaybillButton />).should.equal(false);
    });
    it(
      'renders only bill of lading button if status is confirmed and mode ' +
      'is sea',
      () => {
        wrapper.setProps({
          shipment: {
            status: 'Confirmed',
            cargo: {},
            movement: { mode: 'Sea' },
          },
        });
        wrapper
          .containsMatchingElement(<ConfirmBookingButton />)
          .should.equal(false);
        wrapper
          .containsMatchingElement(<BillOfLadingButton />)
          .should.equal(true);
        wrapper
          .containsMatchingElement(<AirWaybillButton />)
          .should.equal(false);
      },
    );
    it(
      'renders only air waybill button if status is confirmed and mode is ' +
      'air',
      () => {
        wrapper.setProps({
          shipment: {
            status: 'Confirmed',
            cargo: {},
            movement: { mode: 'Air' },
          },
        });
        wrapper
          .containsMatchingElement(<ConfirmBookingButton />)
          .should.equal(false);
        wrapper
          .containsMatchingElement(<BillOfLadingButton />)
          .should.equal(false);
        wrapper
          .containsMatchingElement(<AirWaybillButton />)
          .should.equal(true);
      },
    );
  });
}