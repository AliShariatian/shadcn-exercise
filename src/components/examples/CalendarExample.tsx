"use client";

import { FC, useState } from "react";
import { Calendar } from "@/components/base/calendar";
import { convertToPersianDate } from "@/utils";

const CalendarExample: FC = (): JSX.Element => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { full: fullPersianDate } = convertToPersianDate({ date, separator: " / " });

  return (
    <div className="flex flex-col gap-2 w-fit items-center">
      <span dir="rtl" className="text-sm">
        {fullPersianDate}
      </span>

      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </div>
  );
};

export default CalendarExample;
