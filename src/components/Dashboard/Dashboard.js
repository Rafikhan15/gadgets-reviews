import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
// import useRecharts from '../../hooks/useRecharts';


const Dashboard = () => {
    // const [recharts, setRecharts] = useRecharts();
    const data1 = [
        {
            month: 'Mar',
            investment: 100000,
            sell: 241,
            revenue: 10401,
            year: 2020
        },
        {
            month: 'Apr',
            investment: 200000,
            sell: 423,
            revenue: 24500,
            year: 2020
        },
        {
            month: 'May',
            investment: 500000,
            sell: 726,
            revenue: 67010,
            year: 2020
        },
        {
            month: 'Jun',
            investment: 500000,
            sell: 529,
            revenue: 40405,
            year: 2020
        },
        {
            month: 'Jul',
            investment: 600000,
            sell: '601',
            revenue: 50900,
            year: 2020
        },
        {
            month: 'Aug',
            investment: 700000,
            sell: 670,
            revenue: 61000,
            year: 2020
        }
    ];

    const data2 = [
        {
            month: 'Mar',
            investment: 100000,
            sell: 241,
            revenue: 104000,
            year: 2021
        },
        {
            month: 'Apr',
            investment: 200000,
            sell: 423,
            revenue: 245000,
            year: 2021
        },
        {
            month: 'May',
            investment: 500000,
            sell: 726,
            revenue: 670100,
            year: 2021
        },
        {
            month: 'Jun',
            investment: 500000,
            sell: 529,
            revenue: 404000,
            year: 2021
        },
        {
            month: 'Jul',
            investment: 600000,
            sell: '601',
            revenue: 509000,
            year: 2021
        },
        {
            month: 'Aug',
            investment: 700000,
            sell: 670,
            revenue: 610000,
            year: 2021
        }
    ];



    // console.log(recharts);
    return (
        <div className='flex'>
            <div>
                <span className=''>month vs sell</span>

                <LineChart width={400} height={400} data={data1}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'sell'}></YAxis>
                    <Tooltip />

                </LineChart>

            </div>
            <div>
                <span>month vs investment</span>

                <AreaChart width={400} height={400} data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Area type="monotone" dataKey={'investment'} stroke="#8884d8" fill="#8884d8" />
                    <Tooltip />
                </AreaChart>
            </div>

            <div>
                <span>year vs investment</span>

                <PieChart width={400} height={400}>
                    <Pie data={data1} dataKey={'revenue'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data2} dataKey={'revenue'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />

                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;