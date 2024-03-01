
const loadPhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    console.log(data.data);
    loadPhones2(data.data);
}
 loadPhone();

 function loadPhones2(data){
    for(const phone of data){
        console.log(phone);
    }
 }