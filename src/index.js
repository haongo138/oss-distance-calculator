const { 
  estimateDistance
} = require("oss-tokyoclient");

function useEstimateDistance(firstPlace, secondPlace) {
  return estimateDistance(firstPlace, secondPlace);
}

module.exports = {
  useEstimateDistance,
};