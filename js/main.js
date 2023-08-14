

              // 52 Lesson   Amaliyot  Dars


const showBtn = document.getElementById('show_btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close_btn')
const overlay= document.getElementById('overlay')


// remowe  

const removeHidden = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

showBtn.addEventListener('click', () => {
  removeHidden()
})

// add  
const addHidden = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}


closeBtn.addEventListener('click', () => {
  addHidden()
})

overlay.addEventListener('click', () => {
  addHidden()
})

document.addEventListener('keydown', (i)=> {
  if (i.key == 'Escape') {
    addHidden()
  }
}) 
  


