import { MonthID } from "types/budget";

interface MonthData {
	id: MonthID;
	name: string;
	shortName: string;
}

const months: Record<MonthID, MonthData> = {
	"01": {
		id: "01",
		name: "Janeiro",
		shortName: "Jan",
	},
	"02": {
		id: "02",
		name: "Fevereiro",
		shortName: "Fev",
	},
	"03": {
		id: "03",
		name: "Março",
		shortName: "Mar",
	},
	"04": {
		id: "04",
		name: "Abril",
		shortName: "Abr",
	},
	"05": {
		id: "05",
		name: "Maio",
		shortName: "Mai",
	},
	"06": {
		id: "06",
		name: "Junho",
		shortName: "Jun",
	},
	"07": {
		id: "07",
		name: "Julho",
		shortName: "Jul",
	},
	"08": {
		id: "08",
		name: "Agosto",
		shortName: "Ago",
	},
	"09": {
		id: "09",
		name: "Setembro",
		shortName: "Set",
	},
	"10": {
		id: "10",
		name: "Outubro",
		shortName: "Out",
	},
	"11": {
		id: "11",
		name: "Novembro",
		shortName: "Nov",
	},
	"12": {
		id: "12",
		name: "Dezembro",
		shortName: "Dez",
	},
};

export const getMonthsArray = () => {
	return Object.values(months).sort((a, b) =>
		parseInt(a.id, 10) < parseInt(b.id, 10) ? -1 : 1,
	);
};

export const getMonthId = (date?: Date): MonthID => {
	const dateToUse = date || new Date();

	const month = dateToUse.getUTCMonth() + 1;

	return month.toString().padStart(2, "0") as MonthID;
};

export const getDay = (date?: Date): string => {
	const dateToUse = date || new Date();

	const day = dateToUse.getUTCDate();

	return day.toString().padStart(2, "0");
};

export const getTime = (date?: Date): string => {
	const dateToUse = date || new Date();

	const hours = dateToUse.getHours().toString().padStart(2, "0");
	const minutes = dateToUse.getMinutes().toString().padStart(2, "0");

	return `${hours}:${minutes}`;
};

export const getMonthAndYear = (date?: Date): string => {
	const dateToUse = date || new Date();

	return `${dateToUse.getUTCFullYear()}-${getMonthId(dateToUse)}`;
};

export const getMonthNameAndYear = (date?: Date): string => {
	const dateToUse = date || new Date();

	const monthID = getMonthId(dateToUse);

	return `${months[monthID]?.name} de ${dateToUse.getUTCFullYear()}`;
};

export const getYear = (date?: Date): string => {
	const dateToUse = date || new Date();

	return dateToUse.getUTCFullYear().toString();
};

export const formatFullDate = (date?: Date): string => {
	const dateToUse = date || new Date();

	const monthID = getMonthId(dateToUse);
	const day = getDay(dateToUse);
	const time = getTime(dateToUse);

	return `${day} de ${months[
		monthID
	]?.name?.toLowerCase()} de ${dateToUse.getUTCFullYear()}, as ${time}`;
};

export const getMonthShortName = (monthId: MonthID) => {
	return months[monthId].shortName;
};

export const sortDateYYYYMMDD = (dateA: string, dateB: string) => {
	const [yearA, monthA, dayA] = dateA.split("-").map(parseFloat);
	const [yearB, monthB, dayB] = dateB.split("-").map(parseFloat);

	return new Date(yearA, monthA - 1, dayA).getTime() <
		new Date(yearB, monthB - 1, dayB).getTime()
		? 1
		: -1;
};
