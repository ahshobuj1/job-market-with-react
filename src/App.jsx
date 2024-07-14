import {Outlet} from 'react-router-dom';
import Footer from './layout/footer/Footer';
import NabVar from './layout/header/NabVar';

function App() {
    return (
        <>
            <NabVar />
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default App;
