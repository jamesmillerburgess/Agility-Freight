import { set } from 'lodash/fp';
import * as ACTION_TYPES from '../../actions/actionTypes';

export const defaultMovementState = {
  pickup: {
    locationType: '',
    country: '',
    postalCode: '',
    portCode: '',
  },
  delivery: {
    locationType: '',
    country: '',
    postalCode: '',
    portCode: '',
  },
};

export const movement = (
  state = defaultMovementState,
  action = { type: '' },
) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_QUOTE:
      return action.quote.movement || defaultMovementState;
    case ACTION_TYPES.LOAD_SHIPMENT:
      return action.shipment.movement;
    case ACTION_TYPES.SET_MOVEMENT_MODE:
      let newState = {};
      newState = set('mode', action.mode, state);
      if (newState.mode === 'Brokerage') {
        newState = set('termsOfSale', '', newState);
      }
      return newState;
    case ACTION_TYPES.SET_MOVEMENT_COMMERCIAL_PARTY:
      return set('commercialParty', action.commercialParty, state);
    case ACTION_TYPES.SET_MOVEMENT_TERMS_OF_SALE:
      return set('termsOfSale', action.termsOfSale, state);
    case ACTION_TYPES.SET_CARRIER:
      return set('carrier', action.carrier, state);
    case ACTION_TYPES.SET_RECEIPT:
      return set('receipt', action.receipt, state);
    case ACTION_TYPES.SET_DEPARTURE:
      return set('departure', action.departure, state);
    case ACTION_TYPES.SET_ARRIVAL:
      return set('arrival', action.arrival, state);
    case ACTION_TYPES.SET_DELIVERY:
      return set('delivery', action.delivery, state);
    case ACTION_TYPES.SET_RECEIPT_DATE:
      return set('receiptDate', action.receiptDate, state);
    case ACTION_TYPES.SET_DEPARTURE_DATE:
      return set('departureDate', action.departureDate, state);
    case ACTION_TYPES.SET_ARRIVAL_DATE:
      return set('arrivalDate', action.arrivalDate, state);
    case ACTION_TYPES.SET_DELIVERY_DATE:
      return set('deliveryDate', action.deliveryDate, state);
    case ACTION_TYPES.TOGGLE_RECEIPT_STATUS:
      return set(
        'receiptStatus',
        state.receiptStatus === 'Actual' ? 'Expected' : 'Actual',
        state,
      );
    case ACTION_TYPES.TOGGLE_DEPARTURE_STATUS:
      return set(
        'departureStatus',
        state.departureStatus === 'Actual' ? 'Expected' : 'Actual',
        state,
      );
    case ACTION_TYPES.TOGGLE_ARRIVAL_STATUS:
      return set(
        'arrivalStatus',
        state.arrivalStatus === 'Actual' ? 'Expected' : 'Actual',
        state,
      );
    case ACTION_TYPES.TOGGLE_DELIVERY_STATUS:
      return set(
        'deliveryStatus',
        state.deliveryStatus === 'Actual' ? 'Expected' : 'Actual',
        state,
      );
    case ACTION_TYPES.SET_PRE_CARRIAGE_BY:
      return set('preCarriageBy', action.preCarriageBy, state);
    case ACTION_TYPES.SET_VESSEL:
      return set('vessel', action.vessel, state);
    default:
      return state;
  }
};
