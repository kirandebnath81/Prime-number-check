let nameInput=document.querySelector("#nameInput")
let dateInput=document.querySelector("#dateInput")
let btnPrimary=document.querySelector("#btn-primary")
let outputText=document.querySelector("#outputText")

btnPrimary.addEventListener("click",onClickHandler)

function onClickHandler(){
    let name=nameInput.value 
    let date=dateInput.value 
    date=date.split('/')
    let day=parseInt(date[0])
    let month=parseInt(date[1])
    let isPrime=true

    if(day>31 || month>12 || isNaN(day,month) || day===0 || month===0 || ((month===2) && (day>29)) ||((month===4) && (day>30)) || ((month===6) && (day>30)) || ((month===9) && (day>30)) ||((month===11) && (day>30))   ) {
        outputText.innerText="Enter valid input"
    }else if(day===2){
        outputText.innerText=name+", your birthday is a prime number"
    }else if(day>1){
        for(let i=2; i<day; i++){
            if(day%i===0){
                isPrime=false
            }
        }

        if(isPrime){
            outputText.innerText=name+", your birthday is a prime number"
        }else{
           outputText.innerText=name+", your birthday is a not prime number"
        }
    }
    
}