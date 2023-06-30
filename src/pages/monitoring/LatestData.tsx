import {useState} from "react";
import {HeaderInterface} from "../../core/interfaces/header.interface";
import {LATEST_DATA_HEADERS} from "./headers/latest_data.headers";

const LatestData= () => {
    const [headers, setHeaders] = useState<HeaderInterface[]>(LATEST_DATA_HEADERS)
    return <></>;
}

export default LatestData;
