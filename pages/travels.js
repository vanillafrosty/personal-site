import dynamic from "next/dynamic";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

// const markers = {
//   features: [
//     {
//       id: 1,
//       name: "Cantina Mayahuel",
//       description: "Good spot for tacos and mezcal.",
//       geometry: {
//         type: "Point",
//         coordinates: [-75.546518086577947, 45.467134581917357],
//       },
//     },
//     {
//       id: 2,
//       name: "El Pescador Fish Market",
//       description: "Good spot for fish and seafood stuff.",
//       geometry: {
//         type: "Point",
//         coordinates: [32.8398052313514, -117.27631336345621],
//       },
//     },
//   ],
// };

const DynamicMap = dynamic(() => import("../components/map"), { ssr: false });

const TravelsPage = () => {
  return (
    <>
      <DynamicMap />
      <div className="overflow-y-scroll">
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the map.
          </div>
        </div>
        <div className="flex justify-center mt-2 text-xl">
          <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
          <div>
            Click on a marker or shape and reviews will appear below the hello
            world.
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelsPage;
