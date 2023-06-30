import {HeaderInterface} from "../../../core/interfaces/header.interface";
import {Trans} from "react-i18next";

const MAPS_HEADERS: HeaderInterface[] = [
    {
        name: <Trans>Name</Trans>,
        key: 'name',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Width</Trans>,
        key: 'width',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Height</Trans>,
        key: 'height',
        sortable: true,
        enabled: true,
    },
    {
        name: <Trans>Actions</Trans>,
        key: 'actions',
        sortable: true,
        enabled: true,
    }
];

export {
    MAPS_HEADERS,
}
