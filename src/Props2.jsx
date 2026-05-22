function Props2(Props){
    return(
        <>
        <h1 style={{color:'cyan'}}>STUDENT DETAILS</h1>
        <ul>
            <li>
                <h6>name</h6>
             {Props.Name}
            </li>
            <li>
                <h6>roll number</h6>
                {Props.Roll}
            </li>
            <li>
                <h6>old marks</h6>
                {Props.Marks}
            </li>
            <li>
                <h6>updated marks</h6>
                {Props.Marks+1}
            </li>
        </ul>
         
        </>
    )
}
export default Props2