const intro_button = document.querySelector('.intro-button');
const intro = document.querySelector('.intro');
const home_button = document.querySelector('.home-button');
const home = document.querySelector('.home');
const app_bottom = document.querySelector('.app-bottom');
const bus_button = document.getElementById('bus');
const bus = document.querySelector('.bus');
const timeline = document.querySelector('.timeline');
const timeline_button = document.querySelector('.timeline-button');

const oneway_button = document.querySelector('.one-way');
const roundtrip_button = document.querySelector('.round-trip');
const previous1 = document.querySelector('.previous1');
const previous2 = document.querySelector('.previous2');

const members = document.querySelector('.members');
const non_members = document.querySelector('.non-members');
const members_area = document.querySelector('.members-area');
const non_members_area = document.querySelector('.non-members-area');

const bus_search_result = document.querySelector('.bus-search-result');
const td = document.querySelectorAll('td');
const not_td = document.querySelectorAll('td.not');
const selected = document.querySelector('.selected');
const bus_seat = document.querySelector('.bus-seat');
//let length = 0;
let active = [];

timeline_button.addEventListener('click', () => {
     home.classList.remove('active')
     bus.classList.remove('active');
     document.querySelector('.booking-bus-seat').classList.remove('active');
     document.querySelector('.bus-booking').classList.remove('active');
     timeline.classList.add('active');
})

oneway_button.addEventListener('click', () => {
    roundtrip_button.classList.remove('active');
    oneway_button.classList.add('active');
})

roundtrip_button.addEventListener('click', () => {
    oneway_button.classList.remove('active');
    roundtrip_button.classList.add('active');
})

previous1.addEventListener('click', () => {
    document.querySelector('.bus-booking').classList.remove('active');
    bus.classList.add('active');
    window.location.reload();
})

previous2.addEventListener('click', () => {
    document.querySelector('.booking-bus-seat').classList.remove('active');
    document.querySelector('.bus-booking').classList.add('active');
})

members.addEventListener('click', () => {
    non_members.classList.remove('active');
    non_members_area.classList.remove('active');
    members.classList.add('active');
    members_area.classList.add('active');
})

non_members.addEventListener('click', () => {
    members.classList.remove('active');
    members_area.classList.remove('active');
    non_members.classList.add('active');
    non_members_area.classList.add('active');
})

intro_button.addEventListener('click', () => {
    intro.classList.remove('active');
    home.classList.add('active');
    app_bottom.classList.add('active');
})

home_button.addEventListener('click', () => {
    //app_bottom.classList.remove('active');
    home.classList.add('active')
    bus.classList.remove('active');
    document.querySelector('.booking-bus-seat').classList.remove('active');
    document.querySelector('.bus-booking').classList.remove('active');
    timeline.classList.remove('active');
    document.querySelector('.path-result').innerHTML = "";
    //intro.classList.add('active');
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

const booking_button = document.querySelectorAll('.booking-button'); 
const payment_button = document.querySelector('.payment-button');
const ticket = document.querySelector('.ticket');
const cancel = document.querySelector('.cancel');

for(let i = 0; i < booking_button.length; i++) {
    booking_button[i].addEventListener('click', () => {
        booking_button[i].classList.add('active');
        bus.classList.remove('active');
        document.querySelector('.bus-booking').classList.add('active');

        td.forEach((e) => {
            e.addEventListener('click', () => {
                e.classList.toggle('active');
                selected.classList.add('active');
                bus_seat.classList.add('active');
                //length += 1;
                if(e.innerText !== '') {
                    active.push(e.innerText);
                }
        
                let activeArr = active.filter((element, index) => {
                    return active.indexOf(element) === index;
                });
        
                //console.log(activeArr);
        
                if(e.classList.contains('active')) {
                    console.log(activeArr);
                } else {
                    e.classList.remove('active');
                    for(let i = 0; i < active.length; i++) {
                        if(active[i] === e.innerText) {
                            active.splice(i, 1);
                            i--;
                        }
                    }
                    let index = activeArr.indexOf(e.innerText);
                    if (index > -1) {
                        activeArr.splice(index, 1);
                    }
                    console.log(active)
                    console.log(activeArr)
                }
                
                if(activeArr.length > 0) {
                    //console.log(e.innerText);
                    // e.classList.contains('active')
        
                    function selectedBooking() {
                        const content = `
                                        <div class="selected-seat-info">
                                            <div class="selected-seat">
                                                <p>선택 좌석</p>  
                                                <div class="seat-number">
                                                ${activeArr.sort()}번</div>
                                            </div>
                                            <div class="seat-price">
                                                <p>총 결제 금액</p>
                                                <div class="price">${13800 * activeArr.length}원</div>
                                            </div>
                                        </div>
                                        <button class="selected-booking">결제하기</button>
                        `;
        
                        selected.innerHTML = content;
                         
                        document.querySelector('.selected-booking').addEventListener('click', () => {
                            document.querySelector('.bus-booking').classList.remove('active');
                            document.querySelector('.booking-bus-seat').classList.add('active');
                        });
                    }
                    selectedBooking();
                } else {
                    selected.classList.remove('active');
                    bus_seat.classList.remove('active');
                }
              
                const payment_info = document.querySelector('.payment-info');
        
                let info = `
                            <div class="trans-info">
                                <div class="trans-text">
                                    <p>출발</p>
                                    <i class="ri-arrow-right-line"></i>
                                    <p>도착</p>
                                </div>
                                <div class="trans-time">
                                    <div class="trans-start-time">${bus_contents[i].start_time}</div>
                                    <div class="trans-arrival-time">${bus_contents[i].arrival_time}</div>
                                </div>
                                <div class="trans-destination">
                                    <div class="trans-start-destination">${bus_contents[i].start}</div>
                                    <div class="trans-arrival-destination">${bus_contents[i].arrival}</div>
                                </div>
                                </div>
                                <div class="seat-info">
                                    <div class="trans-class">${bus_contents[i].class}</div>
                                    <div class="payment-seat-number">${activeArr.sort()}번</div>
                                </div>
                                <div class="payment-price-info">
                                    <p>결제 금액</p>
                                    <div class="payment-price">${13800 * activeArr.length}원</div>
                                </div>
                            `;
        
                payment_info.innerHTML = info;
                //ticket.innerHTML = info;

                payment_button.addEventListener('click', () => {
                    localStorage.setItem('data1', info);
                    const data1 = localStorage.getItem('data1');
                    console.log(data1);
                    ticket.innerHTML = data1;
                    cancel.style.display = 'block';
                })

                cancel.addEventListener('click', () => {
                    localStorage.removeItem('data1');
                    const data1 = localStorage.getItem('data1');
                    console.log(data1);
                    ticket.innerHTML = "";
                    cancel.style.display = 'none';
                })
            })
        })
    })
}
