const cuphead = document.querySelector('.cuphead')
const pipe = document.querySelector('.pipe')

const jump = () => {
  cuphead.classList.add('jump')

  setTimeout(() => {
    cuphead.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const cupheadPosition = +window
    .getComputedStyle(cuphead)
    .bottom.replace('px', '')

  if (pipePosition <= 100 && pipePosition > 0 && cupheadPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    cuphead.style.animation = 'none'
    cuphead.style.bottom = `${cupheadPosition}px`

    cuphead.src = 'images/game-over.png'
    cuphead.style.width = '220px'
    cuphead.style.marginLeft = '-50px'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
