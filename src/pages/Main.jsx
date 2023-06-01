import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {useState } from 'react';    
const Main = () =>
{
    const [openDrawer, setOpenDrawer] = useState(true);
    const toggleDrawer = () =>
    {
        setOpenDrawer(prevState => !prevState);
    }

    return (
        <div>
            <Header toggleDrawer={toggleDrawer} />
            
            <SideBar openDrawer={openDrawer } />

            <h1>Main Page</h1>
        </div>
    );
};

export default Main;