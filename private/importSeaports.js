var SEAPORTS = [
  // Source: www.linescape.com
  // UNITED ARAB EMIRATES
  'AEAUH',
  'AEFJR',
  'AEJEA',
  'AEKLF',
  'AEKHL',
  'AESHJ',
  // ANTIGUA AND BARBUDA
  'AGANU',
  'AGSJO',
  // ANGUILLA
  'AIAXA',
  'AIBLP',
  // ALBANIA
  'ALDRZ',
  // ANGOLA
  'AOCAB',
  'AOLOB',
  'AOLAD',
  'AOMSZ',
  'AOSZA',
  // ARGENTINA
  'ARBHI',
  'ARBUE',
  'ARPUD',
  'ARPMY',
  'ARROS',
  'ARZAE',
  // AUSTRALIA
  'AUADL',
  'AUBNE',
  'AUDRW',
  'AUFRE',
  'AUGEX',
  'AUMEL',
  'AUNTL',
  'AUPTL',
  'AUPHE',
  'AUSYD',
  'AUTSV',
  // ARUBA
  'AWBAR',
  'AWORJ',
  // BARBADOS
  'BBBGI',
  // BANGLADESH
  'BDCGP',
  'BDMGL',
  // BELGIUM
  'BEANR',
  'BEZEE',
  // BULGARIA
  'BGVAR',
  // BAHRAIN
  'BHBAH',
  'BHKBS',
  'BHMIN',
  // BENIN
  'BJCOO',
  // BERMUDA
  'BMFPT',
  'BMBDA',
  // BRUNAI DARUSSALAM
  'BNMUA',
  // BONAIRE, SINT EUSTATIUS AND SABA
  'BQBON',
  // BRAZIL
  'BRFOR',
  'BRIBB',
  'BRIGI',
  'BRITJ',
  'BRIOA',
  'BRMCP',
  'BRMAO',
  'BRNAT',
  'BRNVT',
  'BRPNG',
  'BRPEC',
  'BRSPB',
  'BRRIO',
  'BRRIG',
  'BRSSA',
  'BRSSZ',
  'BRSFS',
  'BRSEP',
  'BRSUA',
  'BRVLC',
  'BRVIX',
  // BAHAMAS
  'BSFPO',
  'BSMHH',
  'BSNAS',
  // BELIZE
  'BZBZE',
  // CANADA
  'CANWP',
  'CAHAL',
  'CAMTR',
  'CAPRR',
  'CASAT',
  'CASJB',
  'CASQA',
  'CAVAN',
  'CAWVR',
  // CONGO
  'CGPNR',
  // CHILE
  'CLANF',
  'CLARI',
  'CLCHB',
  'CLCNL',
  'CLIQQ',
  'CLLQN',
  'CLPAG',
  'CLPUQ',
  'CLSAI',
  'CLSVE',
  'CLVAP',
  // CAMEROON
  'CMDLA',
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
  // COLOMBIA
  'COBAQ',
  'COBUN',
  'COCTG',
  'COADZ',
  'COSMR',
  'COTRB',
  // COSTA RICA
  'CRMOB',
  'CRPTC',
  'CRLIO',
  // CAPE VERDE
  'CVMIN',
  'CVRAI',
  // CUBA
  'CUMAR',
  'CUMOA',
  'CUSCU',
  // CURAÇAO
  'CWWIL',
  // CYPRUS
  'CYLMS',
  // GERMANY
  'DEBRE',
  'DEBRV',
  'DECUX',
  'DEHAM',
  'DEKEL',
  'DECKL',
  'DEWVN',
  // DJIBOUTI
  'DJJIB',
  // DENMARK
  'DKAAL',
  'DKAAR',
  'DKCPH',
  'DKEBJ',
  'DKFRC',
  'DKKAL',
  // DOMINICA
  'DMRSU',
  // DOMINICAN REPUBLIC
  'DOCAU',
  'DOMAN',
  'DOPOP',
  'DOHAI',
  // ALGERIA
  'DZALG',
  'DZBJA',
  'DZGHZ',
  'DZMOS',
  'DZORN',
  'DZSKI',
  // ECUADOR
  'ECGYE',
  'ECPBO',
  // EGYPT
  'EGAIS',
  'EGALY',
  'EGSUZ',
  'EGDAM',
  'EDEDK',
  'EGPSD',
  'EGPSW',
  'EGSOK',
  // SPAIN
  'ESALG',
  'ESLEI',
  'ESBCN',
  'ESBIO',
  'ESCAR',
  'EXCAS',
  'ESGIJ',
  'ESHUV',
  'ESACE',
  'ESLPA',
  'ESMPG',
  'ELMLN',
  'ESSCT',
  'ESSVQ',
  'ESTAR',
  'ESVLC',
  'ESVGO',
  // FINLAND
  'FIHEL',
  'FIKEM',
  'FIKOK',
  'FIKTK',
  'FIOLU',
  'FIRAU',
  'FIOUL',
  // FIJI
  'FJLTK',
  'FJSUV',
  // MICRONESIA
  'FMTKK',
  'FMKSA',
  'FMPNI',
  'FMYAP',
  // FAROE ISLANDS
  'FOKOL',
  'FORVK',
  'FOTHO',
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
  // GABON
  'GALBV',
  'GAPOG',
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
  // GRENADA
  'GDSTG',
  // GEORGIA
  'GEPTI',
  // FRENCH GUIANA
  'GFDDC',
  // GHANA
  'GHTKD',
  'GHTEM',
  // GIBRALTAR
  'GIGIB',
  // GREENLAND
  'GLJEG',
  'GLJAV',
  'GLSFJ',
  'GLJSU',
  'GLJNN',
  'GLJNS',
  'GLGOH',
  'GLJFR',
  'GLJJU',
  'GLJCH',
  'GLJHS',
  'GLAGM',
  // GAMBIA
  'GMBJL',
  // GUINEA
  'GNCKY',
  // GUADELOUPE
  'GPGUS',
  'GPPTP',
  // EQUATORIAL GUINEA
  'GQBSG',
  'GQSSG',
  // GREECE
  'GRPIR',
  'GRSKG',
  // GUATEMALA
  'GTPBR',
  'GRPRQ',
  'GTSTC',
  // GUAM
  'GUGUM',
  // GUINEA-BISSAU
  'GWOXB',
  // GUYANA
  'GYGEO',
  // HONG KONG
  'HKHKG',
  // HONDURAS
  'HNPCR',
  'HNSLO',
  // CROATIA
  'HRPLE',
  'HRRJK',
  'HRSPU',
  // HAITI
  'HTCAP',
  'HTLFF',
  'HTPAP',
  // INDONESIA
  'IDAMQ',
  'IDAMP',
  'IDBPM',
  'IDTKG',
  'IDBDJ',
  'IDBTH',
  'IDBLW',
  'IDBEN',
  'IDBKS',
  'IDBOA',
  'IDBIT',
  'IDGTO',
  'IDJKT',
  'IDDJJ',
  'IDKDI',
  'IDKID',
  'IDKUM',
  'IDKOE',
  'IDMAK',
  'IDMKW',
  'IDMPO',
  'IDMOF',
  'IDMES',
  'IDNAH',
  'IDPDG',
  'IDPLM',
  'IDPNJ',
  'IDPTL',
  'IDPWG',
  'IDPNK',
  'IDREO',
  'IDSRI',
  'IDSMQ',
  'IDSRG',
  'IDSLG',
  'IDSOQ',
  'IDSUB',
  'IDTPP',
  'IDTRK',
  'IDTLI',
  'IDWGP',
  // IRELAND
  'IEORK',
  'IEDUB',
  // ISRAEL
  'ILASH',
  'ILETH',
  'ILHFA',
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
  // IRAQ
  'IQUQR',
  // IRAN
  'IRBND',
  'IRBKM',
  'IRBSR',
  // ICELAND
  'ISAKU',
  'ISGRT',
  'ISHEL',
  'ISHUS',
  'ISISA',
  'ISRFJ',
  'ISREY',
  'ISSAU',
  'ISVES',
  // ITALY
  'ITAOI',
  'ITBRI',
  'ITCAG',
  'ITCTA',
  'ITCVV',
  'ITGOA',
  'ITGIT',
  'ITSPE',
  'ITLIV',
  'ITNAP',
  'ITRAN',
  'ITSAL',
  'ITTPS',
  'ITTRS',
  'ITVDL',
  'ITVCE',
  // JAMAICA
  'JMKIN',
  'JMMBJ',
  'JMSRI',
  // JORDAN
  'JOAQB',
  'JOAQJ',
  // JAPAN
  'JPAXT',
  'JPCHB',
  'JPFKY',
  'JPHKT',
  'JPHKD',
  'JPHIJ',
  'JPHIC',
  'JPHSM',
  'JPIMI',
  'JPICW',
  'JPIWK',
  'JPIYM',
  'JPKNZ',
  'JPKWS',
  'JPUKB',
  'JPKCZ',
  'JPMAI',
  'JPMYJ',
  'JPZAE',
  'JPMIZ',
  'JPMOJ',
  'JPNGO',
  'JPNAH',
  'JPNAO',
  'JPKIJ',
  'JPOIT',
  'JPOMZ',
  'JPOSA',
  'JPOTK',
  'JPOTR',
  'JPSMN',
  'JPSEN',
  'JPSDJ',
  'JPSDS',
  'JPSBS',
  'JPSMZ',
  'JPSHS',
  'JPTAK',
  'JPTKS',
  'JPTKY',
  'JPTYO',
  'JPTMK',
  'JPTOS',
  'JPUBJ',
  'JPYKK',
  'JPYOK',
  // KENYA
  'KEMBA',
  // CAMBODIA
  'KHKOS',
  'KHPNH',
  // KIRIBATI
  'KITRW',
  // COMOROS
  'KMYVA',
  'KMMUT',
  // SAINT KITTS AND NEVIS
  'KNBAS',
  'KNNEV',
  // NORTH KOREA
  'KPGEN',
  // SOUTH KOREA
  'KRPUS',
  'KRKUV',
  'KRKAN',
  'KRINC',
  'KRKWA',
  'KRMAS',
  'KRPTK',
  'KRUSN',
  // KUWAIT
  'KWSAA',
  'KWSWK',
  // CAYMAN ISLANDS
  'KYGEC',
  // LEBANON
  'LBBEY',
  // SAINT LUCIA
  'LCCAS',
  'LCVIF',
  // SRI LANKA
  'LKCMB',
  // LIBERIA
  'LRMLW',
  // LITHUANIA
  'LTKLJ',
  // LATVIA
  'LVRIX',
  // LIBYA
  'LYKHO',
  'LYKHM',
  'LYLMQ',
  'LYMRA',
  'LYTOB',
  'LYTIP',
  // MOROCCO
  'MAAGA',
  'MACAS',
  'MAPTM',
  'MATNG',
  // MONTENEGRO
  'MEBAR',
  // MADAGASCAR
  'MGDIE',
  'MGEHL',
  'MGMJN',
  'MGNOS',
  'MGTMM',
  'MGTOA',
  'MGTLE',
  'MGVOH',
  // MARSHALL ISLANDS
  'MHQEE',
  'MHKWA',
  'MHMAJ',
  // MYANMAR
  'MMRGN',
  // MARTINIQUE
  'MQFDF',
  // MAURITANIA
  'MRNDB',
  'MRNKC',
  // MONTSERRAT
  'MSPLY',
  // MALTA
  'MTMLA',
  'MTDIS',
  'MTMAR',
  // MAURITIUS
  'MUPLU',
  // MALDIVES
  'MVMLE',
  // MEXICO
  'MXATM',
  'MXESE',
  'MXLZC',
  'MXZLO',
  'MXMZT',
  'MXPGO',
  'MXPMS',
  'MXVER',
  // MALAYSIA
  'MYBTU',
  'MYBKI',
  'MYKUA',
  'MYKCH',
  'MYLBU',
  'MYLPK',
  'MYPGU',
  'MYPEN',
  'MYPKG',
  'MYSBW',
  'MYTMP',
  'MYTPP',
  'MYTWU',
  'MYWSP',
  // MOZAMBIQUE
  'MZBEW',
  'MZMPM',
  'MZMNC',
  'MZPOL',
  'MZUEL',
  // NAMIBIA
  'NALUD',
  'NAWVB',
  // NEW CALEDONIA
  'NCNOU',
  // NORFOLK ISLAND
  'NFNLK',
  // NIGERIA
  'NGAPP',
  'NGLOS',
  'NGONN',
  'NGTIN',
  // NICARAQUA
  'NICIO',
  'NIMGA',
  'NIRAM',
  // NETHERLANDS
  'NLAMS',
  'NLRTM',
  'NLVLI',
  // NORWAY
  'NOAES',
  'NOASV',
  'NOBGO',
  'NOBVK',
  'NODRM',
  'NOFRO',
  'NOFRK',
  'NOGLO',
  'NOHAU',
  'NOHVI',
  'NOHYR',
  'NOHUS',
  'NOIKR',
  'NOKRS',
  'NOLAR',
  'NOMAY',
  'NOMSS',
  'NOORK',
  'NOOSL',
  'NORVK',
  'NOSSJ',
  'NOSVG',
  'NOSKN',
  'NOSUN',
  'NOSVE',
  'NOTAE',
  // NEW ZEALAND
  'NZAKL',
  'NZLYT',
  'NZNPE',
  'NZNSN',
  'NZPOE',
  'NZTRG',
  'NZTIU',
  'NZWLG',
  // OMAN
  'OMSLL',
  'OMSOH',
  // PANAMA
  'PAPAM',
  'PABLB',
  'PAONX',
  'PACTB',
  'PAMIT',
  'PAPCN',
  'PAPTY',
  'PAPSA',
  'PACOL',
  // PERU
  'PECLL',
  'PEILQ',
  'PEMRI',
  'PEPAI',
  // FRENCH POLYNESIA
  'PFPPT',
  // PAPUA NEW GUINEA
  'PGKIM',
  'PGLAE',
  'PGLNV',
  'PGMAG',
  'PGPOM',
  'PGRAB',
  // PHILIPPINES
  'PHBTG',
  'PHCGY',
  'PHCEB',
  'PHDVO',
  'PHGES',
  'PHMNL',
  'PHMNN',
  'PHMNS',
  'PHSFS',
  // PAKISTAN
  'PKKHI',
  'PKKIA',
  'PKBQM',
  // POLAND
  'PLGDN',
  'PLGDY',
  'PLSWI',
  'PLSZZ',
  // PUERTO RICO
  'PRSJU',
  // PORTUGAL
  'PTAVE',
  'PTLEI',
  'PTLIS',
  'PTSET',
  'PTSIE',
  // PALAU
  'PWROR',
  // QATAR
  'QADOH',
  'QAHMD',
  // REUNION
  'RELPT',
  'REPDG',
  'REREU',
  // ROMANIA
  'ROCND',
  // RUSSIA
  'RUDYR',
  'RUEGV',
  'RUKGD',
  'RUKHO',
  'RUKOR',
  'RUKDT',
  'RUMAG',
  'RUNAC',
  'RUNJK',
  'RUNVS',
  'RUPKC',
  'RULED',
  'RUSKA',
  'RUTUA',
  'RUULU',
  'RUVVO',
  'RUVPY',
  // SAUDI ARABIA
  'SADMM',
  'SAJED',
  'SAJUB',
  'SAKAC',
  // SOLOMON ISLANDS
  'SBHIR',
  // SEYCHELLES
  'SCPOV',
  // SUDAN
  'SDPZU',
  // SWEDEN
  'SEAHU',
  'SEGVX',
  'SEGOT',
  'SEHAD',
  'SEHEL',
  'SEMMA',
  'SENRK',
  'SESTO',
  'SEUDD',
  'SEVAG',
  'SEWAL',
  // SINGAPORE
  'SGSIN',
  // SLOVENIA
  'SIKOP',
  // SIERRA LEONE
  'SLFNA',
  // SENEGAL
  'SNDKR',
  // SOMALIA
  'SOBBO',
  'SOMGQ',
  // SURINAME
  'SRPBM',
  // SAO TOME AND PRINCIPE
  'STTMS',
  // EL SALVADORE
  'SVAQJ',
  'SVSAL',
  // SINT MAARTEN
  'SXPHI',
  // SYRIA
  'SYLTK',
  'SYTTS',
  // TURKS AND CAICOS ISLANDS
  'TCGDT',
  'TCNCA',
  'TCPLS',
  'TCXSC',
  // TOGO
  'TGLFW',
  // THAILAND
  'THBKK',
  'THBMT',
  'THLCH',
  'THHKT',
  'THSCS',
  'THSIR',
  'THSGZ',
  'THSRI',
  // TIMOR-LESTE
  'TLDIL',
  // TUNISIA
  'TNBIZ',
  'TNLGN',
  'TNRAD',
  'TNSFA',
  'TNSUS',
  'TNTUN',
  // TONGA
  'TOTBU',
  'TOVAV',
  // TURKEY
  'TRALI',
  'TRAMR',
  'TRAYT',
  'TREYP',
  'TRGEB',
  'TRGEM',
  'TRHAY',
  'TRISK',
  'TRIST',
  'TRIZM',
  'TRIZT',
  'TRKMX',
  'TRMAD',
  'TRMPT',
  'TRMER',
  'TRNEM',
  'TRTEK',
  'TRYAR',
  // TRINIDAD AND TOBAGO
  'TTPTS',
  'TTPOS',
  // TUVALU
  'TVFUN',
  // TAIWAN
  'TWKHH',
  'TWKEL',
  'TWTXG',
  'TWTPE',
  // TANZANIA
  'TZDAR',
  'TZTGT',
  'TZZNZ',
  // UKRAINE
  'UAODS',
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
  // URUGUAY
  'UYMVD',
  'UYPTP',
  // VENEZUELA
  'VEEGU',
  'VEGUT',
  'VEGUA',
  'VEGUB',
  'VEIDM',
  'VELAG',
  'VEMAR',
  'VEMTV',
  'VEPBL',
  // VIRGIN ISLANDS, BRITISH
  'VGRAD',
  'VGTOV',
  'VGVIJ',
  // VIRGIN ISLANDS, UNITED STATES
  'VICHA',
  'VICTD',
  'VICZB',
  'VISTX',
  'VISTT',
  // VIETNAM
  'VNCLN',
  'VNTOT',
  'VNCMT',
  'VNCLI',
  'VNDAD',
  'VNHAP',
  'VNHPH',
  'VNSGN',
  'VNVIC',
  'VNPHU',
  'VNPHG',
  'VNUIH',
  'VNTCG',
  'VNVUT',
  // VANUATU
  'VUVLI',
  'VUSAN',
  // WALLIS AND FUTUNA
  'WFFUT',
  'WFWLS',
  // SAMOA
  'WSAPW',
  // YEMEN
  'YEADE',
  'YEHOD',
  'YEIBB',
  // MAYOTTE
  'YTLON',
  // SOUTH AFRICA
  'ZABHT',
  'ZACPT',
  'ZAZBA',
  'ZADUR',
  'ZAPLZ',
  'ZARCB',
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
