export function renderDate(dateString, format, months) {
    const d = new Date(dateString);
    let str = format;
    str = str.replace(/dd/gi, d.getDate());
    str = str.replace(/mm/gi, months[d.getMonth()]);
    str = str.replace(/yy/gi, d.getFullYear());
    return str;
}
