//quick-path tab js 다음날 즉 24시가 넘어가는 경우는 00으로 바뀌지 않고 24, 25 등으로 입력해야 정확한 시간이 구해짐
const quick_path_button = document.querySelector('.quick-path');
const cheap_path_button = document.querySelector('.cheap-path');
const path_result = document.querySelector('.path-result');
const start_time = [];
const arrival_time = [];
const term_hour = [];
const term_min = [];
const times = [];
const index = [];
const result = [];
const price = [];
const price_index = [];
const price_cheap = [];

const trans = [
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_hour: 07,
        start_min: 10,
        arrival_hour: 09,
        arrival_min: 50,
        start_time: '07:10',
        arrival_time: '09:50',
        class: '일반고속',
        term: '2시간 40분',
        price: 13800
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_hour: 09,
        start_min: 00,
        arrival_hour: 11,
        arrival_min: 40,
        start_time: '09:00',
        arrival_time: '11:40',
        class: '우등고속',
        term: '2시간 40분',
        price: 13800
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_hour: 11,
        start_min: 45,
        arrival_hour: 14,
        arrival_min: 25,
        start_time: '11:45',
        arrival_time: '14:25',
        class: '프리미엄',
        term: '2시간 40분',
        price: 13800
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_hour: 22,
        start_min: 00,
        arrival_hour: 24,
        arrival_min: 40,
        start_time: '22:00',
        arrival_time: '24:40',
        class: '심야프리미엄',
        term: '2시간 40분',
        price: 13800
    },
    {
        trans: 'bus',
        start: '센트럴시티(서울)',
        arrival: '전주',
        start_hour: 22,
        start_min: 40,
        arrival_hour: 25,
        arrival_min: 20,
        start_time: '22:40',
        arrival_time: '01:20',
        class: '심야우등',
        term: '2시간 40분',
        price: 13800
    },
    {
        trans: 'train',
        start: '서울',
        arrival: '전주',
        start_hour: 07,
        start_min: 05,
        arrival_hour: 08,
        arrival_min: 52,
        start_time: '07:05',
        arrival_time: '08:52',
        class: 'KTX',
        term: '1시간 47분',
        price: 34600
    },
    {
        trans: 'train',
        start: '서울',
        arrival: '전주',
        start_hour: 09,
        start_min: 13,
        arrival_hour: 12,
        arrival_min: 55,
        start_time: '09:13',
        arrival_time: '12:55',
        class: '무궁화호',
        term: '3시간 42분',
        price: 17600
    },
    {
        trans: 'train',
        start: '서울',
        arrival: '전주',
        start_hour: 12,
        start_min: 40,
        arrival_hour: 14,
        arrival_min: 13,
        start_time: '12:40',
        arrival_time: '14:13',
        class: 'KTX-산천',
        term: '1시간 47분',
        price: 34600
    },
    {
        trans: 'train',
        start: '서울',
        arrival: '전주',
        start_hour: 16,
        start_min: 38,
        arrival_hour: 18,
        arrival_min: 25,
        start_time: '16:38',
        arrival_time: '18:25',
        class: 'KTX-산천',
        term: '1시간 47분',
        price: 34600
    },
    {
        trans: 'train',
        start: '서울',
        arrival: '전주',
        start_hour: 21,
        start_min: 05,
        arrival_hour: 24,
        arrival_min: 53,
        start_time: '21:05',
        arrival_time: '00:53',
        class: '무궁화호',
        term: '3시간 48분',
        price: 17600
    },
]

function remove_path_result() {
    path_result.innerHTML = "";
}

function removePathButton () {
    quick_path_button.classList.remove('active');
    cheap_path_button.classList.remove('active');
}

quick_path_button.addEventListener('click', () => {
    removePathButton();
    remove_path_result();
    cheap_path_button.classList.remove('active');
    quick_path_button.classList.add('active');
})

cheap_path_button.addEventListener('click', () => {
    removePathButton();
    remove_path_result();
    quick_path_button.classList.remove('active');
    cheap_path_button.classList.add('active');
})

const quick_search_button = document.querySelector('.quick-search');
const search_start = document.querySelector('.path-from');
const search_to = document.querySelector('.path-to');

quick_search_button.addEventListener('click', () => {
    if(search_start.value.length !== 0 && search_to.value.length !== 0) {
        //console.log('yes') 두 input 모두 입력되어야만 for문이 실행됨
        let new_trans = [];
        new_trans = trans.filter(x => {
            return x.start.match(search_start.value) && x.arrival.match(search_to.value)
        })
        console.log(new_trans)

        function show_quick_path() {
            for(let i = 0; i < new_trans.length; i++) {
                start_time[i] = (new_trans[i].start_hour * 60 * 60 * 1000) + (new_trans[i].start_min * 60 * 1000);
                arrival_time[i] = (new_trans[i].arrival_hour * 60 * 60 * 1000) + (new_trans[i].arrival_min * 60 * 1000);
            
                //시간 표를 위한 계산
                term_hour.push(parseInt((arrival_time[i] - start_time[i]) / 1000 / 60 / 60));
                term_min.push(((arrival_time[i] - start_time[i]) / 1000 / 60) % 60);
            
                let time = arrival_time[i] - start_time[i];
            
                index.push(time);
                times.push(time+i);
                index.sort((a, b) => a - b);
                times.sort((a, b) => a - b);
            }
            
            for(let i = 0; i < new_trans.length; i++) {
                result.push(times[i] - index[i]);
            }
            
            //console.log(result);
            
            for(let i = 0; i < new_trans.length; i++) {
                let start_hour = new_trans[result[i]].start_hour < 10 ? `0${new_trans[result[i]].start_hour}` : `${new_trans[result[i]].start_hour}`;
                let arrival_hour = new_trans[result[i]].arrival_hour < 10 ? `0${new_trans[result[i]].arrival_hour}` : `${new_trans[result[i]].arrival_hour}`;
                let start_min = new_trans[result[i]].start_min < 10 ? `0${new_trans[result[i]].start_min}` : `${new_trans[result[i]].start_min}`;
                let arrival_min = new_trans[result[i]].arrival_min < 10 ? `0${new_trans[result[i]].arrival_min}` : `${new_trans[result[i]].arrival_min}`;
            
                let content = `
                                <div class="path-result-content">
                                    <div class="path-icon">
                                        <i class="ri-bus-2-line"></i>
                                    </div>
                                    <div class="path-desc">
                                        <div class="path-start">
                                            <div class="start-area">${new_trans[result[i]].start}</div>
                                            <div class="start-time">${start_hour} : ${start_min}</div>
                                        </div>
                                        <div class="path-arrow">
                                            <i class="ri-arrow-right-line"></i>
                                        </div>
                                        <div class="path-arrival">
                                            <div class="arrival-area">${new_trans[result[i]].arrival}</div>
                                            <div class="arrival-time">${arrival_hour} : ${arrival_min}</div>
                                        </div>
                                    </div>
                                    <div class="ticket-bottom">
                                        <div class="path-class">${new_trans[result[i]].class}</div>
                                        <p>소요시간 약 <span>${term_hour[result[i]]}시간 ${term_min[result[i]]}분</span></p>
                                    </div>
                                    <button>좌석 예매하기</button>
                                </div>
                `;
                path_result.innerHTML += content;
            }
        };

        function show_cheap_path() {
            for(let i = 0; i < new_trans.length; i++) {
                price_index.push(new_trans[i].price);
                price.push(new_trans[i].price+i);
                price_index.sort((a, b) => a - b);
                price.sort((a, b) => a - b);
            }
             
            for(let i = 0; i < new_trans.length; i++) {
                price_cheap.push(price[i] - price_index[i]);
            }
            
            for(let i = 0; i < new_trans.length; i++) {
                let start_hour = new_trans[price_cheap[i]].start_hour < 10 ? `0${new_trans[price_cheap[i]].start_hour}` : `${new_trans[price_cheap[i]].start_hour}`;
                let start_min = new_trans[price_cheap[i]].start_min < 10 ? `0${new_trans[price_cheap[i]].start_min}` : `${new_trans[price_cheap[i]].start_min}`;
                let arrival_hour = new_trans[price_cheap[i]].arrival_hour < 10 ? `0${new_trans[price_cheap[i]].arrival_hour}` : `${new_trans[price_cheap[i]].arrival_hour}`;
                let arrival_min = new_trans[price_cheap[i]].arrival_min < 10 ? `0${new_trans[price_cheap[i]].arrival_min}` : `${new_trans[price_cheap[i]].arrival_min}`;
        
                let content = `
                                    <div class="path-result-content">
                                        <div class="path-icon">
                                            <i class="ri-bus-2-line"></i>
                                        </div>
                                        <div class="path-desc">
                                            <div class="path-start">
                                                <div class="start-area">${new_trans[price_cheap[i]].start}</div>
                                                <div class="start-time">${start_hour} : ${start_min}</div>
                                            </div>
                                            <div class="path-arrow">
                                                <i class="ri-arrow-right-line"></i>
                                            </div>
                                            <div class="path-arrival">
                                                <div class="arrival-area">${new_trans[price_cheap[i]].arrival}</div>
                                                <div class="arrival-time">${arrival_hour} : ${arrival_min}</div>
                                            </div>
                                        </div>
                                        <div class="ticket-bottom">
                                            <div class="path-class">${new_trans[price_cheap[i]].class}</div>
                                            <p>소요시간 약 <span>${new_trans[price_cheap[i]].term}</span></p>
                                        </div>
                                        <button>좌석 예매하기</button>
                                    </div>
                    `;
                    path_result.innerHTML += content;
            }
        };

        for(let i = 0; i < new_trans.length; i++) {
            function searchInput() {
                //if(new_trans[i].start.match(search_start) && new_trans[i].arrival.match(search_to)) {
                    if(quick_path_button.classList.contains('active')) {
                        path_result.innerHTML = "";
                        show_quick_path();
                    } else if(cheap_path_button.classList.contains('active')) {
                        path_result.innerHTML = "";
                        show_cheap_path();
                    };
                
                    quick_path_button.addEventListener('click', () => {
                        removePathButton();
                        remove_path_result();
                        cheap_path_button.classList.remove('active');
                        quick_path_button.classList.add('active');
                        show_quick_path();
                    })
                    
                    cheap_path_button.addEventListener('click', () => {
                        removePathButton();
                        remove_path_result();
                        quick_path_button.classList.remove('active');
                        cheap_path_button.classList.add('active');
                        show_cheap_path();
                    })
                //} 
            }
            searchInput();
        }
    }
});
