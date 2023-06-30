import {Trans} from "react-i18next";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import moment from "moment";
import {DATETIME} from "../../constants/date.constants";
import {Link} from "react-router-dom";
import {get, isEqual} from "lodash";
import {durationCounter} from "../../utils/duration-counter";

export class EventModel {
    name: string = '';
    severity: string = '';
    clock: string = '';
    r_clock: string = '';
    hosts: any[] = [];
    tags: any[] = [];
    acknowledged: string = '';

    constructor(data: any) {
        Object.assign(this, data);
    }

    get severityHtml() {
        switch (this.severity) {
            case '1':
                return <span className={'tx-info'}><Trans ns={'monitoring'}>Information</Trans></span>
            case '2':
                return <span className={'tx-warning'}><Trans ns={'monitoring'}>Warning</Trans></span>
            case '3':
                return <span className={'tx-orange'}><Trans ns={'monitoring'}>Average</Trans></span>
            case '4':
                return <span className={'tx-pink'}><Trans ns={'monitoring'}>High</Trans></span>
            case '5':
                return <span className={'tx-danger'}><Trans ns={'monitoring'}>Disaster</Trans></span>
            default:
                return '';
        }
    }

    get nameHtml() {
        return <OverlayTrigger placement="bottom" overlay={<Tooltip>{this.name}</Tooltip>}>
            <div className={'cursor-pointer white-space-nowrap overflow-hidden overflow text-decoration-underline'} style={{textOverflow: 'ellipsis', maxWidth: '200px'}}>{this.name}</div>
        </OverlayTrigger>
    }

    get clockHtml() {
        if (parseInt(this.clock) > 0) {
            return <Link className={'tx-info text-decoration-underline'} to={'/monitoring/problems'}>{moment(parseInt(this.clock) * 1000).format(DATETIME)}</Link>
        }
        return '';
    }

    get rClockHtml() {
        if (parseInt(this.r_clock) > 0) {
            return <Link className={'tx-info text-decoration-underline'} to={'/monitoring/problems'}>{moment(parseInt(this.r_clock) * 1000).format(DATETIME)}</Link>
        }
        return '';
    }

    get host(): object {
        return get(this, 'hosts[0]', {});
    }

    get statusHtml() {
        return isEqual(get(this.host, 'status'), '0') ? <span className={'tx-danger tx-uppercase'}><Trans>Problem</Trans></span> :
            <span className={'tx-success tx-uppercase'}><Trans>Resolved</Trans></span>
    }

    get hostName() {
        return get(this.host, 'host', '');
    }

    get duration() {
        const r_clock = parseInt(this.r_clock);
        const clock = parseInt(this.clock);
        const now = Math.floor(new Date().getTime() / 1000);
        if (r_clock > 0) {
            return durationCounter(r_clock, clock);
        } else {
            return durationCounter(now, clock);
        }
    }

    get ack() {
        return this.acknowledged === '0' ? <span className={'tx-danger'}><Trans>No</Trans></span> : <span className={'tx-success'}><Trans>Yes</Trans></span>;
    }

    get tagsHtml() {
        return this.tags.map((tag: any, index) => <span key={index} className={'me-1 mb-1 badge badge-pill bg-light tx-11'}>{get(tag, 'tag')}: {get(tag, 'value')}</span>)
    }
}
