import React, {useState} from "react";
import {Form, Table} from "react-bootstrap";
import {HeaderInterface} from "../interfaces/header.interface";
import {get, isEqual} from "lodash";
import {SortOrder} from "../enums/sort-order.enum";
import {HeaderTypesEnum} from "../enums/header-types.enum";


const CustomDataTable = ({
                             headers = [],
                             items = [],
                             total = 0,
                             rowStyles = '',
                             params = {
                                 page: 1,
                                 limit: 10,
                             },
                             filters = [],
                             rowActions = [],
                             actions = [],
                             rowClick = () => {
                             },
                             exportData = () => {
                             },
                             fetchData = () => {
                             }
                         }: any) => {
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<string | null>(null);

    const sortable = (field: string) => {
        if (isEqual(field, sortField)) {
            if (sortOrder === null) {
                setSortOrder(SortOrder.ASC);
            } else if (sortOrder === SortOrder.ASC) {
                setSortOrder(SortOrder.DESC);
            } else if (sortOrder === SortOrder.DESC) {
                setSortField(null);
                setSortOrder(null);
            }
        } else {
            setSortField(field);
            setSortOrder(SortOrder.ASC);
        }
    }

    return <div className="table-responsive rounded pos-relative">
        <Table className={'tx-12'}>
            <thead className={'bg-light'}>
            <tr>
                {headers.filter(({
                                     enabled,
                                     hasAccess
                                 }: any) => enabled && hasAccess).map((header: HeaderInterface, index: number) => <th
                    key={index} className={`fw-normal ${get(header, 'sortable') ? 'fw-bold cursor-pointer' : 'text-muted'}`}
                    style={{width: get(header, 'type') === HeaderTypesEnum.checkbox ? '20px': 'auto'}}
                    onClick={() => {
                        if (get(header, 'sortable')) {
                            sortable(get(header, 'key'));
                        }
                    }}>
                    {get(header, 'type') === HeaderTypesEnum.checkbox && <div className="checkbox">
                        <div className="custom-checkbox custom-control">
                            <Form.Control
                                type="checkbox"
                                className="custom-control-input"
                                id={get(header, 'key')}
                            />
                            <Form.Label
                                htmlFor={get(header, 'key')}
                                className="custom-control-label mt-1"
                            >
                            </Form.Label>
                        </div>
                    </div>}
                    {get(header, 'type') === HeaderTypesEnum.text && <span>
                        {get(header, 'name')}
                        {get(header, 'sortable') &&
                            sortField === get(header, 'key') &&
                            (sortOrder === SortOrder.ASC ? <i className={'fe fe-arrow-up'}/> :
                                sortOrder === SortOrder.DESC ? <i className={'fe fe-arrow-down'}/> : '')}</span>}
                </th>)}
            </tr>
            </thead>
            <tbody>
            {items.map((item: any, idx: number) => <tr key={idx}>
                {headers.filter(({
                                     enabled,
                                     hasAccess
                                 }: any) => enabled && hasAccess).map((header: HeaderInterface, index: number) => <td
                    key={index}>
                    {get(header, 'type') === HeaderTypesEnum.checkbox && <div className="checkbox">
                        <div className="custom-checkbox custom-control">
                            <Form.Control
                                type="checkbox"
                                className="custom-control-input"
                                id={`${get(header, 'key')}-${idx}`}
                            />
                            <Form.Label
                                htmlFor={`${get(header, 'key')}-${idx}`}
                                className="custom-control-label mt-1"
                            >
                            </Form.Label>
                        </div>
                    </div>}
                    {get(header, 'type') === HeaderTypesEnum.text && <span>{get(item, get(header, 'key'))}</span>}
                </td>)}
            </tr>)}
            </tbody>
            {/*<tfoot>123</tfoot>*/}
        </Table>
    </div>
}

export default CustomDataTable;
