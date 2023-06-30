import {useState} from "react";
import {HeaderInterface} from "../../core/interfaces/header.interface";
import {DISCOVERY_HEADERS} from "./headers/discovery.headers";

const Discovery = () => {
    const [headers, setHeaders] = useState<HeaderInterface[]>(DISCOVERY_HEADERS)
    return <></>;
}

export default Discovery;
