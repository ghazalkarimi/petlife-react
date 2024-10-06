const Calendar = () => {
    return (
        <div>
            <div classNameName="googleCalendar">
                <iframe
                    src="https://calendar.google.com/calendar/embed?title=Set Reminder by Connecting You to Google Calendar&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=8d3fc8l9g04n7r9im45fsn08ak%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FNew_York"
                    style={{ borderWidth: 0 }}
                    width={800}
                    height={600}
                    frameBorder={0}
                    scrolling="no"></iframe>
            </div>
        </div>
    );
}

export default Calendar;