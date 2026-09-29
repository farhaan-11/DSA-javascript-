/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function findHours(piles,speed){
    let hours=0;

    for(let i=0; i<piles.length; i++){
        hours+=Math.ceil(piles[i]/speed)
    }

    return hours
}

var minEatingSpeed = function(piles, h) {
    
    let low=1;
    let high=Math.max(...piles)

    while(low<high){
        let mid= Math.floor(low + (high - low)/2)

        let hours= findHours(piles,mid)

        if(hours<=h){
            high=mid
        }else{
            low=mid+1
        }

    }

    return low
};