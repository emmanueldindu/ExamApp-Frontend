import React, {useState, useEffect} from 'react'

function Table() {
    const [data, setData] = useState([])
    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
          setData(res)
        })
      })
  return (
    <div>
       <table className="table-auto w-full overflow-x-scroll md:w-2/3 mx-auto text-left pt-7 relative p-7">
        <thead>
    <tr>
      <th>Name</th>
      <th>Atempts</th>
      <th>Exam points</th>
      <th>Result</th>
              
            </tr>
  </thead>
        <tbody>
          {!data ?? <div>No Data Found</div>}


          {
            data.map((v, i) => (
              <tr className='mx-auto'>
                <td>{v?.username || ''}</td>
                <td>{ v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                
            <td>
              
             {v?.achived || ""}
              </td>
            </tr>
            ))
   }       
            </tbody>
        </table>
  
    </div>
  )
}

export default Table
