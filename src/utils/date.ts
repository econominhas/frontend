import { MonthID } from "types/budget";

interface MonthData {
	name: string;
	shortName: string;
}

const months: Record<MonthID, MonthData> = {
	"01": {
		name: "Janeiro",
		shortName: "Jan",
	},
	"02": {
		name: "Fevereiro",
		shortName: "Fev",
	},
	"03": {
		name: "Março",
		shortName: "Mar",
	},
	"04": {
		name: "Abril",
		shortName: "Abr",
	},
	"05": {
		name: "Maio",
		shortName: "Mai",
	},
	"06": {
		name: "Junho",
		shortName: "Jun",
	},
	"07": {
		name: "Julho",
		shortName: "Jul",
	},
	"08": {
		name: "Agosto",
		shortName: "Ago",
	},
	"09": {
		name: "Setembro",
		shortName: "Set",
	},
	"10": {
		name: "Outubro",
		shortName: "Out",
	},
	"11": {
		name: "Novembro",
		shortName: "Nov",
	},
	"12": {
		name: "Dezembro",
		shortName: "Dez",
	},
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

export const getMonthNameAndYear = (): string => {
	const monthID = getMonthId();

	return `${months[monthID].name} de ${new Date().getUTCFullYear()}`;
};

export const getMonthShortName = (monthId: MonthID) => {
	return months[monthId].shortName;
};

export const sortDateDDMM = (dateA: string, dateB: string) => {
	const [dayA, monthA, yearA] = dateA.split("-").map(parseFloat);
	const [dayB, monthB, yearB] = dateB.split("-").map(parseFloat);

	return new Date(yearA, monthA - 1, dayA).getTime() <
		new Date(yearB, monthB - 1, dayB).getTime()
		? 1
		: -1;
};
