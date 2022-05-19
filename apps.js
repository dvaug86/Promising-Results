/*
//use slowMath to add 6 and 2 together
slowMath.add(6,2)
    .then((ans)=>{
        //returns answer =8
        console.log(ans);
        //return multiply answer by 2
        return slowMath.multiply(ans, 2);
    })
    
    .then((ans)=>{
        //returns answer =16
        console.log(ans);
        //divide result by 4
        return slowMath.divide(ans, 4);
    })
    
    .then((ans)=>{
        //returns answer = 4
        console.log(ans);
        //subtract result by 3
        return slowMath.subtract(ans, 3);
    })
        
    .then((ans)=>{
        //returns answer =1
        console.log(ans);
        //add result by 98
        return slowMath.add(ans, 98);
    })        
    
    .then((ans)=>{
        //returns answer =99
        console.log(ans);
        //remainder by dividing result by 2
        return slowMath.remainder(ans, 2);
    })
    
    .then((ans)=>{
        //returns answer =1
        console.log(ans);
        //multiply answer by 50
        return slowMath.multiply(ans, 50);
    })

    .then((ans)=>{
        //returns answer =50
        console.log(ans);
        //remainder by dividing result by 40
        return slowMath.remainder(ans, 40);
    })

    .then((ans)=>{
        //returns answer =10
        console.log(ans);
        //add result by 32
        return slowMath.add(ans, 32);
    })

    .then((ans)=>{
        //returns final answer which should be 32
        console.log(`The final result is ${ans}.`);
    })
    .catch(err=>{
        console.log(err)
    });



//same exercise except adding 1 and 1 together
slowMath.add(1,1)
    .then((ans)=>{
        //returns answer =8
        console.log(ans);
        //return multiply answer by 2
        return slowMath.multiply(ans, 2);
    })
    
    .then((ans)=>{
        //returns answer =16
        console.log(ans);
        //divide result by 4
        return slowMath.divide(ans, 4);
    })
    
    .then((ans)=>{
        //returns answer = 4
        console.log(ans);
        //subtract result by 3
        return slowMath.subtract(ans, 3);
    })
        
    .then((ans)=>{
        //returns answer =1
        console.log(ans);
        //add result by 98
        return slowMath.add(ans, 98);
    })        
    
    .then((ans)=>{
        //returns answer =99
        console.log(ans);
        //remainder by dividing result by 2
        return slowMath.remainder(ans, 2);
    })
    
    .then((ans)=>{
        //returns answer =1
        console.log(ans);
        //multiply answer by 50
        return slowMath.multiply(ans, 50);
    })

    .then((ans)=>{
        //returns answer =50
        console.log(ans);
        //remainder by dividing result by 40
        return slowMath.remainder(ans, 40);
    })

    .then((ans)=>{
        //returns answer =10
        console.log(ans);
        //add result by 32
        return slowMath.add(ans, 32);
    })

    .then((ans)=>{
        //returns final answer which should be 32
        console.log(`The final result is ${ans}.`);
    })
    .catch(err=>{
        console.log(err)
    });
*/

//async await
    
let doMath = async function (){
    try{
        let ans = await slowMath.add(6, 2);
        console.log(ans);
        ans = await slowMath.multiply(ans, 2);
        console.log(ans);
        ans = await slowMath.divide(ans, 4);
        console.log(ans);
        ans = await slowMath.subtract(ans, 3);
        console.log(ans);
        ans = await slowMath.add(ans, 98);
        console.log(ans);
        ans = await slowMath.remainder(ans, 2);
        console.log(ans);
        ans = await slowMath.multiply(ans, 50);
        console.log(ans);
        ans = await slowMath.remainder(ans, 40);
        console.log(ans);
        ans = await slowMath.add(ans, 32);
        console.log(`The final result is ${ans}.`);
    }
    catch(err){
        console.log(err);
    }
}
doMath();
