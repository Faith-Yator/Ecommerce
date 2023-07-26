import { orange } from '@mui/material/colors'
import React from 'react'
import Chart from 'react-apexcharts'

const Customerreview = () => {
    const data={
        series:[
            {
                name: 'review',
                data:[10,20,40,78,90,100],
            }
        ],
        options:{
            Chart:{
                type:"area",
                height:" auto",
            }
        },
        fill :{ 
            color:["#fff"],
        type:"gradient",
    },
    dataLabels:{
        enabled:false,
    },
    stroke:{
        curve:"smooth",
        colors:[' orange']
    },
    tooltip:{
        x:{
            format:"dd/MM/yy HH:mm:ss",
        },
    },
    grid:{
        show:false,
    },
    xaxis:{
        type:"determine",
        categories:[
            "2023-07-19T00:00:000Z",
            "2023-07-19T00:00:000Z",
            "2023-07-19T00:00:000Z",
            "2023-07-19T00:00:000Z",
        ]

    },
    yaxis:{
        show:false
    },
    toolbar:{
        show:false
    }
    }
  return (
    <div className='customerreview'>
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default Customerreview
