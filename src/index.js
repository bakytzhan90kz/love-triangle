/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.unshift(0);
  for(let i  = 1; i<preferences.length; i++){
    let b = preferences[i];
    if(b===i) continue;
    let c = preferences[b];
    
    count = count + (i === preferences[c]);
  }
  return count / 3;
};