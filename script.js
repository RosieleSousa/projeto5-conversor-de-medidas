let meters = prompt('digite um valor em metros:')
let choosemeters = prompt(`Agora, selecione uma opção abaixo para converter, entre:
1 - milímetro (mm)
2 - centímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)`)
switch (choosemeters) {
  case 'milímetro' :
 console.log(`${meters} equivale a ${meters * 1000}`)
        break
  case 'centímetro' : 
  console.log(`${meters} equivale a ${meters * 100}`)
        break 
  case 'decímetro' :
 console.log(`${meters} equivale a ${meters * 10}`)
        break 
  case  'decâmetro' :
   console.log(`${meters} equivale a ${meters / 1000}`)
        break 
  case 'hectômetro' :
   console.log(`${meters} equivale a ${meters / 100}`)
        break 
  case 'quilômetro' :
   console.log(`${meters} equivale a ${meters / 10}`)
        break 
   default :
    console.log('Opção inválida!')
}