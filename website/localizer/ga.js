function L(s, gloss){
  if(s=="only") return function(s){
    return s+" amháin";
  };
  if(s=="READ-ONLY") return "LÉAMH AMHÁIN";
  if(s=="Editing") return "Eagarthóireacht";
  if(s=="Dublin City University") return "Ollscoil Chathair Bhaile Átha Cliath";
  if(s=="Log out") return "Logáil amach";
  if(s=="Change your password") return "Athraigh do phasfhocal";
  if(s=="Registered user login") return "Úsáideoirí cláraithe";
  if(s=="Get an account") return "Cruthaigh cuntas duit féin";
  if(s=="Forgot your password?") return "Pasfhocal dearmadta?";
  if(s=="E-mail address") return "Seoladh ríomhphoist";
  if(s=="Password") return "Pasfhocal";
  if(s=="Log in") return "Logáil isteach";
  if(s=="Your termbases") return "Do chuid cnuasach";
  if(s=="You have no termbases yet.") return "Níl cnuasach ar bith agat go fóill.";
  if(s=="Create a termbase") return "Cruthaigh cnuasach";
  if(s=="Administration") return "Riarachán";
  if(s=="Users") return "Úsáideoirí";
  if(s=="Termbases") return "Cnuasaigh";
  if(s=="smart search") return "cuardach cliste";

  if(s=="complete term") return "téarma iomlán";
  if(s=="start of term") return "tús téarma";
  if(s=="end of term") return "deireadh téarma";
  if(s=="any part of term") return "cuid ar bith de théarma";
  if(s=="any part except start or end") return "cuid ar bith seachas tús nó deireadh";

  if(s=="search in all languages") return "cuardaigh i ngach teanga";
  if(s=="Configuration") return "Cumrú";
  if(s=="ADMIN") return "RIAR";
  if(s=="TRM") return "TRM";
  if(s=="DOM") return "RÉIM";
  if(s=="DEF") return "SAIN";
  if(s=="XMPL") return "SMPL"
  if(s=="CHECKING STATUS") return "STÁDAS SEICEÁLA";
  if(s=="PUBLISHING STATUS") return "STÁDAS FOILSITHE";
  if(s=="TERMS") return "TÉARMAÍ";
  if(s=="DOMAINS") return "RÉIMSÍ";
  if(s=="term") return "téarma";
  if(s=="clarification") return "soiléiriú";
  if(s=="acceptability") return "inghlacthacht";
  if(s=="source") return "foinse";
  if(s=="inflected form") return "foirm infhillte";
  if(s=="annotation") return "nod";
  if(s=="domain") return "réimse";
  if(s=="subdomain") return "foréimse";
  if(s=="part of speech") return "roinn chainte";
  if(s=="inflection") return "infhilleadh";
  if(s=="language of origin") return "teanga dhúchais";
  if(s=="symbol") return "siombail";
  if(s=="trademark") return "trádmharc";
  if(s=="registered trademark") return "trádmharc cláraithe";
  if(s=="proper noun") return "ainm dílis";
  if(s=="formatting") return "formáidiú";
  if(s=="italic") return "cló iodálach";
  if(s=="none" && gloss=="no subdomain") return "gan foréimse";
  if(s=="Created") return "Cruthaithe";
  if(s=="Changed") return "Athraithe";
  if(s=="Deleted") return "Scriosta";
  if(s=="Bulk-deleted") return "Baisc-scriosta";
  if(s=="while uploading") return "le linn uaslódála";
  if(s=="By") return "Ag";
  if(s=="When") return "Cathain";
  if(s=="any checking status") return "stádas seiceála ar bith";
  if(s=="any publishing status") return "stádas foilsithe ar bith";
  if(s=="any language") return "teanga ar bith";
  if(s=="any acceptabilty or no acceptability") return "inghlacthacht ar bith nó gan inghlacthacht";
  if(s=="any acceptabilty") return "inghlacthacht ar bith";
  if(s=="no acceptability") return "gan inghlacthacht";
  if(s=="any domain or no domain") return "réimse ar bith nó gan réimse";
  if(s=="any domain") return "réimse ar bith";
  if(s=="no domain") return "gan réimse";
  if(s=="any subdomain or no subdomain") return "foréimse ar bith nó gan foréimse";
  if(s=="any subdomain") return "foréimse ar bith";
  if(s=="no subdomain") return "gan foréimse";
  if(s=="LAST MAJOR UPDATE") return "MÓR-ATHRÚ DEIREANACH";
  if(s=="set to today") return "athraigh go inniu";
  if(s=="Invalid e-mail address or password.") return "Seoladh ríomhphoist mícheart nó pasfhocal mícheart.";
  if(s=="INTR") return "INTR";
  if(s=="COLL") return "BAIL";
  if(s=="INTROS") return "INTREOIR";
  if(s=="DEFINITIONS") return "SAINMHÍNITHE";
  if(s=="EXAMPLES") return "SAMPLAÍ ÚSÁIDE";
  if(s=="COLLECTIONS") return "BAILIÚCHÁIN";
  if(s=="definition") return "sainmhíniú";
  if(s=="example") return "sampla úsáide";
  if(s=="sentence") return "abairt";
  if(s=="collection") return "bailiúchán";
  if(s=="any collection or no collection") return "bailiúchán ar bith nó gan bailiúchán";
  if(s=="any collection") return "bailiúchán ar bith";
  if(s=="no collection") return "gan bailiúchán";
  if(s=="comments") return "nótaí tráchta";
  if(s=="with or without comments") return "le nó gan nótaí tráchta";
  if(s=="with comments") return "le nótaí tráchta";
  if(s=="without comments") return "gan nótaí tráchta";
  if(s=="my comments") return "mo chuid nótaí tráchta";
  if(s=="with or without my comments") return "le nó gan nótaí tráchta uaimse";
  if(s=="with my comments") return "le nótaí tráchta uaimse";
  if(s=="without my comments") return "gan nótaí tráchta uaimse";
  if(s=="other people's comments") return "nótaí tráchta daoine eile";
  if(s=="with or without other people's comments") return "le nó gan nótaí tráchta ó dhaoine eile";
  if(s=="with other people's comments") return "le nótaí tráchta ó dhaoine eile";
  if(s=="without other people's comments") return "gan nótaí tráchta ó dhaoine eile";
  if(s=="EXTRANET") return "EISLÍON";
  if(s=="EXT") return "EIS";
  if(s=="EXTRANETS") return "EISLÍONTA";
  if(s=="extranet") return "eislíon";
  if(s=="any extranet or no extranet") return "eislíon ar bith nó gan eislíon";
  if(s=="any extranet") return "eislíon ar bith";
  if(s=="no extranet") return "gan eislíon";
  if(s=="sorting language") return "teanga sortála";
  if(s=="Create mutual cross-references") return "Cruthaigh crostagairtí eatarthu";
  if(s=="Remove mutual cross-references") return "Bris crostagairtí eatarthu";
  if(s=="Merge into a single entry") return "Cumaisc go hiontráil amháin";
  if(s=="SEE ALSO") return "FÉACH FREISIN";
  if(s=="add to worklist") return "cuir ar liosta oibre";
  if(s=="Domains") return "Réimsí";
  if(s=="Part-of-speech labels") return "Ranna cainte";
  if(s=="Inflection labels") return "Lipéid infhillte";
  if(s=="Acceptability labels") return "Lipéid inghacthachta";
  if(s=="Sources") return "Foinsí";
  if(s=="Collections") return "Bailiúcháin";
  if(s=="Tags") return "Clibeanna";
  if(s=="Extranets") return "Eislíonta";
  if(s=="Name and blurb") return "Ainm agus blurba";
  if(s=="Features") return "Gnéithe an bhogearra";
  if(s=="Languages") return "Teangacha";
  if(s=="Publishing") return "Foilsiú";
  if(s=="Change the termbase's URL") return "Athraigh URL an chnuasaigh";
  if(s=="Delete the termbase") return "Scrios an cnuasach";
  if(s=="TITLE") return "TEIDEAL";
  if(s=="SUBDOMAINS") return "FO-RÉIMSÍ";
  if(s=="abbreviation") return "giorrúchán";
  if(s=="LANGUAGES") return "TEANGACHA";
  if(s=="select all") return "roghnaigh cách";
  if(s=="unselect all") return "díroghaigh cách";
  if(s=="PRIORITY") return "TOSAÍOCHT";
  if(s=="high") return "ard";
  if(s=="medium") return "meánach";
  if(s=="low") return "íseal";
  if(s=="USERS") return "ÚSÁIDEOIRÍ";
  if(s=="e-mail address") return "seoladh ríomhphoist";
  if(s=="user") return "úsáideoir";
  if(s=="Alphabetical order") return "Ord aibítre";
  if(s=="Similar terms (click to insert)") return "Téarmaí cosúla (cliceáil lena gcur isteach)";
  if(s=="Other entries that share this term") return "Iontrálacha eile a bhfuil an téarma seo iontu";
  if(s=="stop sharing") return "dícheangail";
  if(s=="Change checking status to") return "Athraigh stádas seiceála go";
  if(s=="Change publishing status to") return "Athraigh stádas foilsithe go";
  if(s=="Add to extranet") return "Cuir ar an eislíon";
  if(s=="Remove from extranet") return "Bain den eislíon";
  if(s=="checked") return "seiceáilte";
  if(s=="not checked") return "neamhsheiceáilte";
  if(s=="publishable") return "infhoilsithe";
  if(s=="hidden") return "i bhfolach";
  if(s=="CHECKED") return "SEICEÁILTE";
  if(s=="NOT CHECKED") return "NEAMHSHEICEÁILTE";
  if(s=="PUBLISHABLE") return "INFHOILSITHE";
  if(s=="HIDDEN") return "I BHFOLACH";
  if(s=="non-essential") return "neamhriachtanach";
  if(s=="STATUS") return "STÁDAS";
  if(s=="live") return "beo";
  if(s=="not live") return "neamhbheo";
  if(s=="any clarification or no clarification") return "soiléiriú ar bith nó gan soiléiriú";
  if(s=="any clarification") return "soiléiriú ar bith";
  if(s=="no clarification") return "gan soiléiriú";
  if(s=="clarification containing...") return "soiléiriú ina bhfuil...";
  if(s=="any intro or no intro") return "intreoir ar bith nó gan intreoir";
  if(s=="any intro") return "intreoir ar bith";
  if(s=="no intro") return "gan intreoir";
  if(s=="intro containing...") return "intreoir ina bhfuil...";
  if(s=="any definition or no definition") return "sainmhíniú ar bith nó gan sainmhíniú";
  if(s=="any definition") return "sainmhíniú ar bith";
  if(s=="no definition") return "gan sainmhíniú";
  if(s=="definition containing...") return "sainmhíniú ina bhfuil...";
  if(s=="any example or no example") return "sampla ar bith nó gan sampla";
  if(s=="any example") return "sampla ar bith";
  if(s=="no example") return "gan sampla";
  if(s=="example containing...") return "sampla ina bhfuil...";
  if(s=="Automatic changes") return "Athruithe uathoibríocha";
  if(s=="NAME") return "AINM";
  if(s=="BLURB") return "BLURBA";
  if(s=="level") return "leibhéal";
  if(s=="reader") return "léitheoir";
  if(s=="editor") return "eagarthóir";
  if(s=="creator") return "cruthaitheoir";
  if(s=="administrator") return "riarthóir";
  if(s=="configurator") return "cumraitheoir";
  if(s=="no change") return "gan athrú";
  if(s=="change to 'not checked'") return "athraigh go 'neamhsheiceáilte'";
  if(s=="change to 'hidden'") return "athraigh go 'i bhfolach'";
  if(s=="change to 'not checked' and 'hidden'") return "athraigh go 'neamhsheiceáilte' and 'i bhfolach'";
  if(s=="LAST SEEN") return "CUAIRT DHEIREANACH";
  if(s=="NEVER") return "NÍ RAIBH RIAMH";
  if(s=="No termbases") return "Gan cnuasach ar bith";
  if(s=="language") return "teanga";
  if(s=="major") return "príomhtheanga";
  if(s=="minor") return "teanga chúnta";
  if(s=="role") return "ról";
  if(s=="title") return "teideal";
  if(s=="ACCESS LEVEL") return "LEIBHÉAL ROCHTANA";
  if(s=="LICENCE") return "CEADÚNAS";
  if(s=="private") return "príobháideach";
  if(s=="public") return "poiblí";
  if(s=="trigger_dateStampChange") return "athraíodh dátstampa na hiontrála";
  if(s=="trigger_domainAdd") return "ceanglaíodh réimse leis an iontráil";
  if(s=="trigger_domainRemove") return "dícheanglaíodh réimse den iontráil";
  if(s=="trigger_domainReorder") return "athraíodh ord na réimsí san iontráil";
  if(s=="trigger_domainChange") return "athraíodh cén réimse atá ceangailte leis an iontráil";
  if(s=="trigger_subdomainChange") return "athraíodh cén foréimse atá ceangailte leis an iontráil";
  if(s=="trigger_desigAdd") return "cuireadh téarma leis an iontráil";
  if(s=="trigger_desigRemove") return "baineadh téarma den iontráil";
  if(s=="trigger_desigReorder") return "athraíodh ord na dtéarmaí";
  if(s=="trigger_desigClarifChange") return "athraíodh soiléirú téarma";
  if(s=="trigger_desigAcceptChange") return "athraíodh inghlacthacht téarma";
  if(s=="trigger_termLangChange") return "athraíodh teanga téarma";
  if(s=="trigger_termWordingChange") return "athraíodh foclaíocht téarma";
  if(s=="trigger_termInflectAdd") return "cuireadh foirm infhillte le téarma";
  if(s=="trigger_termInflectRemove") return "baineadh foirm infhillte de théarma";
  if(s=="trigger_termInflectReorder") return "athraíodh ord na bhfoirmeacha infhillte";
  if(s=="trigger_termInflectLabelChange") return "athraíodh lipéad foirme infhilte";
  if(s=="trigger_termInflectTextChange") return "athraíodh foclaíocht foirme infhilte";
  if(s=="trigger_termAnnotAdd") return "cuireadh nod le téarma";
  if(s=="trigger_termAnnotRemove") return "baineadh nod de théarma";
  if(s=="trigger_termAnnotReorder") return "athraíodh ord na noda i dtéarma";
  if(s=="trigger_termAnnotPositionChange") return "athraíodh suíomh an noda i dtéarma";
  if(s=="trigger_termAnnotLabelChange") return "athraíodh lipéad noda";
  if(s=="trigger_introChange") return "athraíodh intreoir na hiontrála";
  if(s=="trigger_definitionAdd") return "cuireadh sainmhíniú leis an iontráil";
  if(s=="trigger_definitionRemove") return "baineadh sainmhíniú den iontráil";
  if(s=="trigger_definitionReorder") return "athraíodh ord na sainmhínithe san iontráil";
  if(s=="trigger_definitionTextChange") return "athraíodh foclaíocht sainmhínithe";
  if(s=="trigger_exampleAdd") return "cuireadh sampla úsáide leis an iontráil";
  if(s=="trigger_exampleRemove") return "baineadh sampla úsáide den iontráil";
  if(s=="trigger_exampleReorder") return "athraíodh ord na samplaí úsáide";
  if(s=="trigger_exampleTextAdd") return "cuireadh abairt le sampla úsáide";
  if(s=="trigger_exampleTextRemove") return "baineadh abairt de shampla úsáide";
  if(s=="trigger_exampleTextReorder") return "athraíodh ord na n-abairtí i sampla úsáide";
  if(s=="trigger_exampleTextChange") return "athraíodh foclaíocht abairte i sampla úsáide";
  if(s=="trigger_collectionAdd") return "ceanglaíodh bailiúchán leis an iontráil";
  if(s=="trigger_collectionRemove") return "dícheanglaíodh bailiúchán den iontráil";
  if(s=="trigger_collectionReorder") return "athraíodh ord na mbailiúchán san iontráil";
  if(s=="trigger_collectionChange") return "athraíodh cén bailiúchán atá ceangailte leis an iontráil";
  if(s=="trigger_extranetAdd") return "ceanglaíodh eislíon leis an iontráil";
  if(s=="trigger_extranetRemove") return "dícheanglaíodh eislíon den iontráil";
  if(s=="trigger_extranetReorder") return "athraíodh ord na n-eislíon san iontráil";
  if(s=="trigger_extranetChange") return "athraíodh cén t-eislíon atá ceangailte leis an iontráil";
  if(s=="trigger_sourceAdd") return "ceanglaíodh foinse le rud san iontráil";
  if(s=="trigger_sourceRemove") return "dícheanglaíodh foinse de rud san iontráil";
  if(s=="trigger_sourceReorder") return "athraíodh ord na bhfoinsí faoi rud san iontráil";
  if(s=="trigger_sourceChange") return "athraíodh cén fhoinse atá ceangailte rud san iontráil";
  if(s=="trigger_nonessentialChange") return "athraíodh neamhriachtanacht ruda san iontráil";
  if(s=="(blank)") return "(folamh)";
  if(s=="Simple Multilingual Termbase") return "Cnuasach Simplí Ilteangach";
  if(s=="Simple Bilingual Termbase") return "Cnuasach Simplí Dátheangach";
  if(s=="Simple Monolingual Termbase") return "Cnuasach Simplí Aonteangach";
  if(s=="Enter a human-readable title such as \"My Dictionary of Sports Terms\". You will be able to change this later.") return "Cuir isteach teideal a bheadh sothuigthe don duine donna, mar shampla \"Foclóir Mór Téarmaí Spóirt\". Beidh tú ábalta é seo a athrú níos déanaí.";
  if(s=="This will be your termbase's address on the web. You will be able to change this later.") return "Seo seoladh idirlín do chnuasaigh. Beidh tú ábalta é seo a athrú níos déanaí.";
  if(s=="You can choose a template here to start you off. Each template comes with a few sample entries. You will be able to change or delete those and to customize the template.") return "Roghnaigh teimpléad anseo chun tús a chur le do chnuasach. I ngach teimpléad tá cúpla iontráil shamplach. Beidh tú ábalta iad a athrú nó iad a scrios, agus beidh tú ábalta an teimpléad a chur in oiriúint duit féin.";
  if(s=="Your termbase is ready.") return "Tá do chnuasach réidh.";
  if(s=="TERM OF THE DAY") return "TÉARMA AN LAE";
  if(s=="set to next available date") return "athraigh go dtí an chéad dáta eile atá saor";
  if(s=="Display from") return "Ar taispeáint ó";
  if(s=="Display until") return "Ar taispeáint go";
  if(s=="News and announcements") return "Fógraí nuachta";
  if(s=="Create your account") return "Cuntas a chruthú";
  if(s=="Reset your password") return "Pasfhocal a athshocrú";
  if(s=="Terminologue signup") return "Cuntas a chruthú in Terminologue";
  if(s=="Please follow the link below to create your Terminologue account:") return "Cliceáil an nasc thíos, le do thoil, chun do chuntas a chruthú in Terminologue:";
  if(s=="Terminologue password reset") return "Pasfhocal a athshocrú in Terminologue";
  if(s=="Please follow the link below to reset your Terminologue password:") return "Cliceáil an nasc thíos, le do thoil, chun do phasfhocal a athshocrú in Terminologue:";
  if(s=="This page is only available in English.") return "Ár leithscéal, tá an leathanach seo ar fáil i mBéarla amháin.";
  if(s=="DRAFTING STATUS") return "STÁDAS DRÉACHTAITHE";
  if(s=="draft entry") return "dréachtiontráil";
  if(s=="finished entry") return "iontráil chríochnaithe";
  if(s=="DRAFT") return "DRÉACHTIONTRÁIL";
  if(s=="FINISHED") return "CRÍOCHNAITHE";
  if(s=="any drafting status") return "stádas dréachtaithe ar bith";
  if(s=="Prefabricated comments") return "Nótaí tráchta réamhdhéanta";
  if(s=="NOTES") return "NÓTAÍ EOLAIS";
  if(s=="note") return "nóta eolais";
  if(s=="NOT") return "NÓT";
  if(s=="with or without notes") return "le nótaí eolais nó gan";
  if(s=="with a note") return "le nóta eolais";
  if(s=="with a note containing...") return "le nóta eolais ina bhfuil...";
  if(s=="without notes") return "gan nótaí eolais";
  if(s=="any type") return "cineál ar bith";
  if(s=="private note, not shown on extranets") return "nóta eolais príobháideach, gan taispeáint ar na heislíonta";
  if(s=="private note, shown on extranets") return "nóta eolais príobháideach, ar taispeáint ar na heislíonta";
  if(s=="public note") return "nóta eolais poiblí";
  if(s=="Note types") return "Cineálacha nótaí eolais";
  if(s=="LEVEL") return "LEIBHÉAL";
  if(s=="with a comment") return "le nóta tráchta";
  if(s=="with a comment contaning...") return "le nóta tráchta ina bhfuil...";
  if(s=="TBX export") return "Easpórtáil TBX";
  if(s=="TBX import") return "Iompórtáil TBX";
  if(s=="Empty the termbase") return "Folmhaigh an cnuasach";
  if(s=="Careful now! You are about to delete this termbase. You will not be able to undo this.") return "Cúmarach! Tá tú ar tí an cnuasach a scrios. Ní bheidh tú ábalta dul ar ais.";
  if(s=="Careful now! You are about to delete all entries and their history. You will not be able to undo this.") return "Cúramach! Tá tú ar tí gach iontráil a scrios, móide a gcuid staire. Ní bheidh tú ábalta dul ar ais.";
  if(s=="RELATED TERMS") return "TÉARMAÍ GAOLMHARA";

  if(s=="Your termbase at a glance") return "Sracfhéachaint ar do chnuasach";
  if(s=="Number of entries") return "Líon iontrálacha";
  if(s=="Number of items in history log") return "Líon míreanna sa taifead staire";
  if(s=="Your termbase is stored in the file %F") return "Tá do chunasach á stóráil sa chomhad %F";
  if(s=="File size") return "Méid an chomhaid";
  if(s=="Download %F") return "Íoslódáil %F";
  if(s=="Upload %F") return "Uaslódáil %F";
  if(s=="Make sure that the file you are uploading is a valid Terminologue termbase. If you upload something else you will do irreparable damage to your termbase.") return "Déan cinnte gur cnuasach bailí de chuid Terminologue atá sa chomhad atá á uaslódáil agat. Murab ea, déanfaidh tú damáiste do do chunasach agus ní bheidh tú ábalta dul ar ais.";

  if(!gloss) console.log(`if(s=="${s}") return "";`);
  else console.log(`if(s=="${s}", "${gloss}") return "";`);
  //if(s=="") return s;
  return s;
}

try {
  module.exports={
    L: L,
  }
} catch(e){}
