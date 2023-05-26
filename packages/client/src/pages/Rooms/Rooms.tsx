import { Link } from "react-router-dom";

import ImgEmpireStrikes from "assets/rooms/empire-strikes.jpg";
import ImgReturnJedi from "assets/rooms/return-jedi.jpeg";

function Rooms(): JSX.Element {
  return (
    <div className="container mx-auto h-screen pt-10">
      <h1 className=" text-center mb-10 text-4xl font-bold text-gray-500">
        Star Wars Chat Rooms
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-xl hover:bg-base-200 border border-slate-700">
          <div className="card-body flex">
            <div className="flex flex-col items-center">
              <img src={ImgEmpireStrikes} className="h-60 rounded-2xl" />
            </div>
            <div className="divider"></div>
            <div className="card-actions justify-center divide-x-2">
              <Link to="/chat/empire-strikes" className="btn btn-secondary">
                Join Room
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:bg-base-200 border border-slate-700">
          <div className="card-body flex">
            <div className="flex flex-col items-center">
              <img src={ImgReturnJedi} className="h-60 rounded-2xl" />
            </div>
            <div className="divider"></div>
            <div className="card-actions justify-center divide-x-2">
              <Link to="/chat/empire-strikes" className="btn btn-accent">
                Join Room
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
