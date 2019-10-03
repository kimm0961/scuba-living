import React from 'react';
import Showcase from './Showcase/Showcase';
import Produkter from './Produkter/Produkter';
import Rejser from './Rejser/Rejser';
import Kursus from './Kurser/Kursus';


const Home = () => {
    return ( 
        <div className="Home">
            <Showcase />
            <Produkter />
            <p className="text-center text-uppercase text-big mt-4">Se mere lækkert udstyr her!</p>
            <Rejser />
            <p className="text-center text-uppercase mt-4 text-big">Se flere destinationer og muligheder her!</p>
            <Kursus />
            <p className="text-center text-uppercase text-big mt-4">Se alle kurser og certifikater her!</p>
        </div>
     );
}
 
export default Home;