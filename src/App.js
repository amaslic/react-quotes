import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
 const API = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";
  const [quote, setQuote] = useState("");

 const randomQuote = function(){
	 fetch(API).then((res) => res.json()).then((data) => setQuote(data[Math.floor(Math.random() * 10)].content.rendered) )
 }

 useEffect(() => {
  		  	randomQuote();
  	  }, [])

  return (
    <div className="App">
		<h3>Random quotes</h3>
		<p dangerouslySetInnerHTML={{__html: quote}} />
		<button onClick={randomQuote}> New quote </button>
    </div>
  );
}

export default App;
