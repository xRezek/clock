function time(){
    let today = new Date();
    let day = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let dayOfWeek = today.getDay();
    let month = today.getMonth();
    const week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wenesday',
        'Thursday',
        'Friday',
        'Saturday'  
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;  
    }
    switch(dayOfWeek){
        case 0:
            dayOfWeek = week[0];
            break; 
        case 1:
            dayOfWeek = week[1];
            break; 
        case 2:
            dayOfWeek = week[2];
            break; 
        case 3:
            dayOfWeek = week[3];
            break; 
        case 4:
            dayOfWeek = week[4];
            break; 
        case 5:
            dayOfWeek = week[5];
            break; 
        case 6:
            dayOfWeek = week[6];
            break; 
        default:
            console.error(dayOfWeek);
            break;
    }

    switch(month){
        case 0:
            month = months[0];
            break;
        case 1:
            month = months[1];
            break;
        case 2:
            month = months[2];
            break;
        case 3:
            month = months[3];
            break;
        case 4:
            month = months[4];
            break;
        case 5:
            month = months[5];
            break;
        case 6:
            month = months[6];
            break;
        case 7:
            month = months[7];
            break;
        case 8:
            month = months[8];
            break;
        case 9:
            month = months[9];
            break;
        case 10:
            month = months[10];
            break;
        case 11:
            month = months[11];
            break;
        default:
            console.error();
    }

    document.getElementById("time").innerHTML= hours + ":" + minutes + ":" + seconds;
    document.getElementById("week").innerHTML = dayOfWeek;
    document.getElementById("month").innerHTML = day + ' ' + month;
    setTimeout(time,1000);
} 
