

function Cards(props) {
 
  return (
   <div style={{backgroundColor: "skyblue", display: "block", width: "400px", height:"400px", margin:"20px auto", paddingLeft:"50px"}}>
   <h2>{props.name}</h2>
   <img src={props.img} alt="" />
   <h4 style={{marginTop:"30px"}}>{props.phone}</h4>
   <h5 style={{marginTop:"30px"}}>{props.email}</h5>
  
   
   
   </div>
  )

}
export default Cards;