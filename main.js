const intro_button = document.querySelector('.intro-button');
const intro = document.querySelector('.intro');
const home_button = document.querySelector('.home-button');
const home = document.querySelector('.home');
const app_bottom = document.querySelector('.app-bottom');
const bus_button = document.getElementById('bus');
const bus = document.querySelector('.bus');
const quick_path_button = document.querySelector('.quick-path');
const cheap_path_button = document.querySelector('.cheap-path');

const bus_search_result = document.querySelector('.bus-search-result');
const td = document.querySelectorAll('td');
const seleted = document.querySelector('.selected');
const bus_seat = document.querySelector('.bus-seat');

td.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
        seleted.classList.add('active');
        bus_seat.classList.add('active');
    })
})

intro_button.addEventListener('click', () => {
    intro.classList.remove('active');
    home.classList.add('active');
    app_bottom.classList.add('active');
})

home_button.addEventListener('click', () => {
    app_bottom.classList.remove('active');
    home.classList.remove('active')
    intro.classList.add('active');
})

bus_button.addEventListener('click', () => {
    intro.classList.remove('active');
    home.classList.remove('active');
    bus.classList.add('active');
})

const bus_contents = [
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_time: '07:10',
        arrival_time: '09:50',
        class: '일반고속',
        term: '2시간 40분'
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_time: '09:00',
        arrival_time: '11:40',
        class: '우등고속',
        term: '2시간 40분'
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_time: '11:45',
        arrival_time: '14:25',
        class: '프리미엄',
        term: '2시간 40분'
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_time: '22:00',
        arrival_time: '24:40',
        class: '심야프리미엄',
        term: '2시간 40분'
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_time: '22:40',
        arrival_time: '01:20',
        class: '심야우등',
        term: '2시간 40분'
    }
]

//bus_search_result.innerHTML = '';

for(let i = 0; i < bus_contents.length; i++) {
    let content = `
                    <div class="path-result-content">
                        <div class="path-icon">
                            <i class="ri-bus-2-line"></i>
                        </div>
                        <div class="path-desc">
                            <div class="path-start">
                                <div class="start-area">${bus_contents[i].start}</div>
                                <div class="start-time">${bus_contents[i].start_time}</div>
                            </div>
                            <div class="path-arrow">
                                <i class="ri-arrow-right-line"></i>
                            </div>
                            <div class="path-arrival">
                                <div class="arrival-area">${bus_contents[i].arrival}</div>
                                <div class="arrival-time">${bus_contents[i].arrival_time}</div>
                            </div>
                        </div>
                        <div class="ticket-bottom">
                            <div class="path-class">${bus_contents[i].class}</div>
                            <p>소요시간 약 <span>${bus_contents[i].term}</span></p>
                        </div>
                        <button class="booking-button">좌석 예매하기</button>
                    </div>
    `;
    bus_search_result.insertAdjacentHTML('beforeend', content);
}

const booking_button = document.querySelector('click', () => {

})

function removePathButton () {
    quick_path_button.classList.remove('active');
    cheap_path_button.classList.remove('active');
}

quick_path_button.addEventListener('click', () => {
    removePathButton();
    quick_path_button.classList.add('active');
})

cheap_path_button.addEventListener('click', () => {
    removePathButton();
    cheap_path_button.classList.add('active');
})

