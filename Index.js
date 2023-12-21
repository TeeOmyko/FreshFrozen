import {foodItem} from './fooditem.js'

function displayItems(){
    var chicken= document.getElementById('chicken');
    var beef=  document.getElementById('beef');
    var turkey=  document.getElementById('turkey');
    var fish=  document.getElementById('fish' );}

const chickenData= foodItem.filter((item)=>item.category=='chicken');
    const beefData= foodItem.filter((item)=>item.category=='beef');
    const turkeyData= foodItem.filter((item)=>item.category=='turkey');
    const fishData= foodItem.filter((item)=>item.category=='fish');
