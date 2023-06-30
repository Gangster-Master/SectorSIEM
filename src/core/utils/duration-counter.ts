const INTERVALS = [
    {
        sec: 31536000,
        label: 'y',
    },
    {
        sec: 2592000,
        label: 'M',
    },
    {
        sec: 86400,
        label: 'd',
    },
    {
        sec: 3600,
        label: 'h',
    },
    {
        sec: 60,
        label: 'm',
    },
    {
        sec: 1,
        label: 's',
    },
]
const durationCounter = (till: number, time: number) => {
    let seconds = till - time;

    const duration = [];
    for (let interval of INTERVALS) {
        let int = Math.floor(seconds / interval.sec);
        if (int >= 1) {
            duration.push(`${int}${interval.label}`);
        }
        if (duration.length === 3) {
            return duration.join(' ');
        }
        if (seconds > 0) {
            seconds -= int * interval.sec;
        }
    }

    return duration.join(' ');
}

export {
    durationCounter,
}
