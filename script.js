class MyDate{
    constructor(day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(day){    
        this.day = day;
    }
    setMonth(month){
        this.month=month;
    }
    setYear(year){
        this.year=year;
    }
}
let date = new MyDate(22,3,2021);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
date.setDay(23);
date.setMonth(03);
date.setYear(2022);
alert(date.getDay() + "/" + date.getMonth() + "/" + date.getYear());