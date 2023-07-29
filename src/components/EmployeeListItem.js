import '../App.css'
function EmployeeListItem(props){
    return <div className='employlistitem'>
        <img src={props.img} className="image"/>
        <div>
            <h3>{props.name}</h3>
            <p>{props.title}</p>
        </div>
    </div>
}

export default EmployeeListItem;