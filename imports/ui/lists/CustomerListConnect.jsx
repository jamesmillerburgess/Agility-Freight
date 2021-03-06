import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import CustomerList from './CustomerList.jsx';
import { setListFilter } from '../../state/actions/listActions';
import { loadCustomer } from '../../state/actions/customerActions';

const mapStateToProps = ({ list }) => {
  let filter = list.filter;
  if (
    !list.filter &&
    Meteor.user() &&
    Meteor.user().profile &&
    Meteor.user().profile.branch
  ) {
    filter = Meteor.user().profile.branch;
  }
  return { list: { filter } };
};

const mapDispatchToProps = dispatch => ({
  dispatchers: {
    setListFilter: filter => dispatch(setListFilter(filter)),
    loadCustomer: customer => dispatch(loadCustomer(customer)),
  },
});

const CustomerListConnect = connect(mapStateToProps, mapDispatchToProps)(
  CustomerList,
);

export default CustomerListConnect;
