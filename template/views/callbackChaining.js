function add(a, b, cb){
    setTimeout(function(){
        var z = a + b;
        cb(z);
    },5000)
    
}

function sub(a, b, cb){
    setTimeout(function(){
        var z = a - b;
        cb(z);
    },3000)
    
}

add(3, 4, function(sum){
    console.log(sum);
    sub(sum, 5, function(diff){
        console.log(diff);
    })
})
