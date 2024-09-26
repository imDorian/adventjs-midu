function cyberReindeer(road, time) {
    const reglas = {
        carretera: '.',
        trineo: 'S',
        barAbierta: '*',
        barCerrada: '|',
        timeBar: 5
    }
    let times = 1
    let saveChar = reglas.carretera
    let newRoad = [road]

    for (let i = 0; times < time; i++ ) {
        const lastStep = newRoad.slice(-1).join('').split('')
        // console.log(saveChar)
        if (lastStep[i] === reglas.trineo) {

                if (lastStep[i + 1] === reglas.carretera) {
                    const newR = lastStep.toSpliced(i, 2, saveChar, reglas.trineo).join('')
                    newRoad.push(newR)
                    saveChar = reglas.carretera
                    times++
                } else {
                    if (lastStep[i + 1] === reglas.barAbierta) {
                        console.log('puedo pasar')
                        const newR = lastStep.toSpliced(i , 2, saveChar, reglas.trineo).join('').replaceAll(reglas.barCerrada, reglas.barAbierta)
                        newRoad.push(newR)
                        saveChar = reglas.barAbierta
                        times++
                    }
                    if (lastStep[i + 1] === reglas.barCerrada) {

                        for (let index = 0; times < reglas.timeBar ; index++) {
                            newRoad.push(lastStep.join(''))
                            times++
                            if (times === time) {
                                console.log(newRoad)
                                return newRoad
                            }
                        }
                        const newR = lastStep.toSpliced(i , 2, reglas.carretera, reglas.trineo).join('').replaceAll(reglas.barCerrada, reglas.barAbierta)
                        newRoad.push(newR)
                        saveChar = reglas.barAbierta
                        times ++ 

                    }
                }
                
            
        }
    }
}






const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/