import React, { useState } from 'react';

const Data = ({apiData}) => {
  return (
    <div>
        <ul>
            {apiData[0]?.map(data => (
                <li key = {data.id}>{data.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Data