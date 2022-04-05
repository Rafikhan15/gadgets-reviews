import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const Recharts = (props) => {

    const { info } = props
    console.log(info);
    const { month, sell, investment, revenue } = info;
    return (
        <div>
            <LineChart width={600} height={300} >
                <Line type="monotone" dataKey={sell} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey={month} />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Recharts;