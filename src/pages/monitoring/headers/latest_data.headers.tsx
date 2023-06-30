import {HeaderInterface} from "../../../core/interfaces/header.interface";
import {Trans} from "react-i18next";

const LATEST_DATA_HEADERS: HeaderInterface[] = [
    {
        name: <Trans>Host</Trans>,
        key: 'host',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Name</Trans>,
        key: 'name',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Last check</Trans>,
        key: 'last_check',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Last value</Trans>,
        key: 'last_value',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Change</Trans>,
        key: 'chnage',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Tags</Trans>,
        key: 'tags',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Info</Trans>,
        key: 'info',
        sortable: true,
        enabled: true,
    }
];

export {
    LATEST_DATA_HEADERS,
}
