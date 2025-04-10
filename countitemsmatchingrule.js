
const items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(let i=0;i<items.length;i++){
        let type = items[i][0];
        let color = items[i][1];
        let name = items[i][2];
        if(ruleKey == "type"&& ruleValue == type){
            count++
        }else if(ruleKey == "color"&& ruleValue == color){
            count++
        }else if(ruleKey == "name"&& ruleValue == name){
            count++
        }
    }
    return count;
};

console.log(countMatches(items, ruleKey, ruleValue));