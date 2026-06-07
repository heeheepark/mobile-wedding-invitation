import "../styles/common.css";
import "../styles/calendar.css";
import ReactCalendar from "react-calendar";
import { calculateDday } from "../utils/date";

const Calendar = () => {
  const dDay = calculateDday(new Date(2026, 10, 24));

  return (
    <div className="section">
      <h3 className="date-info-wrap">
        <div>2026년 10월 24일 토요일</div>
        <div>오전 11시 30분</div>
      </h3>
      <div className="callendar-wrap">
        <ReactCalendar
          locale="en-US"
          value={new Date(2026, 10, 24)}
          activeStartDate={new Date(2026, 9, 27)}
          showNavigation={false}
          formatDay={(locale, date) => date.getDate().toString()}
          formatShortWeekday={(locale, date) =>
            ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]
          }
          tileClassName={({ date, view }) => {
            const classes = [];

            if (view === "month" && date.getDay() === 0) {
              classes.push("sunday");
            }

            if (
              date.getFullYear() === 2026 &&
              date.getMonth() === 9 &&
              date.getDate() === 24
            ) {
              classes.push("wedding-day");
            }

            return classes.join(" ");
          }}
        />
      </div>
      <div className="calculate-day-Wrap">
        <div>
          <div>
            <span>시환</span>
            <span>♥</span>
            <span>주희</span> 결혼식이{" "}
            <span className="dday-count">{dDay}</span>일{" "}
            <span>남았습니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
