import React, {useState} from 'react';
import axios from 'axios';


function Data()  {
    const [data, setData] = useState([]);
    axios.get('https://fakestoreapi.com/products')
        .then(res => {
            const data = res.data;
            setData(data);
        })
    console.log(data);
    return {data}

}
export default Data();

