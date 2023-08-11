import React from 'react'

function Welcome({news}) {
    
  return (
    <div style={{display:"flex",border:"1px solid #ECECEC",borderRadius:"20px"}}>
        <div style={{padding:"30px"}}>
            <h2 style={{fontFamily:"initial",fontSize:"40px"}}>{news[0]?.title}</h2>
            <h2 style={{fontFamily:"initial",color:"#B2B2B2"}}>{news[0]?.description}</h2>
        </div>
      <img style={{width:"550px",height:"400px"}} src={news[0]?.urlToImage}/>
    </div>
  )
}

export default Welcome
