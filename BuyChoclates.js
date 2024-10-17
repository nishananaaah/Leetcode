var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    let sum =prices[0]+prices[1];
    if(sum<=money){
      return money-sum
    }else{
      return money
    }
  };
  prices = [1,2,2], money = 3
  console.log(buyChoco(prices,money))