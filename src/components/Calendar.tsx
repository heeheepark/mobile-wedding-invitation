import "../styles/common.css";
import "../styles/calendar.css";
import ReactCalendar from "react-calendar";
import { calculateDday } from "../utils/date";
import { motion } from "framer-motion";

const Calendar = () => {
  const dDay = calculateDday(new Date(2026, 10, 24));
  const eventDates = ["2026-10-03", "2026-10-05", "2026-10-09"];

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="date-info-wrap">
        <div>2026년 10월 24일 토요일</div>
        <div>오전 11시 30분</div>
      </h3>
      <div className="calendar-wrap">
        <ReactCalendar
          locale="en-US"
          value={new Date(2026, 10, 24)}
          activeStartDate={new Date(2026, 9, 27)}
          showNavigation={false}
          formatDay={(_, date) => date.getDate().toString()}
          formatShortWeekday={(_, date) =>
            ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]
          }
          tileClassName={({ date, view }) => {
            const classes = [];

            if (view === "month" && date.getDay() === 0) {
              classes.push("sunday");
            }

            const formattedDate = formatDate(date);

            if (eventDates.includes(formattedDate)) {
              classes.push("holiday");
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
            <span className="groom-name">시환</span>
            <span>♥</span>
            <span className="bride-name">주희</span>의 결혼식이{" "}
            <span className="dday-count">{dDay}</span>일{" "}
            <span>남았습니다.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Calendar;
