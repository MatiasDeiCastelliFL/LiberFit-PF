import React from "react";


const Calendar = () => {

    const [date, setDate] = React.useState(new Date());

    const [currentDay, setDay] = React.useState(date.getDate());
    const [weekDay, setWeekDay] = React.useState(date.getDay());

    

    const setWeekDays = (currentDay:any) => {
        let weekDays = [];

        for (let i = -3; i < 4; i++) {
            if (currentDay+i < 0){
                weekDays.push(31 + (currentDay+i));
            }
            else if (currentDay+i > 31){
                weekDays.push(currentDay+i - 31);
            }
            else{
                weekDays.push(currentDay+i);
            }
        }
        return weekDays;

    }

    const setWeekDaysNames:any = (weekDay:any)  => {
        let weekDaysNames = [];

        for (let i = -3; i < 4; i++) {
            if (weekDay+i <= 0){
                weekDaysNames.push(7 + (weekDay+i));
            }
            else if (weekDay+i > 7){
                weekDaysNames.push(weekDay+i - 7);
            }
            else{
                weekDaysNames.push(weekDay+i);
            }
        }

        return weekDaysNames.map((day: any) => {
            switch (day) {
                case 1:
                    return 'Lunes';
                case 2:
                    return 'Martes';
                case 3:
                    return 'Miercoles';
                case 4:
                    return 'Jueves';
                case 5:
                    return 'Viernes';
                case 6:
                    return 'Sabado';
                case 7:
                    return 'Domingo';
                default:
                    return 'Error';
            }
        })
    }
    const [week, setWeek] = React.useState<any>(setWeekDays(currentDay));
    const [weekDaysName, setWeekDaysName] = React.useState<any>(setWeekDaysNames(weekDay));


    React.useEffect(() => {
        setWeek(setWeekDays(currentDay));
        setWeekDaysName(setWeekDaysNames(weekDay));
    }, [currentDay, weekDay]);
    console.log('sdasda',week)


    return (

    <div className="">

        <div  className='flex bg-gray-100 shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll py-2 px-2 md:mx-12'>
            {
                (week)?
                <>
                    {
                        week.map((day:any, index:any) => {
                            return (
                                <div key={Math.random()} className={`flex group  hover:bg-purple-100 ${day===currentDay? 'bg-redClare':null} hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300  cursor-pointer justify-center w-full`}>
                                    <div className='flex items-center px-4 py-4'>
                                        <div className='text-center'>
                                            <p className='text-gray-900 font-semibold group-hover:text-purple-900 text-sm transition-all duration-300'>{weekDaysName[index]}</p>
                                            <p className='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'>{day}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
                :
                <div className="w-screen">
                    <p>loading</p>
                    <p>asdasd</p>
                </div>
            }
        </div>
    </div>

    )
}

export default Calendar