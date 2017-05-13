import { connect } from 'react-redux';

import EditQuote from './EditQuote.jsx';
import { loadQuote } from '../../state/actions/newQuoteActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onLoad: quote => dispatch(loadQuote(quote)),
});

const EditQuoteConnect    = connect(mapStateToProps, mapDispatchToProps)(EditQuote);

export default EditQuoteConnect;
