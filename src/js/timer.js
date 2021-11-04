import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
    startBtn : document.querySelector("button[data-start]"),
}
refs.startBtn.setAttribute("disabled", true)

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const selectedDateTime = selectedDates[0].getTime();
        const currentTime = Date.now()
        
        // if(selectedDateTime < currentTime){
        //     Notiflix.Notify.failure(`Please choose a date in the future`);
        // } else {
            
        //     refs.startBtn.disabled = false;
        // }
        selectedDateTime < currentTime ? Notiflix.Notify.failure(`Please choose a date in the future`) : refs.startBtn.disabled = false;
        
    },
});
        
        



