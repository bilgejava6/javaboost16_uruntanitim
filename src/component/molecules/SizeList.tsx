import React, { useState } from 'react'

function SizeList() {
  const [sizeList, setSizeList] = useState<string[]>([]);  
  const [sizeValue,setSizeValue] = useState('');
  const add = (size: string)=>{
    setSizeList([...sizeList, size]);
    setSizeValue('');
  }
  /**
   * TODO: Daha verimli bir versiyonuna bakalım.
   * @param removeIndex 
   */
  const remove = (removeIndex: number)=>{
    let newList: string[] = [];
    sizeList.forEach((s,index)=>{
        if(index !== removeIndex)
            newList.push(s)
    })    
    setSizeList(newList);
  }
  return (
    <div>
        <input type="text" className="form-control" value={sizeValue} onChange={evt=> setSizeValue(evt.target.value)} onKeyDown={(evt)=>{
            if(evt.key === 'Enter'){
                if(sizeValue.trim() !== '')
                    add(sizeValue)
            }
        }} />
        <div className='row m-3'>
            {
                sizeList.map((s,index)=>{
                    return <div className="col-4 mb-2">
                            <label style={{border: '1px solid grey', padding: '9px 15px', borderRadius: '10px', marginRight: '10px'}}> {s} </label> 
                            <button onClick={()=>{remove(index)}} className='btn btn-danger'> X </button>
                           </div>
                })
            }
                       
        </div>
    </div>
  )
}

export default SizeList