interface ChildProps {
  color: String,
  onClick: ()=>void
}

export const Child = ({color,onClick} : ChildProps) => {
  return <div>
    {color}
    <button onClick={onClick}>click</button>
  </div>
}