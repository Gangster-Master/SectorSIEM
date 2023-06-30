import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Loader from "./shade/Loaders/Loaders";
import Auth from "./Authentication/auth";
import IsGuest from "./core/guards/IsGuest";
import IsLoggedIn from "./core/guards/IsLoggedIn";


const App = React.lazy(() => import("../src/shade/layouts/App"));
const Error404 = React.lazy(() =>
    import("./components/Pages/Authentication/404Error/404Error")
);
const AuthLogin = React.lazy(() => import("./Authentication/Login"));

// Monitoring
const Dashboard = React.lazy(() => import("./pages/monitoring/Dashboard"));
const Problems = React.lazy(() => import("./pages/monitoring/Problems"));
const LatestData = React.lazy(() => import("./pages/monitoring/LatestData"));
const Maps = React.lazy(() => import("./pages/monitoring/Maps"));
const Discovery = React.lazy(() => import("./pages/monitoring/Discovery"));
const Hosts = React.lazy(() => import("./pages/monitoring/Hosts"));

// Services
const Services = React.lazy(() => import("./pages/services/Services"));
const ServicesActions = React.lazy(() => import("./pages/services/ServicesAction"));
const Sla = React.lazy(() => import("./pages/services/Sla"));
const SlaReport = React.lazy(() => import("./pages/services/SlaReport"));

//Inventory
const HostsInventory = React.lazy(() => import("./pages/inventory/Hosts"));
const Overview = React.lazy(() => import("./pages/inventory/Overview"));

//Reports
const SystemInformation = React.lazy(() => import("./pages/reports/SystemInformation"));
const ScheduledReports = React.lazy(() => import("./pages/reports/ScheduledReports"));
const AvailabilityReport = React.lazy(() => import("./pages/reports/AvailabilityReport"));
const TriggersTop = React.lazy(() => import("./pages/reports/TriggersTop"));
const Audit = React.lazy(() => import("./pages/reports/Audit"));
const ActionLog = React.lazy(() => import("./pages/reports/ActionLog"));
const Notification = React.lazy(() => import("./pages/reports/Notifications"));

//Configuration
const HostGroups = React.lazy(() => import("./pages/configuration/HostGroups"));
const Templates = React.lazy(() => import("./pages/configuration/Templates"));
const HostsConfiguration = React.lazy(() => import("./pages/configuration/Hosts"));
const Maintenance = React.lazy(() => import("./pages/configuration/Maintenance"));
const EventCorrelation = React.lazy(() => import("./pages/configuration/EventCorrelation"));
const DiscoveryConfiguration = React.lazy(() => import("./pages/configuration/Discovery"));
const TriggersActions = React.lazy(() => import("./pages/configuration/actions/TriggerActions"));
const DiscoverActions = React.lazy(() => import("./pages/configuration/actions/DiscoveryActions"));
const AutoregistrationActions = React.lazy(() => import("./pages/configuration/actions/AutoregistrationActions"));
const InternalActions = React.lazy(() => import("./pages/configuration/actions/InternalActions"));

//Adminstrations
const Gui = React.lazy(() => import("./pages/adminstration/general/Gui"));
const Autoregistration = React.lazy(() => import("./pages/adminstration/general/Autoregistration"));
const Housekeeping = React.lazy(() => import("./pages/adminstration/general/Housekeeping"));
const AuditLog = React.lazy(() => import("./pages/adminstration/general/AuditLog"));
const Images = React.lazy(() => import("./pages/adminstration/general/Images"));
const IconMapping = React.lazy(() => import("./pages/adminstration/general/IconMapping"));
const RegularExpressions = React.lazy(() => import("./pages/adminstration/general/RegularExpressions"));
const Macros = React.lazy(() => import("./pages/adminstration/general/Macros"));
const TriggerDisplayingOptions = React.lazy(() => import("./pages/adminstration/general/TriggerDisplayingOptions"));
const GeographicalMaps = React.lazy(() => import("./pages/adminstration/general/GeographicalMaps"));
const Modules = React.lazy(() => import("./pages/adminstration/general/Modules"));
const ApiTokens = React.lazy(() => import("./pages/adminstration/general/ApiTokens"));
const Other = React.lazy(() => import("./pages/adminstration/general/Other"));
const Proxies = React.lazy(() => import("./pages/adminstration/Proxies"));
const Authentication = React.lazy(() => import("./pages/adminstration/Authentication"));
const UserGroups = React.lazy(() => import("./pages/adminstration/UserGroups"));
const UserRoles = React.lazy(() => import("./pages/adminstration/UserRoles"));
const Users = React.lazy(() => import("./pages/adminstration/Users"));
const MediaTypes = React.lazy(() => import("./pages/adminstration/MediaTypes"));
const Scripts = React.lazy(() => import("./pages/adminstration/Scripts"));
const QueueOverview = React.lazy(() => import("./pages/adminstration/queue/QueueOverview"));
const QueueOverviewByProxy = React.lazy(() => import("./pages/adminstration/queue/QueueOverviewByProxy"));
const QueueDetails = React.lazy(() => import("./pages/adminstration/queue/QueueDetails"));


const Router = () => (
    <BrowserRouter>
        <IsGuest>
            <React.Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={`/auth`} element={<Auth/>}>
                        <Route index element={<Navigate to="login"/>}/>
                        <Route path='login' element={<AuthLogin/>}/>
                    </Route>
                </Routes>
            </React.Suspense>
        </IsGuest>
        <IsLoggedIn>
            <React.Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={`/`} element={<App/>}>
                        <Route index element={<Navigate to="monitoring"/>}/>
                        <Route path='monitoring'>
                            <Route index element={<Navigate to="problems"/>}/>
                            <Route
                                path={`dashboard`}
                                element={<Dashboard/>}
                            />
                            <Route
                                path={`problems`}
                                element={<Problems/>}
                            />
                            <Route
                                path={`hosts`}
                                element={<Hosts/>}
                            />
                            <Route
                                path={`latest-data`}
                                element={<LatestData/>}
                            />
                            <Route
                                path={`maps`}
                                element={<Maps/>}
                            />
                            <Route
                                path={`discovery`}
                                element={<Discovery/>}
                            />
                        </Route>

                        <Route path='services'>
                            {/* <Route index element={<Navigate to="problems"/>}/> */}
                            <Route
                                path={`services`}
                                element={<Services/>}
                            />
                            <Route
                                path={`services-action`}
                                element={<ServicesActions/>}
                            />
                            <Route
                                path={`sla`}
                                element={<Sla/>}
                            />
                            <Route
                                path={`sla-report`}
                                element={<SlaReport/>}
                            />
                        </Route>


                        <Route path='inventory'>
                            {/* <Route index element={<Navigate to="problems"/>}/> */}
                            <Route
                                path={`overview`}
                                element={<Overview/>}
                            />
                            <Route
                                path={`hosts`}
                                element={<HostsInventory/>}
                            />
                        </Route>


                        <Route path='reports'>
                            {/* <Route index element={<Navigate to="problems"/>}/> */}
                            <Route
                                path={`system-information`}
                                element={<SystemInformation/>}
                            />
                            <Route
                                path={`scheduled-reports`}
                                element={<ScheduledReports/>}
                            />
                            <Route
                                path={`availability-report`}
                                element={<AvailabilityReport/>}
                            />
                            <Route
                                path={`triggers-top`}
                                element={<TriggersTop/>}
                            />
                            <Route
                                path={`audit`}
                                element={<Audit/>}
                            />
                            <Route
                                path={`action-log`}
                                element={<ActionLog/>}
                            />
                            <Route
                                path={`notifications`}
                                element={<Notification/>}
                            />
                        </Route>



                        <Route path='configuration'>
                            {/* <Route index element={<Navigate to="problems"/>}/> */}
                            <Route
                                path={`host-groups`}
                                element={<HostGroups/>}
                            />
                            <Route
                                path={`templates`}
                                element={<Templates/>}
                            />
                            <Route
                                path={`hosts`}
                                element={<HostsConfiguration/>}
                            />
                            <Route
                                path={`maintenance`}
                                element={<Maintenance/>}
                            />
                            <Route  path={`actions`}>

                                <Route
                                    path={`trigger-actions`}
                                    element={<TriggersActions/>}
                                />
                                <Route
                                    path={`discovery-actions`}
                                    element={<DiscoverActions/>}
                                />
                                <Route
                                    path={`autoregistration-actions`}
                                    element={<AutoregistrationActions/>}
                                />
                                <Route
                                    path={`internal-actions`}
                                    element={<InternalActions/>}
                                />

                            </Route>
                            <Route
                                path={`event-correlation`}
                                element={<EventCorrelation/>}
                            />
                            <Route
                                path={`discovery`}
                                element={<DiscoveryConfiguration/>}
                            />
                        </Route>


                        <Route path='administration'>
                            {/* <Route index element={<Navigate to="problems"/>}/> */}
                            
                            <Route  path={`general`}>

                                <Route
                                    path={`gui`}
                                    element={<Gui/>}
                                />
                                <Route
                                    path={`autoregistration`}
                                    element={<Autoregistration/>}
                                />
                                <Route
                                    path={`housekeeping`}
                                    element={<Housekeeping/>}
                                />
                                <Route
                                    path={`audit-log`}
                                    element={<AuditLog/>}
                                />
                                <Route
                                    path={`images`}
                                    element={<Images/>}
                                />
                                <Route
                                    path={`icon-mapping`}
                                    element={<IconMapping/>}
                                />
                                <Route
                                    path={`regular-expressions`}
                                    element={<RegularExpressions/>}
                                />
                                <Route
                                    path={`macros`}
                                    element={<Macros/>}
                                />
                                <Route
                                    path={`trigger-displaying-options`}
                                    element={<TriggerDisplayingOptions/>}
                                />
                                <Route
                                    path={`geographical-maps`}
                                    element={<GeographicalMaps/>}
                                />
                                <Route
                                    path={`modules`}
                                    element={<Modules/>}
                                />
                                <Route
                                    path={`api-tokens`}
                                    element={<ApiTokens/>}
                                />
                                <Route
                                    path={`other`}
                                    element={<Other/>}
                                />

                            </Route>

                            <Route
                                path={`proxies`}
                                element={<Proxies/>}
                            />
                            <Route
                                path={`authentication`}
                                element={<Authentication/>}
                            />
                            <Route
                                path={`user-groups`}
                                element={<UserGroups/>}
                            />
                            <Route
                                path={`user-roles`}
                                element={<UserRoles/>}
                            />
                            
                            <Route
                                path={`users`}
                                element={<Users/>}
                            />
                            <Route
                                path={`madia-types`}
                                element={<MediaTypes/>}
                            />
                            <Route
                                path={`scripts`}
                                element={<Scripts/>}
                            />

                            <Route  path={`queue`}>
                                <Route
                                    path={`queue-overview`}
                                    element={<QueueOverview/>}
                                />
                                <Route
                                    path={`queue-overview-by-proxy`}
                                    element={<QueueOverviewByProxy/>}
                                />
                                <Route
                                    path={`queue-details`}
                                    element={<QueueDetails/>}
                                />
                            </Route>
                        </Route>
                        <Route path="*" element={<Error404/>}/>
                    </Route>
                </Routes>
            </React.Suspense>
        </IsLoggedIn>
    </BrowserRouter>
);


export default Router;
