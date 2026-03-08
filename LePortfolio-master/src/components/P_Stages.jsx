import essa from "../assets/essa.png";
import { Link } from 'react-router-dom';

export const old = () => {
  return (
    <>
    <div id="back" className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white opacity-80 mt-40 rounded-lg shadow-lg relative p-6 mx-auto w-full">
        <div className="container w-screen mx-auto p-10">
            <h1 className="text-center p-15">
            <Link to="/Stage1" className="underline text-blue-600 hover:text-blue-800">
                Stage 1
            </Link>
            </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-35">
                <div>
                    <div>
                        <div className="container h-65 rounded bg-gray-300 p-4 transform transition-transform duration-300 hover:scale-105 overflow-hidden flex items-center justify-center">
                            <a href="Reservation" className="w-full h-full">
                                <img src={essa} alt="Description" className="w-full h-full object-cover rounded" />
                            </a>
                        </div>
                        <p className="text-center mt-2">Réservation</p>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="container h-65 rounded bg-gray-300 p-4 transform transition-transform duration-300 hover:scale-105 overflow-hidden flex items-center justify-center">
                            <a href="Bdd" className="w-full h-full">
                                <img src={essa} alt="Description" className="w-full h-full object-cover rounded" />
                            </a>
                        </div>
                        <p className="text-center mt-2">Base de donnée</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="container h-65 rounded bg-gray-300 p-4 transform transition-transform duration-300 hover:scale-105 overflow-hidden flex items-center justify-center">
                            <a href="Cata" className="w-full h-full">
                                <img src={essa} alt="Description" className="w-full h-full object-cover rounded" />
                            </a>
                        </div>
                        <p className="text-center mt-2">Catalogue</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="container w-screen mx-auto p-8">
            <h1 className="text-center p-15">Stage 2</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-35">
                <div>
                <div className="container h-65 rounded bg-gray-300 p-4 transform transition-transform duration-300 hover:scale-105"></div>
                <p className="text-center mt-2">-</p>
                </div>
                <div>
                <div className="container h-65 rounded bg-gray-300 p-4 transform transition-transform duration-300 hover:scale-105"></div>
                <p className="text-center mt-2">-</p>
                </div>
                <div>
                <div className="container h-65 rounded bg-gray-300 p-4 transform transition-transform duration-300 hover:scale-105"></div>
                <p className="text-center mt-2">-</p>
                </div>
            </div>
        </div>     
    </div>
    </div> 
    </>
  );
}

