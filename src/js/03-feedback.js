
// const date1 = Date.now();
// // console.log(date1);

// setTimeout(function() {
//     const date2 = Date.now();

//     console.log(date1);
//     console.log(date2);
//     console.log(date2 - date1);
// }, 3000);
// =================== //

const timer = {
    start(){
        const startTime = Date.now()
        setInterval(() => {
           const currentTime = Date.now();

        //    console.log(currentTime - startTime);
        }, 1000);
    }
}

timer.start()