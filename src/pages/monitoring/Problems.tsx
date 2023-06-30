import React, {useEffect, useState} from "react";
import {HeaderInterface} from "../../core/interfaces/header.interface";
import {PROBLEM_HEADERS} from "./headers/problem.headers";
import {get, isEmpty} from "lodash";
import {DispatchInterface} from "../../core/interfaces/dispatch.interface";
import Actions from "../../redux/api/actions";
import {EventMethods, HostMethods, MonitoringMethods} from "../../redux/monitoring/Methods";
import {connect} from "react-redux";
import CustomDataTable from "../../core/components/CustomDataTable";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {EventModel} from "../../core/models/monitoring/event.model";
import RightSideFilter from "../../core/components/RightSideFilter";
import {MultiSelect} from "react-multi-select-component";
import {SelectInterface} from "../../core/interfaces/select.interface";
import CustomMultiSelect from "../../core/components/select/CustomMultiSelect";

const Problems = ({items, getItems, totalItems, getTotalCount, events, getEvents, groups, getHostGroups, groupsFetched}: any) => {
    const {t} = useTranslation(['common', 'monitoring']);
    const [filterOpen, setFilterOpen] = useState(true)
    const [headers, setHeaders] = useState<HeaderInterface[]>(PROBLEM_HEADERS)
    const [eventids, setEventids] = useState<string[]>([])
    const [hostGroups, setHostGroups] = useState<SelectInterface[]>([])
    const [hosts, setHosts] = useState<SelectInterface[]>([])
    const [filters, setFilters] = useState<object>({
        show: 1,
        groupids: [],
    })
    useEffect(() => {
        getTotalCount({});
        getItems({});
    }, []);

    // useEffect(() => {
    //     getItems({limit: totalItems});
    // }, [totalItems]);

    useEffect(() => {
        if (!isEmpty(eventids)) {
            getEvents({eventids});
        }
    }, [eventids]);

    useEffect(() => {
        setEventids(items.map(({eventid}: any) => eventid))
    }, [JSON.stringify(items)]);

    groups = groups.map(({name, groupid}: any) => ({label: name, value: groupid}));
    events = events.map((item: any) => new EventModel(item));

    console.log(groupsFetched);

    return <div>
        <Row className={'align-items-center'}>
            <Col lg={6}>
                <h3>{t('Problems', {ns: 'monitoring'})}</h3>
            </Col>
            <Col lg={6} className={'text-end'}>
                <Button variant='' className="btn btn-outline-light border" onClick={() => {
                    setFilterOpen(true)
                }}>
                    <i className={'fa fa-filter'}></i> {t('Filter')}
                </Button>
            </Col>
        </Row>
        <div className={'border-bottom mt-3 mb-4'}/>
        <CustomDataTable headers={headers} items={events}/>
        <RightSideFilter open={filterOpen} setOpen={setFilterOpen}>
            <div>
                <div className={'mt-3'}>
                    <h6>{t('Show')}</h6>
                    <ButtonGroup aria-label="Basic example">
                        <Button size={'lg'} variant={get(filters, 'show') === 1 ? "primary" : "light"} onClick={() => {
                            setFilters({...filters, show: 1})
                        }}>{t('Recent problems')}</Button>
                        <Button size={'lg'} variant={get(filters, 'show') === 3 ? "primary" : "light"} onClick={() => {
                            setFilters({...filters, show: 3})
                        }}>{t('Problems')}</Button>
                        <Button size={'lg'} variant={get(filters, 'show') === 2 ? "primary" : "light"} onClick={() => {
                            setFilters({...filters, show: 2})
                        }}>{t('History')}</Button>
                    </ButtonGroup>
                </div>
                <div className={''}>
                    <Row>
                        <Col md={6} className={'mt-3'}>
                            <h6>{t('Host groups')}</h6>
                            <CustomMultiSelect
                                value={hostGroups}
                                onChange={(selected: SelectInterface[]) => {
                                    setHostGroups(selected)
                                }}
                                onMenuToggle={(toggle: boolean) => {
                                    if (toggle) {
                                        getHostGroups({})
                                    }}}
                                isLoading={groupsFetched}
                                options={groups}
                                hasSelectAll={true}
                                className=""
                            />
                        </Col>
                        <Col md={6} className={'mt-3'}>
                            <h6>{t('Hosts')}</h6>
                            <MultiSelect

                                value={hosts}
                                onChange={(selected: SelectInterface[]) => {
                                    setHosts(selected)
                                }}
                                labelledBy="Select"
                                options={[]}
                                hasSelectAll
                                className=""
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </RightSideFilter>
    </div>;
}

const mapState = (state: any) => {
    return {
        items: get(state, 'api.data.items-list.data', []),
        events: get(state, 'api.data.events-list.data', []),
        totalItems: get(state, 'api.data.items-total.data', 0),
        groups: get(state, 'api.data.host-groups-list.data', []),
        groupsFetched: get(state, 'api.data.host-groups-list.isFetched', false),
    }
}

const mapDispatch = (dispatch: (config: DispatchInterface) => {}) => {
    return {
        getItems: ({
                       recent = false,
                   }) => dispatch({
            type: Actions.GET_ALL.REQUEST,
            payload: {
                method: MonitoringMethods.problemGet,
                config: {
                    recent,
                },
                storeName: 'items-list',
            }
        }),
        getEvents: ({
                        output = "extend",
                        select_acknowledges = "extend",
                        selectTags = "extend",
                        selectSuppressionData = "extend",
                        selectHosts = ["description", "status", "host"],
                        eventids = []
                    }) => dispatch({
            type: Actions.GET_ALL.REQUEST,
            payload: {
                method: EventMethods.eventGet,
                config: {
                    output,
                    select_acknowledges,
                    selectTags,
                    selectSuppressionData,
                    eventids,
                    selectHosts
                },
                storeName: 'events-list',
            }
        }),
        getHostGroups: ({
                        output = "extend",
                    }) => dispatch({
            type: Actions.GET_ALL.REQUEST,
            payload: {
                method: HostMethods.hostgroupGet,
                config: {
                    output,
                },
                storeName: 'host-groups-list',
            }
        }),
        getTotalCount: ({
                            output = "extend",
                            countOutput = true,
                        }) => dispatch({
            type: Actions.GET_ALL.REQUEST,
            payload: {
                method: MonitoringMethods.problemGet,
                config: {
                    output,
                    countOutput,
                },
                storeName: 'items-total',
            }
        })
    }
}

const connector = connect(mapState, mapDispatch);

export default connector(Problems);
