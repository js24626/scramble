const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');  

let play = false;
let newWords = "";
let ranWords = "";
let sWords = ['react','css','vue','frontend','python','bootstrap','c++','angular','DOM',
'html','Jquery','Database','Mern','github','oop','Csharp','SQL','angular'];
const createNewwords = () =>{
let ranNum= Math.floor(Math.random()*sWords.length);
    // console.log(ranNum);
let newTempsWords = sWords[ranNum];
   //console.log(newTempSWords.split(""));
return newTempsWords;
}
const scrambleWords = (arr) =>{
    for (let i=arr.length-1; i>0; i--){
        let temp = arr[i];
      //  console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
      //  console.log(i);
      //  console.log(j);
        arr[i] = arr[j];
        arr[j] = temp; 

    }
    return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords =createNewwords();
        ranWords =scrambleWords(newWords.split("")).join("");
        //console.log(randWords.join(""));
        msg.innerHTML =` GUESS THE WORD : ${ranWords}`;
    }
    else{
        let tempWord =  guess.value;
        if(tempWord=== newWords){
           // console.log('correct');
           play = false;
           msg.innerHTML= `Awesome Its's correct. It is ${newWords}`;
           btn.innerHTML = "start again";
           guess.classList.toggle('hidden');
           guess.value = "";
        }
        else{
            console.log('incorrect');
            msg.innerHTML= `Sorry Its's correct. Try again ${ranWords}`;
        }
    }

})