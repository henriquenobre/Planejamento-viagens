const ModalDelete ={
    open(){
        document.querySelector('.modal-delete').classList.add('on')    
    },
    close(){
        document.querySelector('.modal-delete').classList.remove('on')
    }
}  
const Modaladd ={
    open(){
        document.querySelector('.modal-add').classList.add('on')    
    },
    close(){
        document.querySelector('.modal-add').classList.remove('on')
    }
}  

const PlanerOn ={
    open1(){
        const addClass = document.querySelector('#viagensInfo1')
        const removeClass = document.querySelector('.on')

        if (addClass){
            addClass.classList.add('on')
        }
        
        if(removeClass){
            removeClass.classList.remove('on')
        }
        
    },
    open2(){
        const addClass = document.querySelector('#viagensInfo2')
        const removeClass = document.querySelector('.on')

        if (addClass){
            addClass.classList.add('on')
        }
        
        if(removeClass){
            removeClass.classList.remove('on')
        }
    }
}  