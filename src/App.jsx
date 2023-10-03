import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import { object } from 'prop-types';

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getcountries = () => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => {
          console.log(res.data);
          setCountries(res.data);
        })
        .catch((error) => console.log(error));
    };

    getcountries();
  }, []);

  return (
    <>
      <div className="grid-cols-5 p-10 grid py-9 gap-10 bg-slate-100 ">
        {countries?.map((item) => (
          <div key={item.con3} className='flex flex-col gap-2 mb-10'>
            <img src={item.flags.png} className='w-inherit'/>
            <p>Country: {item.name.official}</p>
            <p>Population:{item.population}</p>
            <p>Capital: {item.capital}</p>
            <p>Contient:{item.continents}</p>
            <p>Language:{Object.values(item?.languages || {}).map(i => <span key={i}>{i}</span> )}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
