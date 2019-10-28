import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';


    {/*fetching API*/}
const aSyncCall = async (query) => {
    {/* '' = normal string
        `` = template literal, allows you to substitute different variables/expression */}
    if (query === '') { return []; }
    const response = await fetch(`http://openlibrary.org/search.json?q=${query}`, { method: 'GET' });
    const myJson = await response.json();
    return myJson.docs;
}

{/* mapping function */}
const mapItem = (doc) => {
    const imageURL = doc.cover_i ? `http://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : `https://via.placeholder.com/150`;
    return {
        title: doc.title,
        id: doc.key,
        author: Array.isArray(doc.author_name) ? doc.author_name.join(', ') : doc.author_name,
        imageURL,
    }
}

function Home() {
    {/*hooks*/}
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');

    useEffect(() => {
        {/*- async to fetch API
        - data from API is stored into apiData by taking in the value of submittedQuery query.value input
        - specific data from mapItem fuction only takes in image, author and title of book and puts it in var book
        - setData puts data from var book into this.state.data and Carousel displays the corresponding data
     */}
        const fetchData = async () => {
            const apiData = await aSyncCall(submittedQuery);
            const book = apiData.map(mapItem);
            setData(book);
        };
        fetchData();
    },[submittedQuery]);

    
    return(
        <div className='home'>
            {/*onChangeInput and query are arguments that are passed into navbar, typing into search bar calls 'setQuery' function to change given search bar input into 'query'*/}
           
            <NavBar onChangeInput={setQuery} query={query} onSubmittedQuery={setSubmittedQuery}/>
            <h2 className="home-welcome">WELCOME TO HONORS LIBRARY</h2>
            <Carousel items={data} />
        </div>
    )
}

export default Home;