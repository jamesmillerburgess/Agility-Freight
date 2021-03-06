import { connect } from 'react-redux';

import EditBranch from './EditBranch.jsx';
import * as actionCreators from '../../state/actions/branchActions';

import { Branches } from '../../api/branch/branchCollection';

const mapStateToProps = ({ branch }) => ({ branch });

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.editMode) {
    const branch = Branches.findOne(ownProps.match.params.branchId);
    dispatch(actionCreators.loadBranch(branch));
  }
  return {
    dispatchers: {
      loadBranch: customer =>
        dispatch(actionCreators.loadBranch(customer)),
      setBranchName: name =>
        dispatch(actionCreators.setBranchName(name)),
      setBranchCode: code =>
        dispatch(actionCreators.setBranchCode(code)),
    },
  };
};

const EditBranchConnect =
        connect(mapStateToProps, mapDispatchToProps)(EditBranch);

export default EditBranchConnect;
