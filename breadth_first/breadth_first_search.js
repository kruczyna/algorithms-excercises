myGraph = new Map()
myGraph.set('me', ['Alice', 'Bob', 'Claire'])
myGraph.set('Bob', ['Anuj', 'Peggy'])
myGraph.set('Alice', ['Peggy'])
myGraph.set('Claire', ['Tom', 'Jonny'])
myGraph.set('Anuj', [])
myGraph.set('Peggy', [])
myGraph.set('Tom', [])
myGraph.set('Jonny', [])

function personIsSeller(name){
  return name == 'Jonny'
}

function search(name){
  let search_queue = []
  let toAdd = myGraph.get(name)
  search_queue.push(...toAdd)
  searched = []
  while(search_queue.length > 0){
    let person = search_queue.shift()
    if (!searched.includes(person)){
      if(personIsSeller(person)){
        console.log(`${person}` + ' is a seller')
        return true
      } else {
        let newLevel = myGraph.get(person)
        search_queue.push(...newLevel)
        searched.push(person)
      }
    }
  }
  console.log('No one is a seller!')
  return false
}

search('me')
