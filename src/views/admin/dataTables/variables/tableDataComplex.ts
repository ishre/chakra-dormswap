type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

const tableDataComplex: RowObj[] = [
	{
		name: '22BSA10201',
		progress: 75.5,
		status: 'Approved',
		date: '12 Jan 2021'
	},
	{
		name: '22BSA10135',
		progress: 25.5,
		status: 'Denied',
		date: '21 Feb 2021'
	},
	{
		name: '22MEI10041',
		progress: 90,
		status: 'Denied',
		date: '13 Mar 2021'
	},
	{
		name: '22BCY10246',
		progress: 50.5,
		status: 'Approved',
		date: '24 Oct 2022'
	}
];
export default tableDataComplex;
