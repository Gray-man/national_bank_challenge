import React from 'react'
import JsonData from './aequitasdata.json'

function JsonDataDisplay(){
      
      const DisplayData = JsonData.map(
            
            (info)=>{
                  return(
                        <tr>
                              <td>{info.TimeStamp}</td>
                              <td>{info.TimeStampEpoch}</td>
                              <td>{info.Direction}</td> 
                              <td>{info.OrderID}</td> 
                              <td>{info.MessageType}</td>
                              <td>{info.Symbol}</td>
                              <td>{info.OrderPrice}</td> 
                              <td>{info.Exchange}</td>
                        </tr>
                  )
            }
      )

      return(

            <div>
                  
                  <table class="table table-striped">
                        <thead>
                              <tr>
                              <th>time</th>
                              <th>timestampepoch</th>
                              <th>direction</th>
                              <th>orderid</th>
                              <th>messagetype</th>
                              <th>symbol</th>
                              <th>price</th>
                              <th>exchange</th>
                              </tr>
                        </thead>
                        <tbody>
                              {DisplayData}
                        </tbody>
                 </table>
            </div>
      )
}

export default JsonDataDisplay;

