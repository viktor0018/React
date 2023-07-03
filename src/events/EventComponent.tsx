const EventComponent: React.FC = ()=>{

  const onChange =(event:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event)
  }

  const onDragStart=(event:React.DragEvent<HTMLInputElement>)=>{
    console.log('i am dragged',event)
  }

  return <div>
    <input onChange={onChange} />
    <br />
    <div draggable onDragStart={onDragStart}>drag me</div>
  </div>
}


export default EventComponent