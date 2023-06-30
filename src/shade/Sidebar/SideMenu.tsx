import { Trans } from "react-i18next";

export const MENUITEMS = [
    {
        menutitle: '',
        Items: [
            {
                path: '/monitoring',
                title: <Trans>Monitoring</Trans>,
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 576 512">
                        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/>
                    </svg>
                ),
                type: "sub",
                selected: false,
                active: false,
                children: [
                    {
                        path: `dashboard`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Dashboard</Trans>,
                    },
                    {
                        path: `problems`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Problems</Trans>,
                    },
                    {
                        path: `hosts`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Hosts</Trans>,
                    },
                    {
                        path: `latest-data`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Latest data</Trans>,
                    },
                    {
                        path: `maps`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Maps</Trans>,
                    },
                    {
                        path: `discovery`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Discovery</Trans>,
                    },
                ],
            }
        ],
    },
    {
        menutitle: "",
        Items: [
            {
                path: "/services",
                title: <Trans>Services</Trans>,
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512">
                        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                    </svg>
                ),
                type: "sub",
                selected: false,
                active: false,
                children: [
                    {
                        path: `services`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Services</Trans>,
                    },
                    {
                        path: `services-action`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Services action</Trans>,
                    },
                    {
                        path: `sla`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>SLA</Trans>,
                    },
                    {
                        path: `sla-report`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>SLA report</Trans>,
                    },
                    
                ],
            },
        ],
    },

    {
        menutitle: "",
        Items: [
            {
                path:"/inventory",
                title: <Trans>Inventory</Trans>,
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512">
                        <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
                    </svg>
                ),
                type: "sub",
                selected: false,
                active: false,
                children: [
                    {
                        path: `overview`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Overview</Trans>,
                    },
                    {
                        path: `hosts`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Hosts</Trans>,
                    },
                ],
            },
            {
                path:"/reports",
                title: <Trans>Reports</Trans>,
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512">
                        <path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>
                    </svg>
                ),
                type: "sub",
                selected: false,
                active: false,
                children: [
                    {
                        path: `system-information`,
                        title: <Trans>System information</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `scheduled-reports`,
                        title: <Trans>Scheduled reports</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `availability-report`,
                        title: <Trans>Availability report</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `triggers-top`,
                        title: <Trans>Triggers top 100</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `audit`,
                        title: <Trans>Audit</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `action-log`,
                        title: <Trans>Action log</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `notifications`,
                        title: <Trans>Notifications</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                ],
            },
            {
                path:"/configuration",
                title: <Trans>Configuration</Trans>,
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512">
                        <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                    </svg>
                ),
                type: "sub",
                selected: false,
                bookmark: true,
                active: false,
                children: [
                    {
                        path: `host-groups`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Host groups</Trans>,
                    },
                    {
                        path: `templates`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Templates</Trans>,
                    },
                    {
                        path: `hosts`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Hosts</Trans>,
                    },
                    {
                        path: `maintenance`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Maintenance</Trans>,
                    },
                    {
                        path: `actions`,
                        type: "sub",
                        active: false,
                        selected: false,
                        title: <Trans>Actions</Trans>,
                        children: [
                            {
                                path: `trigger-actions`,
                                title: <Trans>Trigger actions</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `discovery-actions`,
                                title: <Trans>Discovery actions</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `autoregistration-actions`,
                                title: <Trans>Autoregistration actions</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `internal-actions`,
                                title: <Trans>Internal actions</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                        ]
                    },

                    {
                        path: `event-correlation`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Event correlation</Trans>,
                    },
                    {
                        path: `discovery`,
                        type: "link",
                        active: false,
                        selected: false,
                        title: <Trans>Discovery</Trans>,
                    },
                ],
            },
        ],
    },

    {
        menutitle: "",
        Items: [
            {
                path:"/administration",
                title: <Trans>Administration</Trans>,
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512">
                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                    </svg>
                ),
                type: "sub",
                selected: false,
                active: false,
                children: [
                    {
                        path:"general",
                        title: <Trans>General</Trans>,
                        type: "sub",
                        selected: false,
                        active: false,
                        children: [
                            {
                                path: `gui`,
                                title: <Trans>GUI</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `autoregistration`,
                                title: <Trans>Autoregistration</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `housekeeping`,
                                title: <Trans>Housekeeping</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `audit-log`,
                                title: <Trans>Audit log</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `images`,
                                title: <Trans>Images</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `icon-mapping`,
                                title: <Trans>Icon mapping</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `regular-expressions`,
                                title: <Trans>Regular expressions</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `macros`,
                                title: <Trans>Macros</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `trigger-displaying-options`,
                                title: <Trans>Trigger displaring options</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `geographical-maps`,
                                title: <Trans>Geographical maps</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `modules`,
                                title: <Trans>Modules</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `api-tokens`,
                                title: <Trans>Api tokens</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `other`,
                                title: <Trans>Other</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                        ],
                    },
                    {
                        path: `proxies`,
                        title: <Trans>Proxies</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `authentication`,
                        title: <Trans>Authentication</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `user-groups`,
                        title: <Trans>User groups</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `user-roles`,
                        title: <Trans>User roles</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `users`,
                        title: <Trans>Users</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `madia-types`,
                        title: <Trans>Media types</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path: `scripts`,
                        title: <Trans>Scripts</Trans>,
                        type: "link",
                        active: false,
                        selected: false,
                    },
                    {
                        path:"queue",
                        title: <Trans>Queue</Trans>,
                        type: "sub",
                        selected: false,
                        active: false,
                        children: [
                            {
                                path: `queue-overview`,
                                title: <Trans>Queue overview</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `queue-overview-by-proxy`,
                                title: <Trans>Queue overview by proxy</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                            {
                                path: `queue-details`,
                                title: <Trans>Queue details</Trans>,
                                type: "link",
                                active: false,
                                selected: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
