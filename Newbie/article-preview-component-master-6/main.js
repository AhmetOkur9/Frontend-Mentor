const detailBtn = document.querySelector('#detail-btn')

const shareDiv = document.querySelector('.share-div')

const hiddenClass = document.querySelector('.hidden')

const shareButtonDiv = document.querySelector('#div-2')


addEventListener()

function addEventListener(){
    detailBtn.addEventListener('click',function(event){
        if(shareDiv.classList.contains("hidden")){
            shareDiv.classList.remove("hidden")
            
            
        }else{
            shareDiv.classList.add("hidden")
        }
        
    })

    shareButtonDiv.addEventListener('click',function(event){
        if(shareDiv.classList.contains("hidden")){
            shareDiv.classList.remove("hidden")
            
            
        }else{
            shareDiv.classList.add("hidden")
        }
    })
    

    

    
}

