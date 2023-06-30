import {HeaderInterface} from "../../../core/interfaces/header.interface";
import {Trans} from "react-i18next";
import {HeaderTypesEnum} from "../../../core/enums/header-types.enum";

const PROBLEM_HEADERS: HeaderInterface[] = [
    {
        name: <Trans>Time</Trans>,
        key: 'clockHtml',
        sortable: true,
        enabled: true,
        hasAccess: true,
        type: HeaderTypesEnum.text,
    },
    {
        name: '',
        key: 'checkbox',
        type: HeaderTypesEnum.checkbox,
        sortable: false,
        enabled: true,
        hasAccess: true,
        exportable: false,
    },
    {
        name: <Trans>Severity</Trans>,
        key: 'severityHtml',
        type: HeaderTypesEnum.text,
        sortable: true,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Recovery time</Trans>,
        key: 'rClockHtml',
        type: HeaderTypesEnum.text,
        sortable: false,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Status</Trans>,
        key: 'statusHtml',
        type: HeaderTypesEnum.text,
        sortable: false,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Info</Trans>,
        key: 'info',
        type: HeaderTypesEnum.text,
        sortable: false,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Host</Trans>,
        key: 'hostName',
        type: HeaderTypesEnum.text,
        sortable: true,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Problem</Trans>,
        key: 'nameHtml',
        type: HeaderTypesEnum.text,
        sortable: true,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Duration</Trans>,
        key: 'duration',
        type: HeaderTypesEnum.text,
        sortable: false,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Ack</Trans>,
        key: 'ack',
        type: HeaderTypesEnum.text,
        sortable: false,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Actions</Trans>,
        key: 'actions',
        type: HeaderTypesEnum.text,
        sortable: false,
        enabled: true,
        hasAccess: true,
    },
    {
        name: <Trans>Tags</Trans>,
        key: 'tagsHtml',
        type: HeaderTypesEnum.text,
        sortable: false,
        enabled: true,
        hasAccess: true,
    },
];

export {
    PROBLEM_HEADERS,
}
