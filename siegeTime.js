function calculateSiegeTime (date) {
    let firstFortressSiegeTime = new Date(date);
    let castleSiegeTime = new Date (firstFortressSiegeTime.getTime() + 14*24*60*60*1000); // calculate the day of next castles sieges <<< KOSYAK IS HERE
    castleSiegeTime.setHours(18,0,0); // set time of castles sieges
    lastATFS = new Date (castleSiegeTime.getTime()- 6*60*60*1000); // the last avaliable time for registration to fortress siege
    for (let futureFortressSiege = firstFortressSiegeTime; futureFortressSiege < lastATFS; futureFortressSiege = new Date(futureFortressSiege.getTime() + 5*60*60*1000)) {
        let year = futureFortressSiege.getFullYear();
        let month = futureFortressSiege.getMonth();
        let day = futureFortressSiege.getDate();
        let restartTimeStart = new Date (year, month, day, 5, 0, 0);
        let restartTimeEnd = new Date (year, month, day, 6, 15, 0 );
        if (futureFortressSiege > restartTimeStart && futureFortressSiege < restartTimeEnd) {
            console.log("Fortress Siege Time (Restart's siege): " + futureFortressSiege.toLocaleTimeString('eu-US') + ' - ' + futureFortressSiege.toDateString())
            futureFortressSiege = new Date (restartTimeEnd.getTime() + 60*60*1000);
        }
        console.log('Fortress Siege Time: ' + futureFortressSiege.toLocaleTimeString('eu-US') + ' - ' + futureFortressSiege.toDateString());
    }
    console.log('First Siege Time: ' + firstFortressSiegeTime.toLocaleTimeString('eu-US') + ' - ' + firstFortressSiegeTime.toDateString());
}
calculateSiegeTime ("2023-12-24T21:05");
