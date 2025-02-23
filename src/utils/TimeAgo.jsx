
// eslint-disable-next-line react/prop-types
const TimeAgo = ({ dateString }) => {

    const timeAgo = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        const seconds = Math.floor((now - date) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        if (years > 0) {
            return rtf.format(-years, 'year');
        } else if (months > 0) {
            return rtf.format(-months, 'month');
        } else if (weeks > 0) {
            return rtf.format(-weeks, 'week');
        } else if (days > 0) {
            return rtf.format(-days, 'day');
        } else if (hours > 0) {
            return rtf.format(-hours, 'hour');
        } else if (minutes > 0) {
            return rtf.format(-minutes, 'minute');
        } else {
            return rtf.format(-seconds, 'second');
        }
    };

    return (
        <div>
            <span className="text-sm text-gray-500">{timeAgo(dateString)}</span>
        </div>
    );
};

export default TimeAgo;
