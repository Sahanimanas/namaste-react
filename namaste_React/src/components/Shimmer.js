const Shimmer = () =>{
    return(
        <div className="shimmer">
        {
            Array(10).fill("").map((e,index)=>{
                <div className="shimmer-card" key={index}></div>
            })
        }
        </div>
        
    )
}
export default Shimmer;