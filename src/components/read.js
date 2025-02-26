import axios from "axios";
import Cafe from './cafe';
import { useEffect, useState } from "react";
/*Fawas-Ajani-G00413222 */
function Read() {
    // State to store the coffee data
    const [data, setData] = useState([]);

    // Function to fetch coffee data from the API
    const fetchData = () => {
        axios.get('http://localhost:4000/api/cafe')
            .then((response) => {
                // Set the fetched data in the state
                setData(response.data.myCafe);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {/* Pass the coffee data to the Coffees component */}
            <Cafe myCafe={data} setMyCafe={setData} ReloadData={fetchData}></Cafe>
        </div>
    );
}

export default Read;//export default read