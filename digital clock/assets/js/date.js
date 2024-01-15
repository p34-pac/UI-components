export function TheDate() {
    let generalTime = new Date();
    let hour = generalTime.getHours();
    let hour12 = generalTime.getHours();
    if(hour < 10){
        hour = '0'+hour;
    }
    if(hour12 > 12){
        hour12 = hour - 12
    }if(hour12 < 10){
        hour12 = '0'+hour12;
    }
    let mins = generalTime.getMinutes();
    if(mins < 10){
        mins = '0'+mins;
    }
    let secs = generalTime.getSeconds();
    if(secs < 10){
        secs = '0'+secs;
    }
    let moment;
    if(hour > 11){
        moment = 'pm'
    }else if(hour <= 11){
        moment = 'am'
    }
    let monthNum = generalTime.getMonth();
    let year = generalTime.getFullYear();
    let dayNum = generalTime.getDay();
    function changeDay(val){
        let day;
        let allday;
        switch(val){
            case 0: 
                day = 'sunday';
            break;
            case 1: 
                day = 'monday';
            break;
            case 2: 
                day = 'tuesday';
            break;
            case 3: 
                day = 'wednesday';
            break;
            case 4: 
                day = 'thursday';
            break;
            case 5: 
                day = 'friday';
            break;
            case 6: 
                day = 'saturday';
            break;
        }
        let fullDay = day;
        let shortDay = day.slice(0, 3)
        return  allday = {
            fullDay,
            shortDay
        };

    }
    
    let day = changeDay(dayNum)
    
    function changeMonth(val){
        let monthVal, fullMonth, shortMonth;
        switch(val){
            case 0: 
                monthVal = 'january';
            break;
            case 1: 
                monthVal = 'februrary';
            break;
            case 2: 
                monthVal = 'march';
            break;
            case 3: 
                monthVal = 'april';
            break;
            case 4: 
                monthVal = 'may';
            break;
            case 5: 
                monthVal = 'june';
            break;
            case 6: 
                monthVal = 'july';
            break;
            case 7: 
                monthVal = 'august';
            break;
            case 8: 
                monthVal = 'september';
            break;
            case 9: 
                monthVal = 'october';
            break;
            case 10: 
                monthVal = 'november';
            break;
            case 11: 
                monthVal = 'december';
            break;
        }
        fullMonth = monthVal;
        shortMonth = monthVal.slice(0, 3)
        return {
            fullMonth,
            shortMonth
        };
    }
    let monthValue = changeMonth(monthNum)
    let shortMonth = monthValue.shortMonth;
    let fullMonth = monthValue.fullMonth
    let fullDay = day.fullDay
    let shortDay = day.shortDay
    return {
        hour,
        hour12,
        mins,
        secs,
        fullMonth,
        shortMonth,
        day,
        year,
        moment,
        fullDay,
        shortDay
    }
}