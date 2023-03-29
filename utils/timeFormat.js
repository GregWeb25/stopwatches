export default function timeFormat(value) {
    function validator(number){
        number.toString();
        return String(number).length === 1 ? `0${number}` : number;
    }

    switch (true) {
        case value < 60: {
            return value;
        }
        case value >= 60 && value < 3600: {
            const minutes = Math.floor(value/60);
            const seconds = value - (minutes*60);
            return `${minutes}:${validator(seconds)}`
        }
        case value >= 3600: {
            const hours = Math.floor(value/3600);
            const minutes = Math.floor(value/60)-(hours*60);
            const seconds = value - (minutes*60 + hours*3600);
            return `${hours}:${validator(minutes)}:${validator(seconds)}`
        }
    }
}