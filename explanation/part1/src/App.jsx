const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by Daniek
    </div>
  )
}

const App = () => {
  const friends = [
    {name: "Peter", age: 4},
    {name: "Maya", age: 10},
  ]
  // const name = "Peter"
  // const age = 10
  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
    </div>
  )
}

export default App
/* const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return(
    <div>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  )
}
*/
