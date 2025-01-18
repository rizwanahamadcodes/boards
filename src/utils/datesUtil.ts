export const formatDate = (date: string | Date, locale = "en-US"): string => {
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
    };

    const parsedDate = typeof date === "string" ? new Date(date) : date;

    return new Intl.DateTimeFormat(locale, options).format(parsedDate);
};
