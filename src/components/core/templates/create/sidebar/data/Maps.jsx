import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { capitalize } from '@/lib/utils.js';
import { getElementDefaultStyle } from '@/lib/elements.js';
import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { MapOceanicPreview } from '@/components/core/templates/create/elements/maps/MapOceanic.jsx';
import { MapNorthAmericaPreview } from '@/components/core/templates/create/elements/maps/MapNorthAmerica.jsx';
import { MapNigeriaRegionsPreview } from '@/components/core/templates/create/elements/maps/MapNigeriaRegions.jsx';
import { MapNigeriaPreview } from '@/components/core/templates/create/elements/maps/MapNigeria.jsx';
import { MapAfricaPreview } from '@/components/core/templates/create/elements/maps/MapAfrica.jsx';
import { MapEuropePreview } from '@/components/core/templates/create/elements/maps/MapEurope.jsx';
import { MapWorldPreview } from '@/components/core/templates/create/elements/maps/MapWorld.jsx';
import { MapAsiaPreview } from '@/components/core/templates/create/elements/maps/MapAsia.jsx';
import { MapAlgeriaPreview } from '@/components/core/templates/create/elements/maps/MapAlgeria.jsx';
import { MapAlbaniaPreview } from '@/components/core/templates/create/elements/maps/MapAlbania.jsx';
import { MapAngolaPreview } from '@/components/core/templates/create/elements/maps/MapAngola.jsx';
import { MapSouthAmericaPreview } from '@/components/core/templates/create/elements/maps/MapSouthAmerica.jsx';
import { MapAfghanistanPreview } from '@/components/core/templates/create/elements/maps/MapAfghanistan.jsx';
import { MapAustriaPreview } from '@/components/core/templates/create/elements/maps/MapAustria.jsx';
import { MapArgentinaPreview } from '@/components/core/templates/create/elements/maps/MapArgentina.jsx';
import { MapAzerbaijanPreview } from '@/components/core/templates/create/elements/maps/MapAzerbaijan.jsx';
import { MapBeninPreview } from '@/components/core/templates/create/elements/maps/MapBenin.jsx';
import { MapBangladeshPreview } from '@/components/core/templates/create/elements/maps/MapBangladesh';
import { MapBelarusPreview } from '@/components/core/templates/create/elements/maps/MapBelarus';
import { MapBermudaPreview } from '@/components/core/templates/create/elements/maps/MapBermuda';
import { MapBotswanaPreview } from '@/components/core/templates/create/elements/maps/MapBotswana';
import { MapBahrainPreview } from '@/components/core/templates/create/elements/maps/MapBahrain';
import { MapBulgariaPreview } from '@/components/core/templates/create/elements/maps/MapBulgaria';
import { MapBurkinafasoPreview } from '@/components/core/templates/create/elements/maps/MapBurkinafaso';
import { MapBurundiPreview } from '@/components/core/templates/create/elements/maps/MapBurundi';
import { MapArmeniaPreview } from '@/components/core/templates/create/elements/maps/MapArmenia.jsx';
import { MapAustraliaPreview } from '@/components/core/templates/create/elements/maps/MapAustralia.jsx';
import { MapBelgiumPreview } from '@/components/core/templates/create/elements/maps/MapBelgium.jsx';
import { MapBelizePreview } from '@/components/core/templates/create/elements/maps/MapBelize.jsx';
import { MapBhutanPreview } from '@/components/core/templates/create/elements/maps/MapBhutan.jsx';
import { MapBoliviaPreview } from '@/components/core/templates/create/elements/maps/MapBolivia.jsx';
import { MapBosniaAndHerzegovinaPreview } from '@/components/core/templates/create/elements/maps/MapBosniaAndHerzegovina.jsx';
import { MapBrazilPreview } from '@/components/core/templates/create/elements/maps/MapBrazil.jsx';
import { MapBahamasPreview } from '@/components/core/templates/create/elements/maps/MapBahamas.jsx';
import { MapChadPreview } from '@/components/core/templates/create/elements/maps/MapChad.jsx';
import { MapColombiaPreview } from '@/components/core/templates/create/elements/maps/MapColombia.jsx';
import { MapCroatiaPreview } from '@/components/core/templates/create/elements/maps/MapCroatia.jsx';
import { MapCubaPreview } from '@/components/core/templates/create/elements/maps/MapCuba.jsx';
import { MapCzechRepublicPreview } from '@/components/core/templates/create/elements/maps/MapCzechRepublic.jsx';
import { MapCongoPreview } from '@/components/core/templates/create/elements/maps/MapCongo.jsx';
import { MapDominicanRepublicPreview } from '@/components/core/templates/create/elements/maps/MapDominicanRepublic.jsx';
import { MapBruneiDarussalamPreview } from '@/components/core/templates/create/elements/maps/MapBruneiDarussalam.jsx';
import { MapCaylandIslandsPreview } from '@/components/core/templates/create/elements/maps/MapCaylandIslands.jsx';
import { MapCambodiaPreview } from '@/components/core/templates/create/elements/maps/MapCambodia.jsx';
import { MapCameroonPreview } from '@/components/core/templates/create/elements/maps/MapCameroon.jsx';
import { MapCanadaPreview } from '@/components/core/templates/create/elements/maps/MapCanada.jsx';
import { MapCentralAfricanRepublicPreview } from '@/components/core/templates/create/elements/maps/MapCentralAfricanRepublic.jsx';
import { MapChilePreview } from '@/components/core/templates/create/elements/maps/MapChile.jsx';
import { MapChinaPreview } from '@/components/core/templates/create/elements/maps/MapChina.jsx';
import { MapCostaricaPreview } from '@/components/core/templates/create/elements/maps/MapCostarica.jsx';
import { MapCyprusPreview } from '@/components/core/templates/create/elements/maps/MapCyprus.jsx';
import { MapCongoDrPreview } from '@/components/core/templates/create/elements/maps/MapCongoDr.jsx';
import { MapDenmarkPreview } from '@/components/core/templates/create/elements/maps/MapDenmark.jsx';
import { MapDjiboutiPreview } from '@/components/core/templates/create/elements/maps/MapDjibouti.jsx';
import { MapTaiwanPreview } from '@/components/core/templates/create/elements/maps/MapTaiwan.jsx';
import { MapTogoPreview } from '@/components/core/templates/create/elements/maps/MapTogo.jsx';
import { MapTrinidadAndTobagoPreview } from '@/components/core/templates/create/elements/maps/MapTrinidadAndTobago.jsx';
import { MapTanzaniaPreview } from '@/components/core/templates/create/elements/maps/MapTanzania.jsx';
import { MapTunisiaPreview } from '@/components/core/templates/create/elements/maps/MapTunisia.jsx';
import { MapTurkmenistanPreview } from '@/components/core/templates/create/elements/maps/MapTurkmenistan.jsx';
import { MapEritreaPreview } from '@/components/core/templates/create/elements/maps/MapEritrea.jsx';
import { MapEstoniaPreview } from '@/components/core/templates/create/elements/maps/MapEstonia.jsx';
import { MapEthiopiaPreview } from '@/components/core/templates/create/elements/maps/MapEthiopia.jsx';
import { MapTimorLestePreview } from '@/components/core/templates/create/elements/maps/MapTimorLeste.jsx';
import { MapTajikistanPreview } from '@/components/core/templates/create/elements/maps/MapTajikistan.jsx';
import { MapThailandPreview } from '@/components/core/templates/create/elements/maps/MapThailand.jsx';
import { MapTurkeyPreview } from '@/components/core/templates/create/elements/maps/MapTurkey.jsx';
import { MapEcuadorPreview } from '@/components/core/templates/create/elements/maps/MapEcuador.jsx';
import { MapEgyptPreview } from '@/components/core/templates/create/elements/maps/MapEgypt.jsx';
import { MapElSalvadorPreview } from '@/components/core/templates/create/elements/maps/MapElSalvador.jsx';
import { MapEquatorialGuineaPreview } from '@/components/core/templates/create/elements/maps/MapEquatorialGuinea.jsx';
import { MapFalklandIslandsPreview } from '@/components/core/templates/create/elements/maps/MapFalkLandIslands.jsx';
import { MapFijiPreview } from '@/components/core/templates/create/elements/maps/MapFiji.jsx';
import { MapFinlandPreview } from '@/components/core/templates/create/elements/maps/MapFinland.jsx';
import { MapFrancePreview } from '@/components/core/templates/create/elements/maps/MapFrance.jsx';
import { MapFrenchSouthernAndAntarcticLandsPreview } from '@/components/core/templates/create/elements/maps/MapFrenchSouthernAndAntarcticLands.jsx';
import { MapGabonPreview } from '@/components/core/templates/create/elements/maps/MapGabon.jsx';
import { MapGambiaPreview } from '@/components/core/templates/create/elements/maps/MapGambia.jsx';
import { MapGeorgiaPreview } from '@/components/core/templates/create/elements/maps/MapGeorgia.jsx';
import { MapGermanyPreview } from '@/components/core/templates/create/elements/maps/MapGermany.jsx';
import { MapGhanaPreview } from '@/components/core/templates/create/elements/maps/MapGhana.jsx';
import { MapGreecePreview } from '@/components/core/templates/create/elements/maps/MapGreece.jsx';
import { MapGreenlandPreview } from '@/components/core/templates/create/elements/maps/MapGreenland.jsx';
import { MapGrenadaPreview } from '@/components/core/templates/create/elements/maps/MapGrenada.jsx';
import { MapGuatemalaPreview } from '@/components/core/templates/create/elements/maps/MapGuatemala.jsx';
import { MapGuineaBissauPreview } from '@/components/core/templates/create/elements/maps/MapGuineaBissau.jsx';
import { MapGuineaPreview } from '@/components/core/templates/create/elements/maps/MapGuinea.jsx';
import { MapGuyanaPreview } from '@/components/core/templates/create/elements/maps/MapGuyana.jsx';
import { MapHaitiPreview } from '@/components/core/templates/create/elements/maps/MapHaiti.jsx';
import { MapHondurasPreview } from '@/components/core/templates/create/elements/maps/MapHonduras.jsx';
import { MapHongKongPreview } from '@/components/core/templates/create/elements/maps/MapHongKong.jsx';
import { MapIcelandPreview } from '@/components/core/templates/create/elements/maps/MapIceland.jsx';
import { MapIndiaPreview } from '@/components/core/templates/create/elements/maps/MapIndia.jsx';
import { MapIndonesiaPreview } from '@/components/core/templates/create/elements/maps/MapIndonesia.jsx';
import { MapHungaryPreview } from '@/components/core/templates/create/elements/maps/MapHungary.jsx';
import { MapIranPreview } from '@/components/core/templates/create/elements/maps/MapIran.jsx';
import { MapIraqPreview } from '@/components/core/templates/create/elements/maps/MapIraq.jsx';
import { MapIrelandPreview } from '@/components/core/templates/create/elements/maps/MapIreland.jsx';
import { MapIsraelPreview } from '@/components/core/templates/create/elements/maps/MapIsrael.jsx';
import { MapItalyPreview } from '@/components/core/templates/create/elements/maps/MapItaly.jsx';
import { MapIvoryCoastPreview } from '@/components/core/templates/create/elements/maps/MapIvoryCoast.jsx';
import { MapJamaicaPreview } from '@/components/core/templates/create/elements/maps/MapJamaica.jsx';
import { MapJapanPreview } from '@/components/core/templates/create/elements/maps/MapJapan.jsx';
import { MapJordanPreview } from '@/components/core/templates/create/elements/maps/MapJordan.jsx';
import { MapKazakhstanPreview } from '@/components/core/templates/create/elements/maps/MapKazakhstan.jsx';
import { MapKenyaPreview } from '@/components/core/templates/create/elements/maps/MapKenya.jsx';
import { MapKosovoPreview } from '@/components/core/templates/create/elements/maps/MapKosovo.jsx';
import { MapKuwaitPreview } from '@/components/core/templates/create/elements/maps/MapKuwait.jsx';
import { MapKyrgyzstanPreview } from '@/components/core/templates/create/elements/maps/MapKyrgyzstan.jsx';
import { MapLaosPreview } from '@/components/core/templates/create/elements/maps/MapLaos.jsx';
import { MapLatviaPreview } from '@/components/core/templates/create/elements/maps/MapLatvia.jsx';
import { MapMaltaPreview } from '@/components/core/templates/create/elements/maps/MapMalta.jsx';
import { MapMauritaniaPreview } from '@/components/core/templates/create/elements/maps/MapMauritania.jsx';
import { MapMauritiusPreview } from '@/components/core/templates/create/elements/maps/MapMauritius.jsx';
import { MapMexicoPreview } from '@/components/core/templates/create/elements/maps/MapMexico.jsx';
import { MapMoldovaPreview } from '@/components/core/templates/create/elements/maps/MapMoldova.jsx';
import { MapMoroccoPreview } from '@/components/core/templates/create/elements/maps/MapMorocco.jsx';
import { MapMozambiquePreview } from '@/components/core/templates/create/elements/maps/MapMozambique.jsx';
import { MapMyanmarPreview } from '@/components/core/templates/create/elements/maps/MapMyanmar.jsx';
import { MapNepalPreview } from '@/components/core/templates/create/elements/maps/MapNepal.jsx';
import { MapNamibiaPreview } from '@/components/core/templates/create/elements/maps/MapNamibia.jsx';
import { MapNetherlandsPreview } from '@/components/core/templates/create/elements/maps/MapNetherlands.jsx';
import { MapMongoliaPreview } from '@/components/core/templates/create/elements/maps/MapMongolia.jsx';
import { MapLebanonPreview } from '@/components/core/templates/create/elements/maps/MapLebanon.jsx';
import { MapLesothoPreview } from '@/components/core/templates/create/elements/maps/MapLesotho.jsx';
import { MapLiberiaPreview } from '@/components/core/templates/create/elements/maps/MapLiberia.jsx';
import { MapLibyaPreview } from '@/components/core/templates/create/elements/maps/MapLibya.jsx';
import { MapLithuaniaPreview } from '@/components/core/templates/create/elements/maps/MapLithuania.jsx';
import { MapLuxembourgPreview } from '@/components/core/templates/create/elements/maps/MapLuxembourg.jsx';
import { MapMacedoniaPreview } from '@/components/core/templates/create/elements/maps/MapMacedonia.jsx';
import { MapMadagascarPreview } from '@/components/core/templates/create/elements/maps/MapMadagascar.jsx';
import { MapMalawiPreview } from '@/components/core/templates/create/elements/maps/MapMalawi.jsx';
import { MapMalaysiaPreview } from '@/components/core/templates/create/elements/maps/MapMalaysia.jsx';
import { MapMaliPreview } from '@/components/core/templates/create/elements/maps/MapMali.jsx';
import { MapNewCaledoniaPreview } from '@/components/core/templates/create/elements/maps/MapNewCaledonia.jsx';
import { MapNewZealandPreview } from '@/components/core/templates/create/elements/maps/MapNewZealand.jsx';
import { MapNicaraguaPreview } from '@/components/core/templates/create/elements/maps/MapNicaragua.jsx';
import { MapNigerPreview } from '@/components/core/templates/create/elements/maps/MapNiger.jsx';
import { MapNorthKoreaPreview } from '@/components/core/templates/create/elements/maps/MapNorthKorea.jsx';
import { MapNorwayPreview } from '@/components/core/templates/create/elements/maps/MapNorway.jsx';
import { MapOmanPreview } from '@/components/core/templates/create/elements/maps/MapOman.jsx';
import { MapPakistanPreview } from '@/components/core/templates/create/elements/maps/MapPakistan.jsx';
import { MapPanamaPreview } from '@/components/core/templates/create/elements/maps/MapPanama.jsx';
import { MapPapuaNewGuinueaPreview } from '@/components/core/templates/create/elements/maps/MapPapuaNewGuinuea.jsx';
import { MapPalestinePreview } from '@/components/core/templates/create/elements/maps/MapPalestine.jsx';
import { MapPeruPreview } from '@/components/core/templates/create/elements/maps/MapPeru.jsx';
import { MapPhilippinesPreview } from '@/components/core/templates/create/elements/maps/MapPhilippines.jsx';
import { MapPolandPreview } from '@/components/core/templates/create/elements/maps/MapPoland.jsx';
import { MapPortugalPreview } from '@/components/core/templates/create/elements/maps/MapPortugal.jsx';
import { MapPuertoRicoPreview } from '@/components/core/templates/create/elements/maps/MapPuertoRico.jsx';
import { MapQatarPreview } from '@/components/core/templates/create/elements/maps/MapQatar.jsx';
import { MapSaudiArabiaPreview } from '@/components/core/templates/create/elements/maps/MapSaudiArabia.jsx';
import { MapSenegalPreview } from '@/components/core/templates/create/elements/maps/MapSenegal.jsx';
import { MapSerbiaPreview } from '@/components/core/templates/create/elements/maps/MapSerbia.jsx';
import { MapSierraLeonePreview } from '@/components/core/templates/create/elements/maps/MapSierraLeone.jsx';
import { MapSurinamePreview } from '@/components/core/templates/create/elements/maps/MapSuriname.jsx';
import { MapParaguayPreview } from '@/components/core/templates/create/elements/maps/MapParaguay.jsx';
import { MapRomaniaPreview } from '@/components/core/templates/create/elements/maps/MapRomania.jsx';
import { MapRwandaPreview } from '@/components/core/templates/create/elements/maps/MapRwanda.jsx';
import { MapSloveniaPreview } from '@/components/core/templates/create/elements/maps/MapSlovenia.jsx';
import { MapSingaporePreview } from '@/components/core/templates/create/elements/maps/MapSingapore.jsx';
import { MapSlovakiaPreview } from '@/components/core/templates/create/elements/maps/MapSlovakia.jsx';
import { MapSolomonIslandsPreview } from '@/components/core/templates/create/elements/maps/MapSolomonIslands.jsx';
import { MapSomaliaPreview } from '@/components/core/templates/create/elements/maps/MapSomalia.jsx';
import { MapSomalilandPreview } from '@/components/core/templates/create/elements/maps/MapSomaliland.jsx';
import { MapSouthAfricaPreview } from '@/components/core/templates/create/elements/maps/MapSouthAfrica.jsx';
import { MapSouthKoreaPreview } from '@/components/core/templates/create/elements/maps/MapSouthKorea.jsx';
import { MapSouthSudanPreview } from '@/components/core/templates/create/elements/maps/MapSouthSudan.jsx';
import { MapSpainPreview } from '@/components/core/templates/create/elements/maps/MapSpain.jsx';
import { MapRussiaPreview } from '@/components/core/templates/create/elements/maps/MapRussia.jsx';
import { MapSwazilandPreview } from '@/components/core/templates/create/elements/maps/MapSwaziland.jsx';
import { MapSwedenPreview } from '@/components/core/templates/create/elements/maps/MapSweden.jsx';
import { MapSwitzerlandPreview } from '@/components/core/templates/create/elements/maps/MapSwitzerland.jsx';
import { MapSyriaPreview } from '@/components/core/templates/create/elements/maps/MapSyria.jsx';
import { MapUgandaPreview } from '@/components/core/templates/create/elements/maps/MapUganda.jsx';
import { MapUnitedArabEmiratesPreview } from '@/components/core/templates/create/elements/maps/MapUnitedArabEmirates.jsx';
import { MapUkrainePreview } from '@/components/core/templates/create/elements/maps/MapUkraine.jsx';
import { MapUnitedKingdomPreview } from '@/components/core/templates/create/elements/maps/MapUnitedKingdom.jsx';
import { MapDistrictOfColumbiaPreview } from '@/components/core/templates/create/elements/maps/MapDistrictOfColumbia.jsx';
import { MapFloridaPreview } from '@/components/core/templates/create/elements/maps/MapFlorida.jsx';
import { MapGeorgiaUsPreview } from '@/components/core/templates/create/elements/maps/MapGeorgiaUs.jsx';
import { MapSudanPreview } from '@/components/core/templates/create/elements/maps/MapSudan.jsx';
import { MapSriLankaPreview } from '@/components/core/templates/create/elements/maps/MapSriLanka.jsx';
import { MapAlabamaPreview } from '@/components/core/templates/create/elements/maps/MapAlabama.jsx';
import { MapAlaskaPreview } from '@/components/core/templates/create/elements/maps/MapAlaska.jsx';
import { MapArizonaPreview } from '@/components/core/templates/create/elements/maps/MapArizona.jsx';
import { MapArkansasPreview } from '@/components/core/templates/create/elements/maps/MapArkansas.jsx';
import { MapCaliforniaPreview } from '@/components/core/templates/create/elements/maps/MapCalifornia.jsx';
import { MapColoradoPreview } from '@/components/core/templates/create/elements/maps/MapColorado.jsx';
import { MapConnecticutPreview } from '@/components/core/templates/create/elements/maps/MapConnecticut.jsx';
import { MapDelawarePreview } from '@/components/core/templates/create/elements/maps/MapDelaware.jsx';
import { MapEnglandPreview } from '@/components/core/templates/create/elements/maps/MapEngland.jsx';
import { MapHawaiiPreview } from '@/components/core/templates/create/elements/maps/MapHawaii.jsx';
import { MapIdahoPreview } from '@/components/core/templates/create/elements/maps/MapIdaho.jsx';
import { MapIllinoisPreview } from '@/components/core/templates/create/elements/maps/MapIllinois.jsx';
import { MapIndianaPreview } from '@/components/core/templates/create/elements/maps/MapIndiana.jsx';
import { MapMainePreview } from '@/components/core/templates/create/elements/maps/MapMaine.jsx';
import { MapMarylandPreview } from '@/components/core/templates/create/elements/maps/MapMaryland.jsx';
import { MapMassachusettsPreview } from '@/components/core/templates/create/elements/maps/MapMassachusetts.jsx';
import { MapIowaPreview } from '@/components/core/templates/create/elements/maps/MapIowa.jsx';
import { MapNorthernIrelandPreview } from '@/components/core/templates/create/elements/maps/MapNorthernIreland.jsx';
import { MapScotlandPreview } from '@/components/core/templates/create/elements/maps/MapScotland.jsx';
import { MapUnitedStatesPreview } from '@/components/core/templates/create/elements/maps/MapUnitedStates.jsx';
import { MapWalesPreview } from '@/components/core/templates/create/elements/maps/MapWales.jsx';
import { MapMinnesotaPreview } from '@/components/core/templates/create/elements/maps/MapMinnesota.jsx';
import { MapMississippiPreview } from '@/components/core/templates/create/elements/maps/MapMississippi.jsx';
import { MapMissouriPreview } from '@/components/core/templates/create/elements/maps/MapMissouri.jsx';
import { MapMontanaPreview } from '@/components/core/templates/create/elements/maps/MapMontana.jsx';
import { MapNebraskaPreview } from '@/components/core/templates/create/elements/maps/MapNebraska.jsx';
import { MapNevadaPreview } from '@/components/core/templates/create/elements/maps/MapNevada.jsx';
import { MapNewHampshirePreview } from '@/components/core/templates/create/elements/maps/MapNewHampshire.jsx';
import { MapNewJerseyPreview } from '@/components/core/templates/create/elements/maps/MapNewJersey.jsx';
import { MapNewMexicoPreview } from '@/components/core/templates/create/elements/maps/MapNewMexico.jsx';
import { MapKansasPreview } from '@/components/core/templates/create/elements/maps/MapKansas.jsx';
import { MapLouisianaPreview } from '@/components/core/templates/create/elements/maps/MapLouisiana.jsx';
import { MapKentuckyPreview } from '@/components/core/templates/create/elements/maps/MapKentucky.jsx';
import { MapZambiaPreview } from '@/components/core/templates/create/elements/maps/MapZambia.jsx';
import { MapZimbabwePreview } from '@/components/core/templates/create/elements/maps/MapZimbabwe.jsx';
import { MapUruguayPreview } from '@/components/core/templates/create/elements/maps/MapUruguay.jsx';
import { MapUsVirginIslandsPreview } from '@/components/core/templates/create/elements/maps/MapUsVirginIslands.jsx';
import { MapUzbekistanPreview } from '@/components/core/templates/create/elements/maps/MapUzbekistan.jsx';
import { MapVanuatuPreview } from '@/components/core/templates/create/elements/maps/MapVanuatu.jsx';
import { MapVietnamPreview } from '@/components/core/templates/create/elements/maps/MapVietnam.jsx';
import { MapWesternSaharaPreview } from '@/components/core/templates/create/elements/maps/MapWesternSahara.jsx';
import { MapVenezuelaPreview } from '@/components/core/templates/create/elements/maps/MapVenezuela.jsx';
import { MapYemenPreview } from '@/components/core/templates/create/elements/maps/MapYemen.jsx';
import { MapMichiganPreview } from '@/components/core/templates/create/elements/maps/MapMichigan.jsx';
import { MapVermontPreview } from '@/components/core/templates/create/elements/maps/MapVermont.jsx';
import { MapRhodeIslandPreview } from '@/components/core/templates/create/elements/maps/MapRhodeIsland.jsx';
import { MapNewYorkPreview } from '@/components/core/templates/create/elements/maps/MapNewYork.jsx';
import { MapNorthCarolinaPreview } from '@/components/core/templates/create/elements/maps/MapNorthCarolina.jsx';
import { MapNorthDakotaPreview } from '@/components/core/templates/create/elements/maps/MapNorthDakota.jsx';
import { MapOhioPreview } from '@/components/core/templates/create/elements/maps/MapOhio.jsx';
import { MapOklahomaPreview } from '@/components/core/templates/create/elements/maps/MapOklahoma.jsx';
import { MapOregonPreview } from '@/components/core/templates/create/elements/maps/MapOregon.jsx';
import { MapTexasPreview } from '@/components/core/templates/create/elements/maps/MapTexas.jsx';
import { MapVirginiaPreview } from '@/components/core/templates/create/elements/maps/MapVirginia.jsx';
import { MapWisconsinPreview } from '@/components/core/templates/create/elements/maps/MapWisconsin.jsx';
import { MapMontenegroPreview } from '@/components/core/templates/create/elements/maps/MapMontenegro.jsx';
import { MapSouthCarolinaPreview } from '@/components/core/templates/create/elements/maps/MapSouthCarolina.jsx';
import { MapSouthDakotaPreview } from '@/components/core/templates/create/elements/maps/MapSouthDakota.jsx';
import { MapPennsylvaniaPreview } from '@/components/core/templates/create/elements/maps/MapPennsylvania.jsx';
import { MapTennesseePreview } from '@/components/core/templates/create/elements/maps/MapTennessee.jsx';
import { MapUtahPreview } from '@/components/core/templates/create/elements/maps/MapUtah.jsx';
import { MapWashingtonPreview } from '@/components/core/templates/create/elements/maps/MapWashington.jsx';
import { MapWyomingPreview } from '@/components/core/templates/create/elements/maps/MapWyoming.jsx';
import { MapWestVirginiaPreview } from '@/components/core/templates/create/elements/maps/MapWestVirginia.jsx';

const previews = {
  continents: {
    africa: <MapAfricaPreview />,
    europe: <MapEuropePreview />,
    'north-america': <MapNorthAmericaPreview />,
    'south-america': <MapSouthAmericaPreview />,
    world: <MapWorldPreview />,
    asia: <MapAsiaPreview />,
    oceanic: <MapOceanicPreview />,
  },
  countries: {
    nigeria: <MapNigeriaPreview />,
    'nigeria-regions': <MapNigeriaRegionsPreview />,
    algeria: <MapAlgeriaPreview />,
    angola: <MapAngolaPreview />,
    albania: <MapAlbaniaPreview />,
    afghanistan: <MapAfghanistanPreview />,
    austria: <MapAustriaPreview />,
    argentina: <MapArgentinaPreview />,
    azerbaijan: <MapAzerbaijanPreview />,
    benin: <MapBeninPreview />,
    bangladesh: <MapBangladeshPreview />,
    belarus: <MapBelarusPreview />,
    bermuda: <MapBermudaPreview />,
    botswana: <MapBotswanaPreview />,
    bahrain: <MapBahrainPreview />,
    bulgaria: <MapBulgariaPreview />,
    burkinafaso: <MapBurkinafasoPreview />,
    burundi: <MapBurundiPreview />,
    armenia: <MapArmeniaPreview />,
    australia: <MapAustraliaPreview />,
    belgium: <MapBelgiumPreview />,
    belize: <MapBelizePreview />,
    bhutan: <MapBhutanPreview />,
    bolivia: <MapBoliviaPreview />,
    'bosnia-and-aerzegovina': <MapBosniaAndHerzegovinaPreview />,
    brazil: <MapBrazilPreview />,
    'brunei-darussalam': <MapBruneiDarussalamPreview />,
    bahamas: <MapBahamasPreview />,
    chad: <MapChadPreview />,
    colombia: <MapColombiaPreview />,
    croatia: <MapCroatiaPreview />,
    cuba: <MapCubaPreview />,
    'czech-republic': <MapCzechRepublicPreview />,
    congo: <MapCongoPreview />,
    'dominican-republic': <MapDominicanRepublicPreview />,
    'cayland-islands': <MapCaylandIslandsPreview />,
    cambodia: <MapCambodiaPreview />,
    cameroon: <MapCameroonPreview />,
    canada: <MapCanadaPreview />,
    'central-african-republic': <MapCentralAfricanRepublicPreview />,
    chile: <MapChilePreview />,
    china: <MapChinaPreview />,
    costarica: <MapCostaricaPreview />,
    cyprus: <MapCyprusPreview />,
    'congo-dr': <MapCongoDrPreview />,
    denmark: <MapDenmarkPreview />,
    djibouti: <MapDjiboutiPreview />,
    taiwan: <MapTaiwanPreview />,
    togo: <MapTogoPreview />,
    'trinidad-and-tobago': <MapTrinidadAndTobagoPreview />,
    tanzania: <MapTanzaniaPreview />,
    tunisia: <MapTunisiaPreview />,
    turkmenistan: <MapTurkmenistanPreview />,
    eritrea: <MapEritreaPreview />,
    estonia: <MapEstoniaPreview />,
    ethiopia: <MapEthiopiaPreview />,
    'timor-leste': <MapTimorLestePreview />,
    tajikistan: <MapTajikistanPreview />,
    thailand: <MapThailandPreview />,
    turkey: <MapTurkeyPreview />,
    ecuador: <MapEcuadorPreview />,
    egypt: <MapEgyptPreview />,
    'el-salvador': <MapElSalvadorPreview />,
    'equatorial-guinea': <MapEquatorialGuineaPreview />,
    'falkland-islands': <MapFalklandIslandsPreview />,
    fiji: <MapFijiPreview />,
    finland: <MapFinlandPreview />,
    france: <MapFrancePreview />,
    'french-southern-and-antarctic-lands': <MapFrenchSouthernAndAntarcticLandsPreview />,
    gabon: <MapGabonPreview />,
    gambia: <MapGambiaPreview />,
    georgia: <MapGeorgiaPreview />,
    germany: <MapGermanyPreview />,
    ghana: <MapGhanaPreview />,
    greece: <MapGreecePreview />,
    greenland: <MapGreenlandPreview />,
    grenada: <MapGrenadaPreview />,
    guatemala: <MapGuatemalaPreview />,
    'guinea-bissau': <MapGuineaBissauPreview />,
    guinea: <MapGuineaPreview />,
    guyana: <MapGuyanaPreview />,
    haiti: <MapHaitiPreview />,
    honduras: <MapHondurasPreview />,
    'hong-kong': <MapHongKongPreview />,
    iceland: <MapIcelandPreview />,
    india: <MapIndiaPreview />,
    indonesia: <MapIndonesiaPreview />,
    hungary: <MapHungaryPreview />,
    iran: <MapIranPreview />,
    iraq: <MapIraqPreview />,
    ireland: <MapIrelandPreview />,
    israel: <MapIsraelPreview />,
    italy: <MapItalyPreview />,
    'ivory-coast': <MapIvoryCoastPreview />,
    jamaica: <MapJamaicaPreview />,
    japan: <MapJapanPreview />,
    jordan: <MapJordanPreview />,
    kazakhstan: <MapKazakhstanPreview />,
    kenya: <MapKenyaPreview />,
    kosovo: <MapKosovoPreview />,
    kuwait: <MapKuwaitPreview />,
    kyrgyzstan: <MapKyrgyzstanPreview />,
    laos: <MapLaosPreview />,
    latvia: <MapLatviaPreview />,
    malta: <MapMaltaPreview />,
    mauritania: <MapMauritaniaPreview />,
    mauritius: <MapMauritiusPreview />,
    mexico: <MapMexicoPreview />,
    moldova: <MapMoldovaPreview />,
    morocco: <MapMoroccoPreview />,
    mozambique: <MapMozambiquePreview />,
    myanmar: <MapMyanmarPreview />,
    nepal: <MapNepalPreview />,
    namibia: <MapNamibiaPreview />,
    netherlands: <MapNetherlandsPreview />,
    mongolia: <MapMongoliaPreview />,
    lebanon: <MapLebanonPreview />,
    lesotho: <MapLesothoPreview />,
    liberia: <MapLiberiaPreview />,
    libya: <MapLibyaPreview />,
    lithuania: <MapLithuaniaPreview />,
    luxembourg: <MapLuxembourgPreview />,
    macedonia: <MapMacedoniaPreview />,
    madagascar: <MapMadagascarPreview />,
    malawi: <MapMalawiPreview />,
    malaysia: <MapMalaysiaPreview />,
    mali: <MapMaliPreview />,
    'new-caledonia': <MapNewCaledoniaPreview />,
    'new-zealand': <MapNewZealandPreview />,
    nicaragua: <MapNicaraguaPreview />,
    niger: <MapNigerPreview />,
    'north-korea': <MapNorthKoreaPreview />,
    norway: <MapNorwayPreview />,
    oman: <MapOmanPreview />,
    pakistan: <MapPakistanPreview />,
    panama: <MapPanamaPreview />,
    'papua-new-guinea': <MapPapuaNewGuinueaPreview />,
    palestine: <MapPalestinePreview />,
    peru: <MapPeruPreview />,
    philippines: <MapPhilippinesPreview />,
    poland: <MapPolandPreview />,
    portugal: <MapPortugalPreview />,
    'puerto-rico': <MapPuertoRicoPreview />,
    qatar: <MapQatarPreview />,
    'saudi-arabia': <MapSaudiArabiaPreview />,
    senegal: <MapSenegalPreview />,
    serbia: <MapSerbiaPreview />,
    'sierra-leone': <MapSierraLeonePreview />,
    suriname: <MapSurinamePreview />,
    paraguay: <MapParaguayPreview />,
    romania: <MapRomaniaPreview />,
    rwanda: <MapRwandaPreview />,
    slovenia: <MapSloveniaPreview />,
    singapore: <MapSingaporePreview />,
    slovakia: <MapSlovakiaPreview />,
    'solomon-islands': <MapSolomonIslandsPreview />,
    somalia: <MapSomaliaPreview />,
    somaliland: <MapSomalilandPreview />,
    'south-africa': <MapSouthAfricaPreview />,
    'south-korea': <MapSouthKoreaPreview />,
    'south-sudan': <MapSouthSudanPreview />,
    spain: <MapSpainPreview />,
    russia: <MapRussiaPreview />,
    swaziland: <MapSwazilandPreview />,
    sweden: <MapSwedenPreview />,
    switzerland: <MapSwitzerlandPreview />,
    syria: <MapSyriaPreview />,
    uganda: <MapUgandaPreview />,
    'united-arab-emirates': <MapUnitedArabEmiratesPreview />,
    ukraine: <MapUkrainePreview />,
    'united-kingdom': <MapUnitedKingdomPreview />,
    'district-of-columbia': <MapDistrictOfColumbiaPreview />,
    florida: <MapFloridaPreview />,
    'georgia-us': <MapGeorgiaUsPreview />,
    sudan: <MapSudanPreview />,
    'sri-lanka': <MapSriLankaPreview />,
    alabama: <MapAlabamaPreview />,
    alaska: <MapAlaskaPreview />,
    arizona: <MapArizonaPreview />,
    arkansas: <MapArkansasPreview />,
    california: <MapCaliforniaPreview />,
    colorado: <MapColoradoPreview />,
    connecticut: <MapConnecticutPreview />,
    delaware: <MapDelawarePreview />,
    england: <MapEnglandPreview />,
    hawaii: <MapHawaiiPreview />,
    idaho: <MapIdahoPreview />,
    illinois: <MapIllinoisPreview />,
    indiana: <MapIndianaPreview />,
    maine: <MapMainePreview />,
    maryland: <MapMarylandPreview />,
    massachusetts: <MapMassachusettsPreview />,
    iowa: <MapIowaPreview />,
    'northern-ireland': <MapNorthernIrelandPreview />,
    scotland: <MapScotlandPreview />,
    'united-states': <MapUnitedStatesPreview />,
    wales: <MapWalesPreview />,
    minnesota: <MapMinnesotaPreview />,
    mississippi: <MapMississippiPreview />,
    missouri: <MapMissouriPreview />,
    montana: <MapMontanaPreview />,
    nebraska: <MapNebraskaPreview />,
    nevada: <MapNevadaPreview />,
    'new-hampshire': <MapNewHampshirePreview />,
    'new-jersey': <MapNewJerseyPreview />,
    'new-mexico': <MapNewMexicoPreview />,
    kansas: <MapKansasPreview />,
    louisiana: <MapLouisianaPreview />,
    kentucky: <MapKentuckyPreview />,
    zambia: <MapZambiaPreview />,
    zimbabwe: <MapZimbabwePreview />,
    uruguay: <MapUruguayPreview />,
    'us-virgin-islands': <MapUsVirginIslandsPreview />,
    uzbekistan: <MapUzbekistanPreview />,
    vanuatu: <MapVanuatuPreview />,
    vietnam: <MapVietnamPreview />,
    'western-sahara': <MapWesternSaharaPreview />,
    venezuela: <MapVenezuelaPreview />,
    yemen: <MapYemenPreview />,
    michigan: <MapMichiganPreview />,
    vermont: <MapVermontPreview />,
    'rhode-island': <MapRhodeIslandPreview />,
    'new-york': <MapNewYorkPreview />,
    'north-carolina': <MapNorthCarolinaPreview />,
    'north-dakota': <MapNorthDakotaPreview />,
    ohio: <MapOhioPreview />,
    oklahoma: <MapOklahomaPreview />,
    oregon: <MapOregonPreview />,
    texas: <MapTexasPreview />,
    virginia: <MapVirginiaPreview />,
    wisconsin: <MapWisconsinPreview />,
    montenegro: <MapMontenegroPreview />,
    'south-carolina': <MapSouthCarolinaPreview />,
    'south-dakota': <MapSouthDakotaPreview />,
    pennsylvania: <MapPennsylvaniaPreview />,
    tennessee: <MapTennesseePreview />,
    utah: <MapUtahPreview />,
    washington: <MapWashingtonPreview />,
    wyoming: <MapWyomingPreview />,
    'west-virginia': <MapWestVirginiaPreview />,
  },
};

const elements = {
  continents: Object.keys(previews.continents).map((name) => ({
    id: `map-${name}`,
    data: {
      type: 'map',
      text: name.split('-').map(capitalize).join(' '),
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'map' }),
      config: {
        data: [],
        name: name,
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
    },
    preview: (
      <div className="flex flex-col items-center justify-center">
        {previews.continents[name]}
        <p className="text-sm text-center leading-tight mt-2 opacity-60">{name.split('-').map(capitalize).join(' ')}</p>
      </div>
    ),
  })),
  countries: Object.keys(previews.countries).map((name) => ({
    id: `map-${name}`,
    data: {
      type: 'map',
      text: name.split('-').map(capitalize).join(' '),
      width: 400,
      height: 400,
      style: getElementDefaultStyle({ type: 'map' }),
      config: {
        data: [],
        name,
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
    },
    preview: (
      <div className="flex flex-col items-center justify-center">
        {previews.countries[name]}
        <p className="text-sm text-center leading-tight mt-2 opacity-60">{name.split('-').map(capitalize).join(' ')}</p>
      </div>
    ),
  })),
};

const Maps = ({ mini, onView, onBack }) => {
  return (
    <>
      {mini ? (
        <>
          <div className="grid grid-cols-2 gap-4">
            {elements.continents.map((element) => {
              return <DraggableElementWrapper key={element.id} element={element} />;
            })}
            {
              //prettier-ignore
              elements.countries.filter((el) => el.id === 'map-nigeria').map((element) => {
                return <DraggableElementWrapper key={ element.id } element={ element } />;
              })
            }
          </div>
          <Button
            onClick={onView}
            variant="bordered"
            className="text-md mt-8"
            endContent={<TbChevronRight size={16} />}
            radius="full"
            fullWidth
          >
            View All
          </Button>
        </>
      ) : (
        <>
          <div className="flex items-center space-x-3 mb-8">
            <Button onClick={onBack} variant="bordered" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-xl font-semibold">Maps</h2>
          </div>
          <div className="space-y-6">
            {['continents', 'countries'].map((type) => {
              return (
                <div key={type} className="border border-white/10 rounded-2xl px-6 py-5">
                  <h2 className="text-base font-semibold capitalize mb-6">{type}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {elements[type].map((element) => {
                      return <DraggableElementWrapper key={element.id} element={element} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

Maps.propTypes = {
  mini: PropTypes.bool,
  onView: PropTypes.func,
  onBack: PropTypes.func,
};

export default Maps;
