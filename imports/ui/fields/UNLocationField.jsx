import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Meteor } from 'meteor/meteor';

const UNLocationField = (props) => {
  const getOptions = (input, cb) => {
    Meteor.call(
      'unlocations.search',
      { search: input, id: props.value },
      (err, res) => {
        const options = res.map(opt => ({
          value: opt._id,
          label: opt.name,
          isSeaport: opt.isSeaport,
          isAirport: opt.isAirport,
          code: opt.countryCode + opt.locationCode,
        }));
        cb(null, { options });
      },
    );
  };

  const locationRenderer = option => (
    <div>
      {
        option.isSeaport ?
        (
          <span><span className="fa fa-fw fa-ship" />&nbsp;</span>
        ) : ''}
      {
        option.isAirport ?
        (
          <span><span className="fa fa-fw fa-plane" />&nbsp;</span>
        ) : ''}
      {option.label} – {option.code}
    </div>
  );

  return (
    <Select.Async
      value={props.value}
      loadOptions={getOptions}
      cache={false}
      filterOption={() => true}
      optionRenderer={locationRenderer}
      valueRenderer={locationRenderer}
      onChange={unLocation => props.onChange(unLocation)}
      autoload
      clearRenderer={() => null}
    />
  );
};

UNLocationField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

UNLocationField.defaultProps = {
  value: '',
};

export default UNLocationField;
