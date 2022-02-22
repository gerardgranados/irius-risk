export function abbreviateNumber(number){
  const DIGIT_SYMBOLS = ["", "k", "M", "G", "T", "P", "E"];
  // what tier? (determines SI symbol)
  const tier = Math.log10(Math.abs(number)) / 3 | 0;

  // if zero, we don't need a suffix
  if(tier == 0) return number;

  // get suffix and determine scale
  const suffix = DIGIT_SYMBOLS[tier];
  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}
export const checkIsNumber = (number) => !!Number(number);
