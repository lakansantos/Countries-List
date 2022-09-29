// import {countries} from '/src/countries.js'

let totalCountriesText = document.querySelector('.totalCountries')
totalCountriesText.innerText = `Total number of countries: ${countries.length}`


let getCountries = () =>{
    
    let countriesContainer = document.querySelector('.countriesContainer');
    for(let i = 0; i<countries.length; i++){
        let countriesLists = document.createElement('div');
        countriesLists.className='countriesLists';
        countriesLists.innerHTML = `${countries[i].name.toUpperCase()}`
        countriesContainer.appendChild(countriesLists)        
    }
}
let startingWord = () =>{
    let input = document.querySelector('input')
    let countriesContainer = document.querySelector('.countriesContainer');
    input.addEventListener('input', function(e){
    countriesContainer.innerHTML=''
    let p = document.querySelector('.startWith');
    let countriesArr=[];
    for(const country of countries){
        
        let firstLetter = input.value.toUpperCase();

        if(country.name.toUpperCase().startsWith(firstLetter)){
            countriesArr.push(country.name)
            
        }
    }
    let content = ''
    for(let i = 0; i<countriesArr.length; i++){
        let countriesList = document.createElement('div');

       
        
        // if(typeof input.value === 'number'){
        //     countriesContainer.innerText='No data found'
        // } 

        
        content= countriesArr[i].toUpperCase();
        countriesList.innerHTML = content
        countriesContainer.appendChild(countriesList)
        countriesList.className='countriesLists';    
    }
    let spanLetter = `Countries containing <span class="spanLetters">${input.value.toUpperCase()}</span> are <span class="spanLetters">${countriesArr.length}</span>`
    p.innerHTML=spanLetter
    
    if(input.value===''||input.value===null||input.value===undefined){
        p.innerHTML=''
    }
    
    if(countriesArr.length ===0){
        countriesContainer.innerHTML= `<h2 class="noDataFound">No Data Found </h2>`
    }

  
})

}

let anyWords = () =>{
    let input = document.querySelector('input')
    let countriesContainer = document.querySelector('.countriesContainer');
    let p = document.querySelector('.startWith');
    
    input.addEventListener('input', function(e){
        let countriesArr =[];
        countriesContainer.innerHTML=''
        for(const country of countries){
            if(country.name.toUpperCase().includes(input.value.toUpperCase())){
                countriesArr.push(country.name);
            }
        }
        let content = ''

        for(let i = 0; i<countriesArr.length; i++){
            let countriesList = document.createElement('div');
           
            content = countriesArr[i].toUpperCase();
            countriesList.innerHTML= content
            countriesContainer.appendChild(countriesList)
            countriesList.className = 'countriesLists'
        }
        let spanLetter = `Countries containing <span class="spanLetters">${input.value.toUpperCase()}</span> are <span class="spanLetters">${countriesArr.length}</span>`
        p.innerHTML=spanLetter
        
        if(input.value===''||input.value===null||input.value===undefined){
            p.innerHTML=''
        }
        if(countriesArr.length ===0){
            countriesContainer.innerHTML= `<h2 class="noDataFound">No Data Found </h2>`
        }
       
    })
   
}


const toggleButtons = () =>{
    let btns = document.querySelectorAll('button')
    let arrow = document.querySelector('.arrowContainer')
    
    
    for(let i = 0; i<btns.length; i++){
       
        btns[i].addEventListener('click', function(){

            let current = document.querySelectorAll('.active')
            if(current.length > 0){
                current[0].className = current[0].className.replace('active', '');
            }
            btns[i].className = 'active'

           
            if(btns[0]===btns[i]){
                input.maxLength = 1;
                startingWord()
            }
            
            if(btns[1]===btns[i]){
                anyWords()
                input.maxLength=50;
            }
            if(btns[2]===btns[i]){
                let countriesContainer = document.querySelector('.countriesContainer');
                countriesContainer.innerHTML=''
                getCountries()
            }
        
        })

    }
   

    let input = document.querySelector('input')



}

toggleButtons()

getCountries()