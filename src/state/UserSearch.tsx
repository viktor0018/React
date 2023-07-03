import { useState } from "react";


const users = [
  {name: 'Sarach', age: 20},
  {name: 'Piter', age: 30},
  {name: 'Alex', age: 40}
]

const UserSearch:React.FC = ()=>{
  const [name, setName] = useState('')
  const [user, setUser] = useState<{name:string, age: number}| undefined>()

  const onClick =()=>{
    const foundUser = users.find((user)=>{
      return user.name === name
    });
    console.log('foundUser',foundUser)
    setUser(foundUser)
  }

  return <div>
    UserSearch
    <input value={name} onChange={e=> setName(e.target.value)}/>
    <button onClick={onClick}>Find User</button>
    <div>
      {user?.name || 'Not found!'}
      {user?.age || ''}
    </div>
  </div>
}


export default UserSearch