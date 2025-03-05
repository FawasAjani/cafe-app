import axios from "axios";
import Menu from './menu';
import { useEffect, useState } from "react";
/*Fawas-Ajani-G00413222 */
function Read() {
    // State to store the menu data
    const [data, setData] = useState([]);

    // Function to fetch menudata from the API
    const fetchData = () => {
        axios.get('http://localhost:4000/api/menu')
            .then((response) => {
                // Set the fetched data in the state
                setData(response.data.myMenu);
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
           
            <Menu myMenu={data} setMyMenu={setData} ReloadData={fetchData}></Menu>
        </div>
    );
}

export default Read;//export default read