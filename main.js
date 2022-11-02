  const smallCup = document.querySelectorAll('.cup-small')
  const liters = document.getElementById('liters')
  const perecentages = document.getElementById('perecentage')
  const remained = document.getElementById('remained')


  updateBigCup()

  smallCup.forEach((cup, idx) => {
      cup.addEventListener('click', () => highLightCups(idx))
  })

  function highLightCups(idx) {
      if (smallCup[idx].classList.contains('full') && !smallCup[idx].nextElementSibling.classList.contains('full')) {
          idx--
      }

      smallCup.forEach((cup, idx2) => {
          if (idx2 <= idx) {
              cup.classList.add('full')

          } else {
              cup.classList.remove('full')
          }
      })
      updateBigCup()
  }

  function updateBigCup() {
      const fullCups = document.querySelectorAll('.cup-small.full').length

      const totalCups = smallCup.length

      if (fullCups === 0) {

          perecentages.style.visibility = 'hidden'
          perecentages.style.height = 0
      } else {
          perecentages.style.visibility = 'visible'
          perecentages.style.height = `${fullCups/totalCups*330}px`

          perecentages.innerText = `${fullCups/totalCups*100}%`
      }

      if (fullCups === totalCups) {
          remained.style.visibility = 'hidden'
          remained.style.height = 0
      }
      //   else {
      //   remained.style.visibility = 'visible'
      //   liters.innerText = `${2-(250 * fullCups / 1000)}`
      //   }

  }