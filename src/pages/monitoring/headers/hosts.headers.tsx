import {HeaderInterface} from "../../../core/interfaces/header.interface";
import {Trans} from "react-i18next";

const HOSTS_HEADERS: HeaderInterface[] = [
    {
        name: <Trans>Name</Trans>,
        key: 'name',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Interface</Trans>,
        key: 'severity',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Availability</Trans>,
        key: 'availability',
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
        name: <Trans>Status</Trans>,
        key: 'status',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Latest data</Trans>,
        key: 'latest_data',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Problems</Trans>,
        key: 'problems',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Graphs</Trans>,
        key: 'graphs',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Dashboards</Trans>,
        key: 'dashboards',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Web</Trans>,
        key: 'web',
        sortable: true,
        enabled: true,
    },
];

export {
    HOSTS_HEADERS,
}
