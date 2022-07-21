const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "short" });

const formatDate = (date) => formatter.format(date);

export default formatDate;
