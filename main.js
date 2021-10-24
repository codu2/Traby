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
//let length = 0;
let active = [];

td.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
        selected.classList.add('active');
        bus_seat.classList.add('active');
        //length += 1;
        active.push(e.innerText);

        let activeArr = active.filter((element, index) => {
            return active.indexOf(element) === index;
        });

        //console.log(activeArr);

        if(activeArr.length > 0) {
            //console.log(e.innerText);
            // e.classList.contains('active')

            function selectedBooking() {
                const content = `
                                <div class="selected-seat-info">
                                    <div class="selected-seat">
                                        <p>선택 좌석</p>  
                                        <div class="seat-number">
                                        ${activeArr}번</div>
                                    </div>
                                    <div class="seat-price">
                                        <p>총 결제 금액</p>
                                        <div class="price">${13800 * activeArr.length}원</div>
                                    </div>
                                </div>
                                <button class="selected-booking">결제하기</button>
                `;
                selected.insertAdjacentHTML('afterbegin', content);
            }
            selectedBooking();
        } 
    })
})

/*
if(Array.prototype.slice.call(td).indexOf('active') === -1) {
            activeArr.length = 0;
        }

 e.addEventListener('click', () => {
                e.classList.remove('active');
                for(let i = 0; i < activeArr.length; i++) {
                    if(active[i] === e.innerText) {
                        active.splice(i, 1);
                        i--;
                    }
                }
            })
*/

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

