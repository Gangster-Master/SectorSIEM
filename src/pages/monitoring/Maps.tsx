import {useState} from "react";
import {HeaderInterface} from "../../core/interfaces/header.interface";
import {MAPS_HEADERS} from "./headers/maps.headers";

const Maps = () => {
    const [headers, setHeaders] = useState<HeaderInterface[]>(MAPS_HEADERS)
    return <></>;
}

export default Maps;
