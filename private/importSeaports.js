var SEAPORTS = [
  // Source: www.linescape.com
  // BELGIUM
  'BEANR',
  'BEZEE',
  // CHINA
  'CNBAY',
  'CNCGU',
  'CNCWN',
  'CNDCB',
  'CNDLC',
  'CNFQG',
  'CNFOC',
  'CNGON',
  'CNHUA',
  'CNHMN',
  'CNJGY',
  'CNLYG',
  'CNNKG',
  'CNNSA',
  'CNNNP',
  'CNNGB',
  'CNQDL',
  'CNTAO',
  'CNQZH',
  'CNQZJ',
  'CNRZH',
  'CNSHA',
  'CNSWA',
  'CNSHK',
  'CNTZO',
  'CNTXG',
  'CNWNZ',
  'CNXMN',
  'CNYNT',
  'CNYTN',
  'CNYIK',
  'CNZHA',
  // GERMANY
  'DEBRE',
  'DEBRV',
  'DECUX',
  'DEHAM',
  'DEKEL',
  'DECKL',
  'DEWVN',
  // FRANCE
  'FRBAS',
  'FRBES',
  'FRDKK',
  'FRFOS',
  'FRLRH',
  'FRLEH',
  'FRMRS',
  'FRMTX',
  'FRPOV',
  'FRQGY',
  'FRRAD',
  'FRURO',
  'FRSET',
  // UNITED KINDOM
  'GBAVO',
  'GBBEL',
  'GBBRS',
  'GBCDF',
  'GBDVR',
  'GBFXT',
  'GBGRG',
  'GBGRK',
  'GBHRW',
  'GBIMM',
  'GBIPS',
  'GBLIV',
  'GBLGP',
  'GBPRU',
  'GBPME',
  'GBSCR',
  'GBSSH',
  'GBSOU',
  'GBTEE',
  'GBTIL',
  // INDIA
  'INMAA',
  'INCOK',
  'INHAL',
  'INHZA',
  'INKAT',
  'INCCU',
  'INKRI',
  'INIXE',
  'INMRM',
  'INBOM',
  'INMUN',
  'INNSA',
  'INPAV',
  'INTUT',
  'INVTZ',
  // NETHERLANDS
  'NLAMS',
  'NLRTM',
  'NLVLI',
  // SINGAPORE
  'SGSIN',
  // UNITED STATES
  'USKQA',
  'USANC',
  'USBAL',
  'USBPT',
  'USBOS',
  'USBOY',
  'USCHS',
  'USCHT',
  'USCRP',
  'USDUT',
  'USPAE',
  'USFPO',
  'USGPT',
  'USITO',
  'USHNL',
  'USHOU',
  'USJAX',
  'USOGG',
  'USKWH',
  'USADQ',
  'USLGB',
  'USMIA',
  'USMOB',
  'USMRH',
  'USNIJ',
  'USHVN',
  'USMSY',
  'USNYC',
  'USEWR',
  'USORF',
  'USOAK',
  'USPAB',
  'USPFN',
  'USPHL',
  'USPEB',
  'USPEF',
  'USNTD',
  'USPWM',
  'USPTM',
  'USSPQ',
  'USSAV',
  'USSEA',
  'USSUT',
  'USTIW',
  'USTPA',
  'USVAN',
  'USILG',
  'USILM',
];

var db = connect('localhost:3001/meteor');

SEAPORTS.forEach(function (seaport) {
  var seaportLocation = db.UNLocations.findOne({
    countryCode: seaport.slice(0, 2),
    locationCode: seaport.slice(2, 5),
  });
  if (seaportLocation) {
    seaportLocation._id = ObjectId().str;
    seaportLocation.isSeaport = true;
    db.UNLocations.insert(seaportLocation);
  } else {
    printjson('Invalid location code: ' + seaport);
  }
});