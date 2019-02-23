const slideCount = document.querySelectorAll('section').length
document.body.addEventListener('keydown', controls, false)

function controls(event) {
  const isCover = window.location.hash === '' || window.location.hash === '#start'
  if (isCover) {
    start(event)
  } else {
    navigate(event)
  }
}

function start(event) {
  if((event.code === 'Space')|| (event.code === 'ArrowRight')) {
    window.location.hash = '#slide1'
  }
}

function navigate(event) {
  const isFirstSlide = window.location.hash === '#slide1'
  const isLastSlide = window.location.hash === '#slide' + (slideCount - 1)
  const activeSlide = document.querySelector('[id^="slide"]:target')
  const slideNum = parseInt(activeSlide.getAttribute('id').substring(5))

  if(activeSlide && !isLastSlide && ((event.code === 'Space')|| (event.code === 'ArrowRight'))) {
    window.location.hash = 'slide' + (slideNum + 1)
  }
  
  if(!isFirstSlide && (event.code === 'ArrowLeft')) {
    window.location.hash = 'slide' + (slideNum - 1)
  }
  
  if(isLastSlide && event.code === 'KeyR') {
    window.location.hash = '#start'
  }
}