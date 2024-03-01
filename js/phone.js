
const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
        // Step-1 get container-div that where you set
        const phonesContainer = document.getElementById('phones-container');

        phones.forEach(phone => {
            // Step-2 create a div 
            const phoneCards = document.createElement('div');
            // set class attributes
            phoneCards.classList = `card bg-base-100 p-4 shadow-xl`;
            //Step-3 set inner html
            phoneCards.innerHTML = `
            <figure><img src="${phone.image}" alt="Phone" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            `
            // Step-4
            phonesContainer.appendChild(phoneCards);
        })
}


// handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
}

// loadPhone();

