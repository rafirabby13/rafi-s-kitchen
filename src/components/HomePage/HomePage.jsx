import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen border-2">
            <div className="grid grid-cols-4 gap-4">
                <Outlet/>
                

            </div>
            
        </div>
    );
};

export default HomePage;