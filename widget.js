//console.log($('*[class^="price"]'))
var priceTags = $('*[class*="price-"]')
  .filter(function () {
    return this.className.match(/(?:^|\s)price-/);
  });
 // console.log(priceTags)

  for(var a=0;a<priceTags.length;a++){
     // console.log(priceTags[a].textContent)
     if(priceTags[a].textContent.split(' ')[0] >=20 ){
        // console.log(priceTags[a].textContent.split(' ')[0])
        if(priceTags[a].textContent.split(' ')[0] < 100){
           
            priceTags[a].style.color = 'red';
            var price = priceTags[a].textContent.split(' ')[0] -priceTags[a].textContent.split(' ')[0] * 20/100

            price =  'New Price: '+ price + '$'










            priceTags[a].innerHTML ='Old price:'+  priceTags[a].innerHTML +  " <span style='color:white; display:block'>"+ price +"</span>"
        }else if(priceTags[a].textContent.split(' ')[0] >=100 && priceTags[a].textContent.split(' ')[0] < 500){
            
            priceTags[a].style.color = 'red'
             price =  'New Price: '+ price + '$'

            var price = priceTags[a].textContent.split(' ')[0] -priceTags[a].textContent.split(' ')[0] * 30/100
            price =  'New Price: '+ price + '$'

            priceTags[a].innerHTML ='Old price:'+  priceTags[a].innerHTML +  " <span style='color:white; display:block'>"+ price +"</span>"
        }else{
           
            priceTags[a].style.color = 'red'
            var price = priceTags[a].textContent.split(' ')[0] -priceTags[a].textContent.split(' ')[0] * 40/100
            price =  'New Price: '+ price + '$'

            priceTags[a].innerHTML ='Old price:'+  priceTags[a].innerHTML +  " <span style='color:white; display:block'>"+ price +"</span>"
            
        }
     }
  }