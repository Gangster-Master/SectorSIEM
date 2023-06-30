import {Trans} from "react-i18next";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import moment from "moment";
import {DATETIME} from "../../constants/date.constants";
import {Link} from "react-router-dom";

export class ProblemModel {
    name: string = '';
    severity: string = '';
    clock: string = '';
    r_clock: string = '';

    constructor(data: any) {
        Object.assign(this, data);
    }

    get severityHtml() {
        switch (this.severity) {
            case '1': return <span className={'tx-info'}><Trans>Information</Trans></span>
            case '2': return <span className={'tx-warning'}><Trans>Warning</Trans></span>
            case '3': return <span className={'tx-orange'}><Trans>Average</Trans></span>
            case '4': return <span className={'tx-pink'}><Trans>High</Trans></span>
            case '5': return <span className={'tx-danger'}><Trans>Disaster</Trans></span>
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
        if(parseInt(this.clock) > 0) {
            return <Link className={'tx-info text-decoration-underline'} to={'/monitoring/problems'}>{moment(parseInt(this.clock) * 1000).format(DATETIME)}</Link>
        }
        return '';
    }
    get rClockHtml() {
        if(parseInt(this.r_clock) > 0) {
            return <Link className={'tx-info text-decoration-underline'} to={'/monitoring/problems'}>{moment(parseInt(this.r_clock) * 1000).format(DATETIME)}</Link>
        }
        return '';
    }
}
