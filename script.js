let users = [{"id":1,"firstname":"Samantha","lastname":"Rolfson","email":"alanna.lang@schaden.com","phone":"+1700761950487","birthday":"1950-12-13","gender":"female","address":{"id":0,"street":"74537 Avis Squares Suite 215","streetName":"Schultz Rapids","buildingNumber":"6505","city":"Colechester","zipcode":"07619-2565","country":"Tajikistan","county_code":"KM","latitude":37.874305,"longitude":-39.784618},"website":"http:\/\/von.info","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":2,"firstname":"Major","lastname":"Osinski","email":"eden.oberbrunner@gmail.com","phone":"+4969689912842","birthday":"1980-03-16","gender":"male","address":{"id":0,"street":"65802 Yost Estates","streetName":"Guiseppe Throughway","buildingNumber":"9890","city":"Luciusberg","zipcode":"05522","country":"American Samoa","county_code":"FO","latitude":81.222619,"longitude":158.922977},"website":"http:\/\/spencer.org","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":3,"firstname":"Samson","lastname":"Legros","email":"tad.weissnat@yahoo.com","phone":"+9203869846878","birthday":"1989-07-23","gender":"male","address":{"id":0,"street":"6017 Ledner Dam","streetName":"Schultz Meadow","buildingNumber":"42868","city":"Loweview","zipcode":"53395-3845","country":"Cambodia","county_code":"MY","latitude":-78.270805,"longitude":33.409116},"website":"http:\/\/franecki.com","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":4,"firstname":"Anais","lastname":"McKenzie","email":"kennedy.ondricka@lesch.com","phone":"+1235010653206","birthday":"2007-01-04","gender":"female","address":{"id":0,"street":"220 Alice Glen","streetName":"Deja Hollow","buildingNumber":"63115","city":"New Michel","zipcode":"04753","country":"Macao","county_code":"QA","latitude":47.619337,"longitude":-137.599578},"website":"http:\/\/howe.com","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":5,"firstname":"Thea","lastname":"Hettinger","email":"deckow.wayne@johnson.info","phone":"+5724095329813","birthday":"2002-05-12","gender":"female","address":{"id":0,"street":"319 Terrell Unions","streetName":"Walker Spurs","buildingNumber":"5392","city":"North Ashlee","zipcode":"21539-2235","country":"Malta","county_code":"BI","latitude":-8.511616,"longitude":175.462012},"website":"http:\/\/wilderman.com","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":6,"firstname":"Gabe","lastname":"Kuhn","email":"jewel85@kulas.com","phone":"+7825640298510","birthday":"1976-08-29","gender":"male","address":{"id":0,"street":"21847 Larson Port","streetName":"Keebler Hills","buildingNumber":"9175","city":"Pourosberg","zipcode":"16647","country":"Syrian Arab Republic","county_code":"MK","latitude":77.964811,"longitude":-50.413928},"website":"http:\/\/davis.info","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":7,"firstname":"Rickey","lastname":"Farrell","email":"pink.wyman@bauch.com","phone":"+3644872483235","birthday":"1996-06-04","gender":"male","address":{"id":0,"street":"909 Lockman Lights","streetName":"Zachery Cape","buildingNumber":"179","city":"North Jamir","zipcode":"72606-2035","country":"Northern Mariana Islands","county_code":"CZ","latitude":-69.33438,"longitude":40.105759},"website":"http:\/\/little.org","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":8,"firstname":"Melvina","lastname":"Mertz","email":"lzemlak@yahoo.com","phone":"+3930066938877","birthday":"1971-04-01","gender":"male","address":{"id":0,"street":"197 Kailee Heights","streetName":"Friesen Run","buildingNumber":"8885","city":"Devyntown","zipcode":"95668-8738","country":"Gibraltar","county_code":"NP","latitude":45.139443,"longitude":71.827955},"website":"http:\/\/russel.biz","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":9,"firstname":"Clarabelle","lastname":"Cremin","email":"jillian.tromp@gmail.com","phone":"+2151108199491","birthday":"1969-07-30","gender":"female","address":{"id":0,"street":"1268 Isabell Spring","streetName":"Scottie Extension","buildingNumber":"59641","city":"Eichmannton","zipcode":"99463","country":"Guernsey","county_code":"KR","latitude":11.007421,"longitude":126.604397},"website":"http:\/\/haag.com","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":10,"firstname":"Miracle","lastname":"Ryan","email":"oconner.viva@gmail.com","phone":"+6291695886392","birthday":"1998-09-18","gender":"female","address":{"id":0,"street":"81943 Quentin Ranch","streetName":"Harvey Extension","buildingNumber":"219","city":"Lake Nyasialand","zipcode":"88915-9375","country":"Lebanon","county_code":"NR","latitude":18.028527,"longitude":-99.596528},"website":"http:\/\/mohr.com","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":11,"firstname":"Willis","lastname":"Walter","email":"reinhold.cummerata@graham.com","phone":"+1507718143224","birthday":"2016-10-09","gender":"male","address":{"id":0,"street":"456 Emmalee Lodge Apt. 870","streetName":"Reilly Viaduct","buildingNumber":"584","city":"Lake Devyn","zipcode":"52367","country":"Brunei Darussalam","county_code":"MH","latitude":-84.542137,"longitude":-99.29609},"website":"http:\/\/koch.net","image":"http:\/\/placeimg.com\/640\/480\/people"},
{"id":12,"firstname":"Vern","lastname":"Bechtelar","email":"kuphal.mariah@yahoo.com","phone":"+7818241152902","birthday":"1961-02-16","gender":"male","address":{"id":0,"street":"845 Ryan Rapids","streetName":"Leuschke Views","buildingNumber":"116","city":"North Arely","zipcode":"30298","country":"Vanuatu","county_code":"GU","latitude":-37.341234,"longitude":-121.806776},"website":"http:\/\/stanton.com","image":"http:\/\/placeimg.com\/640\/480\/people"}]

let data = []
for(let i = 0; i < users.length; i++){
    data.push(users[i])
}
console.log(data)

let html = "";
for (let val of data){
    html += `
    <div class="card">
    <h1>*Your company name*</h1>
    <h2>${val.firstname} ${val.lastname}</h2>
    <p>${val.email}</p>
    <p>${val.phone}</p>
    <div class="weblink">Our website: ${val.website}</div>
    </div>`
}
document.body.innerHTML += html;


// -------------------------------------------------------


// class Users{
//     constructor(obj){
//         this.firstname = obj.firstname;
//         // this.lastname = obj.lastname;
//         // this.email = obj.email;
//         // this.phone = obj.phone;
//         // this.birthday = obj.birthday;
//         // this.gender = obj.gender;
//         // this.address = obj.address;
//         // this.website = obj.website;
//         // this.image = obj.image;
//     }
// }


// const data = [];
// let cnt = 12;
// while (cnt--){
//     let ppl = users[users.length];
//     data.push(new Users(ppl));
// }
// console.log(data);

