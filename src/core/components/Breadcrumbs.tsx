import {BreadcrumbInterface} from "../interfaces/breadcrumb.interface";
import {Breadcrumb} from "react-bootstrap";
import React from "react";
import {useTranslation} from "react-i18next";

const Breadcrumbs = ({items = []}: {items: BreadcrumbInterface[]}) => {
    const {t} = useTranslation();
    return <Breadcrumb className="breadcrumb">
        {items.map(({path, label}) => <Breadcrumb.Item className="breadcrumb-item tx-15" href={path}>
            {t(label)}
        </Breadcrumb.Item>)}
    </Breadcrumb>
}

export default Breadcrumbs;
