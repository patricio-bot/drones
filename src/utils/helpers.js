export const formatTime = (date) => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let currentTime = `${hours}:${minutes} ${ampm}`;
    return currentTime;
}

export const classType = (traffic) => {
    if (traffic === 'LIGHT') {
        return 'success'
    }
    if (traffic === 'HEAVY') {
        return 'danger'
    }
    if (traffic === 'MODERATE') {
        return 'warning'
    }
}
export const top = () => {
    window.scrollTo(0, 0)
}