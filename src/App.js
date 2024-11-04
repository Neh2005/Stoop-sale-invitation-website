import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Message from './components/Message';
import Eventpage from './components/Eventpage'; // Ensure this import is correct

const App = () => {
    const [currentPage, setCurrentPage] = useState('home'); // State to manage current page

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <>
                        <Background />
                        <Message />
                    </>
                );
            case 'event':
                return <Eventpage />;
           
            default:
                return <Background />;
        }
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );
};

export default App;
