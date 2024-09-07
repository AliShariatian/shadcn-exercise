interface IArgs {
  date: Date | undefined;
  separator?: string;
}

interface IReturn {
  full: string;
  year: string | undefined;
  month: string | undefined;
  day: string | undefined;
}

export default function convertToPersianDate({ date, separator = " " }: IArgs): IReturn {
  const formatter = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const parts = formatter.formatToParts(date);

  const day = parts.find((part) => part.type === "day")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const year = parts.find((part) => part.type === "year")?.value;

  const full = `${day}${separator}${month}${separator}${year}`;

  return { full, year, month, day };
}
