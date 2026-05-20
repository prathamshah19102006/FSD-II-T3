function Productlist(Props){
    return(
        <>
         {
            Props.obj.map((i)=>(
                <div>
                   <img src={i.image} width='600' height='600   '/>
                   <h2>{i.title}</h2>
                   <h2>{i.price}</h2>
                   <h2>{i.rating}</h2>
                </div>
            ))
         }

        </>
    )
}
export default Productlist