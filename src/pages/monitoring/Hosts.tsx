import {useState} from "react";
import {HeaderInterface} from "../../core/interfaces/header.interface";
import {HOSTS_HEADERS} from "./headers/hosts.headers";

const Hosts = () => {
    const [headers, setHeaders] = useState<HeaderInterface[]>(HOSTS_HEADERS)
    return <></>;
}

export default Hosts;
