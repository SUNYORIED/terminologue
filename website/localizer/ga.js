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
  if(s=="starts like this") return "tosaíonn mar seo";
  if(s=="contains a word that starts like this") return "tiomsaíonn focal a thosaíonn mar seo";
  if(s=="contains this sequence of characters") return "tiomsaíonn an teaghrán seo de charachtair";
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
  if(s=="DATESTAMP") return "DÁTSTAMPA";
  if(s=="LAST MAJOR UPDATE") return "MÓR-ATHRÚ DEIREANACH";
  if(s=="set to today") return "athraigh go inniu";
  if(s=="any datestamp or no datestamp") return "dátstampa ar bith nó gan dátstampa";
  if(s=="any datestamp") return "dátstampa ar bith";
  if(s=="no datestamp") return "gan dátstampa";
  if(s=="datestamp before...") return "dátstampa roimh...";
  if(s=="datestamp on...") return "dátstampa ar...";
  if(s=="datestamp after...") return "dátstampa tar éis...";
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
  if(s=="my comments") return "mo chuid nótaí";
  if(s=="with or without my comments") return "le nó gan nótaí uaimse";
  if(s=="with my comments") return "le nótaí uaimse";
  if(s=="without my comments") return "gan nótaí uaimse";
  if(s=="other people's comments") return "nótaí daoine eile";
  if(s=="with or without other people's comments") return "le nó gan nótaí ó dhaoine eile";
  if(s=="with other people's comments") return "le nótaí ó dhaoine eile";
  if(s=="without other people's comments") return "gan nótaí ó dhaoine eile";
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
  if(s=="LAST UPDATED") return "UASDÁTÚ DEIREANACH";
  if(s=="SEE ALSO") return "FÉACH FREISIN";
  if(s=="add to worklist") return "cuir ar liosta oibre";
  if(s=="Lists") return "Liostaí";
  if(s=="Domains") return "Réimsí";
  if(s=="Part-of-speech labels") return "Ranna cainte";
  if(s=="Inflection labels") return "Lipéid infhillte";
  if(s=="Acceptability labels") return "Lipéid inghacthachta";
  if(s=="Sources") return "Foinsí";
  if(s=="Collections") return "Bailiúcháin";
  if(s=="Teamwork") return "Obair foirne";
  if(s=="Tags") return "Clibeanna";
  if(s=="Extranets") return "Eislíonta";
  if(s=="Termbase settings") return "Socruithe an chnuasaigh";
  if(s=="Name and blurb") return "Ainm agus blurba";
  if(s=="Features") return "Gnéithe an bhogearra";
  if(s=="Languages") return "Teangacha";
  if(s=="Termbase access") return "Rochtain ar an chnuasach";
  if(s=="Publishing") return "Foilsiú";
  if(s=="Change the termbase's URL") return "Athraigh URL an chnuasaigh";
  if(s=="Delete the termbase") return "Scrios an cnuasach";
  if(s=="Careful now! You will not be able to undo this.") return "Cúramach! Ní bheidh tú ábalta dul ar ais.";
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
  if(s=="Automatic status changes") return "Athruithe uathoibríocha stádais";
  if(s=="BLURB") return "BLURBA";
  if(s=="level") return "leibhéal";
  if(s=="reader") return "léitheoir";
  if(s=="editor") return "eagarthóir";
  if(s=="creator") return "cruthaitheoir";
  if(s=="administrator") return "riarathóir";
  if(s=="configurator") return "cumraitheoir";
  if(s=="no change") return "gan athrú";
  if(s=="change to 'not checked'") return "athraigh go 'neamhsheiceáilte'";
  if(s=="change to 'hidden'") return "athraigh go 'i bhfolach'";
  if(s=="change to 'not checked' and 'hidden'") return "athraigh go 'neamhsheiceáilte' and 'i bhfolach'";

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
