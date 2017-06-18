export const APIGlobals = {
  incotermOptions: ['CFR', 'CIF', 'CIP', 'CPT', 'DAF', 'DAP', 'DAT', 'DDP', 'DDU', 'EXW', 'FAS', 'FCA', 'FOB', ''],
  mblTypeOptions: ['Waybill', 'Original', ''],
  mblTermsOptions: ['Prepaid', 'Collect', ''],
  seaquestTypeOptions: ['Original', 'Express', ''],
  originHaulageByOptions: ['Agility', 'Customer', ''],
  originCustomsByOptions: ['Agility', 'Customer', ''],
  destinationHaulageByOptions: ['Agility', 'Customer', ''],
  destinationCustomsByOptions: ['Agility', 'Customer', ''],
  volumetricRatioOptions: ['1:1', '1:2', '1:3', '1:4', '1:5', '1:6'],
  measurementSystemOptions: ['Metric', 'Imperial'],
  directionOptions: ['Export', 'Import'],
  modeOptions: ['Ocean', 'Air', 'Road'],
  airServiceOptions: ['Premier', 'Expedited', 'Express', ''],
  oceanServiceOptions: ['FCL', 'LCL', 'Breakbulk', ''],
  roadServiceOptions: ['FTL', 'LTL', ''],

  // Common
  currencyOptions: [
    { value: 'AED', label: 'AED' },
    { value: 'AFN', label: 'AFN' },
    { value: 'ALL', label: 'ALL' },
    { value: 'AMD', label: 'AMD' },
    { value: 'ANG', label: 'ANG' },
    { value: 'AOA', label: 'AOA' },
    { value: 'ARS', label: 'ARS' },
    { value: 'AUD', label: 'AUD' },
    { value: 'AZN', label: 'AZN' },
    { value: 'BAM', label: 'BAM' },
    { value: 'BBD', label: 'BBD' },
    { value: 'BDT', label: 'BDT' },
    { value: 'BGN', label: 'BGN' },
    { value: 'BHD', label: 'BHD' },
    { value: 'BIF', label: 'BIF' },
    { value: 'BMD', label: 'BMD' },
    { value: 'BND', label: 'BND' },
    { value: 'BOB', label: 'BOB' },
    { value: 'BRL', label: 'BRL' },
    { value: 'BSD', label: 'BSD' },
    { value: 'BTN', label: 'BTN' },
    { value: 'BWP', label: 'BWP' },
    { value: 'BYN', label: 'BYN' },
    { value: 'BZD', label: 'BZD' },
    { value: 'CAD', label: 'CAD' },
    { value: 'CDF', label: 'CDF' },
    { value: 'CHF', label: 'CHF' },
    { value: 'CLP', label: 'CLP' },
    { value: 'CNY', label: 'CNY' },
    { value: 'COP', label: 'COP' },
    { value: 'CRC', label: 'CRC' },
    { value: 'CUC', label: 'CUC' },
    { value: 'CUP', label: 'CUP' },
    { value: 'CVE', label: 'CVE' },
    { value: 'CZK', label: 'CZK' },
    { value: 'DJF', label: 'DJF' },
    { value: 'DKK', label: 'DKK' },
    { value: 'DOP', label: 'DOP' },
    { value: 'DZD', label: 'DZD' },
    { value: 'EGP', label: 'EGP' },
    { value: 'ERN', label: 'ERN' },
    { value: 'ETB', label: 'ETB' },
    { value: 'EUR', label: 'EUR' },
    { value: 'FJD', label: 'FJD' },
    { value: 'FKP', label: 'FKP' },
    { value: 'GBP', label: 'GBP' },
    { value: 'GEL', label: 'GEL' },
    { value: 'GGP', label: 'GGP' },
    { value: 'GHS', label: 'GHS' },
    { value: 'GIP', label: 'GIP' },
    { value: 'GMD', label: 'GMD' },
    { value: 'GNF', label: 'GNF' },
    { value: 'GTQ', label: 'GTQ' },
    { value: 'GYD', label: 'GYD' },
    { value: 'HKD', label: 'HKD' },
    { value: 'HNL', label: 'HNL' },
    { value: 'HRK', label: 'HRK' },
    { value: 'HTG', label: 'HTG' },
    { value: 'HUF', label: 'HUF' },
    { value: 'IDR', label: 'IDR' },
    { value: 'ILS', label: 'ILS' },
    { value: 'IMP', label: 'IMP' },
    { value: 'INR', label: 'INR' },
    { value: 'IQD', label: 'IQD' },
    { value: 'IRR', label: 'IRR' },
    { value: 'ISK', label: 'ISK' },
    { value: 'JEP', label: 'JEP' },
    { value: 'JMD', label: 'JMD' },
    { value: 'JOD', label: 'JOD' },
    { value: 'JPY', label: 'JPY' },
    { value: 'KES', label: 'KES' },
    { value: 'KGS', label: 'KGS' },
    { value: 'KHR', label: 'KHR' },
    { value: 'KMF', label: 'KMF' },
    { value: 'KPW', label: 'KPW' },
    { value: 'KRW', label: 'KRW' },
    { value: 'KWD', label: 'KWD' },
    { value: 'KYD', label: 'KYD' },
    { value: 'KZT', label: 'KZT' },
    { value: 'LAK', label: 'LAK' },
    { value: 'LBP', label: 'LBP' },
    { value: 'LKR', label: 'LKR' },
    { value: 'LRD', label: 'LRD' },
    { value: 'LSL', label: 'LSL' },
    { value: 'LYD', label: 'LYD' },
    { value: 'MAD', label: 'MAD' },
    { value: 'MDL', label: 'MDL' },
    { value: 'MGA', label: 'MGA' },
    { value: 'MKD', label: 'MKD' },
    { value: 'MMK', label: 'MMK' },
    { value: 'MNT', label: 'MNT' },
    { value: 'MOP', label: 'MOP' },
    { value: 'MRO', label: 'MRO' },
    { value: 'MUR', label: 'MUR' },
    { value: 'MVR', label: 'MVR' },
    { value: 'MWK', label: 'MWK' },
    { value: 'MXN', label: 'MXN' },
    { value: 'MYR', label: 'MYR' },
    { value: 'MZN', label: 'MZN' },
    { value: 'NAD', label: 'NAD' },
    { value: 'NGN', label: 'NGN' },
    { value: 'NIO', label: 'NIO' },
    { value: 'NOK', label: 'NOK' },
    { value: 'NPR', label: 'NPR' },
    { value: 'NZD', label: 'NZD' },
    { value: 'OMR', label: 'OMR' },
    { value: 'PAB', label: 'PAB' },
    { value: 'PEN', label: 'PEN' },
    { value: 'PGK', label: 'PGK' },
    { value: 'PHP', label: 'PHP' },
    { value: 'PKR', label: 'PKR' },
    { value: 'PLN', label: 'PLN' },
    { value: 'PYG', label: 'PYG' },
    { value: 'QAR', label: 'QAR' },
    { value: 'RON', label: 'RON' },
    { value: 'RSD', label: 'RSD' },
    { value: 'RUB', label: 'RUB' },
    { value: 'RWF', label: 'RWF' },
    { value: 'SAR', label: 'SAR' },
    { value: 'SBD', label: 'SBD' },
    { value: 'SCR', label: 'SCR' },
    { value: 'SDG', label: 'SDG' },
    { value: 'SEK', label: 'SEK' },
    { value: 'SGD', label: 'SGD' },
    { value: 'SHP', label: 'SHP' },
    { value: 'SLL', label: 'SLL' },
    { value: 'SOS', label: 'SOS' },
    { value: 'SPL', label: 'SPL' },
    { value: 'SRD', label: 'SRD' },
    { value: 'STD', label: 'STD' },
    { value: 'SVC', label: 'SVC' },
    { value: 'SYP', label: 'SYP' },
    { value: 'SZL', label: 'SZL' },
    { value: 'THB', label: 'THB' },
    { value: 'TJS', label: 'TJS' },
    { value: 'TMT', label: 'TMT' },
    { value: 'TND', label: 'TND' },
    { value: 'TOP', label: 'TOP' },
    { value: 'TRY', label: 'TRY' },
    { value: 'TTD', label: 'TTD' },
    { value: 'TVD', label: 'TVD' },
    { value: 'TWD', label: 'TWD' },
    { value: 'TZS', label: 'TZS' },
    { value: 'UAH', label: 'UAH' },
    { value: 'UGX', label: 'UGX' },
    { value: 'USD', label: 'USD' },
    { value: 'UYU', label: 'UYU' },
    { value: 'UZS', label: 'UZS' },
    { value: 'VEF', label: 'VEF' },
    { value: 'VND', label: 'VND' },
    { value: 'VUV', label: 'VUV' },
    { value: 'WST', label: 'WST' },
    { value: 'XAF', label: 'XAF' },
    { value: 'XCD', label: 'XCD' },
    { value: 'XDR', label: 'XDR' },
    { value: 'XOF', label: 'XOF' },
    { value: 'XPF', label: 'XPF' },
    { value: 'YER', label: 'YER' },
    { value: 'ZAR', label: 'ZAR' },
    { value: 'ZMW', label: 'ZMW' },
    { value: 'ZWD', label: 'ZWD' },
  ],
  chargeUOMOptions: ['kg', 'cbm', 'lb', 'cu ft', 'km', 'mile', 'container', ''],

  // Cargo
  packageTypeOptions: [
    'Packages',
    'Boxes',
    'Cartons',
    'Bags',
    'Bales',
    'Bolts',
    'Bottles',
    '',
  ],

  // Quotes
  quoteStatusOptions: ['Issued', 'Expired', 'Draft', 'Canceled'],
  quoteTypeOptions: ['Single Route', 'Multi Route'],
  quoteRateTypeOptions: ['Rated', 'Itemized'],

  // Shipments
  shipmentStatusOptions: ['Received', 'Booked', 'Departed', 'Arrived', 'Released', 'Delivered', 'Closed', 'Canceled'],

  // Invoices
  invoiceStatusOptions: ['Issued', 'Draft', 'Canceled'],

  // UNLocations
  unLocationsMaxResults: 10,

  // TEMP!!!!
  cityOptions: ['Shanghai', 'Basel', 'Seoul', ''],
  airportOptions: ['Shanghai Hongquiao - SHA', 'Shanghai Pudong - PVG', 'Frankfurt - FRA', 'Basel Mulhouse - BSL'],
  portOptions: ['Rotterdam - NLROT', 'Hamburg - DEHAM', 'Singapore - SGSIN', ''],
  indiaPortOptions: ['INNSA', 'INMAA', 'INBOM'],
  ukPortOptions: ['GBFXT', 'GBSOU', 'GBLGW'],

  // Functions
  noop: () => null,
};
