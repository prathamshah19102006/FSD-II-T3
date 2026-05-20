function Map1(){
    var data=[{id:1,name:'abc',std:4},{id:2,name:'pqr',std:3}]
    return(
        <>
              {
                data.filter((i)=>i.std===4).map((i)=>(
                    <div key={i.id}>
                        <h2>Name:{i.name.toUpperCase()}</h2>
                        <h2>std:{i.std}</h2>
                    </div>
                ))
              }
        </>
    )
}
export default Map1