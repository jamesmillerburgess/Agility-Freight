import React from 'react';
import Select from 'react-select';

import { currencyFormat } from '../formatters/numberFormatters';

const RateField = (props) => {
  const optionRenderer = (option) => {
    let rateValue = <div className="rate-option-na">no rate applicable</div>;
    if (option.rate) {
      rateValue = (
        <div className="rate-option-value">
          {currencyFormat(option.rate.unitPrice)}&nbsp;
          {option.rate.currency} /&nbsp;
          {option.rate.basis}
        </div>
      );
    }
    if (option.value === 'custom') {
      rateValue = <div />;
    }
    return (
      <div className="rate-option">
        <div className="rate-option-label">{option.label}</div>
        {rateValue}
      </div>
    );
  };

  const valueRenderer = value => (
    <div className="rate-option-label">{value.label}</div>
  );

  return (
    <Select
      className="rate-field"
      value={props.value || ''}
      options={[
        {
          value: 'custom',
          label: 'CUSTOM',
        },
        {
          value: 'supplier',
          label: 'SUPPLIER',
          rate: props.rates.supplier ? props.rates.supplier.rate : null,
        },
        {
          value: 'location',
          label: 'LOCATION',
          rate: props.rates.location ? props.rates.supplier.rate : null,
        },
        {
          value: 'country',
          label: 'COUNTRY',
          rate: props.rates.country ? props.rates.country.rate : null,
        },
        {
          value: 'global',
          label: 'GLOBAL',
          rate: props.rates.global ? props.rates.global.rate : null,
        },
      ]}
      clearable={false}
      searchable={false}
      arrowRenderer={() => null}
      optionRenderer={optionRenderer}
      valueRenderer={valueRenderer}
      placeholder=""
      onChange={props.onChange}
    />
  );
};

export default RateField;
