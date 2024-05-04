import React from 'react'

function Folder({explorer}) {
  console.log(explorer)

  if(explorer.isFolder){
  return (
    <div style={{marginTop:5, marginLeft : 5}}>
        <div><span>📁{explorer.name}</span></div>
       <div style={{display:'flex', flexDirection:'column'}}>
        {explorer.items.map((exp,i)=>{
           return (
             <span key={exp.name}>
               {exp.name}
             </span>
           )
        })}
       </div>
    </div>
  )}else{
      return  <span>📑<explorer className="name"></explorer>{}</span>
  }
}

export default Folder
