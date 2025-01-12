import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartComponent from './Chart';
import EVTable from './EVTable';
import Loader from './Loader';

const Dashboard = () => {
    const [evData, setEvData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get('/convertcsv.json')
            .then((response) => {
                setEvData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error loading the data", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="dashboard">
            <h1>Electric Vehicle Dashboard</h1>
            {isLoading ? <Loader />
                :
                <>
                    <ChartComponent evData={evData} />
                    <EVTable evData={evData} />
                </>
            }
        </div>
    );
};

export default Dashboard;
