// import PredictionCarousel from "../carousel/PredictionCarousel";
// import MarketInsightHome from "./MarketInsightHome";
// import StandAloneCard from "./StandAloneCard";
const names = ['Accessbank', 'Gtbank', 'Firstbank'];
const PredictionHomePage = () => {
const options = {};
  
  return (
    <div className="">
    <PredictionCarousel options={options} slides={names}/>
    <MarketInsightHome/>
    <StandAloneCard/>
    </div>
  
  )
}

export default PredictionHomePage