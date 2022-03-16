import dynamic from "next/dynamic";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const DynamicMap = dynamic(() => import("../components/map"), { ssr: false });

const TravelsPage = () => {
  return (
    <div>
      <div className="flex text-xl justify-center mx-auto mt-12">
        <ExclamationCircleIcon className="place-self-center h-6 w-6 mr-0.5 text-orange-400" />
        <div>
          Click on a marker or shape and reviews will appear below the map.
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-8">
        <DynamicMap />
      </div>
    </div>
  );
};

export default TravelsPage;
