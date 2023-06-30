import {HeaderInterface} from "../../../core/interfaces/header.interface";
import {Trans} from "react-i18next";

const DISCOVERY_HEADERS: HeaderInterface[] = [
    {
        name: <Trans>Discovered device</Trans>,
        key: 'discovered_device',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Monitored host</Trans>,
        key: 'monitored_host',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Uptime/Downtime</Trans>,
        key: 'up_time',
        sortable: true,
        enabled: true,
    }
];

export {
    DISCOVERY_HEADERS,
}
