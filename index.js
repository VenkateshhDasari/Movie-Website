let left_btn=document.getElementsByClassName('bi-chevron-left')[0];
let right_btn=document.getElementsByClassName('bi-chevron-right')[0];

let cards= document.getElementsByClassName('cards')[0];
let search= document.getElementsByClassName('search')[0];
let search_input= document.getElementById('search_input');


left_btn.addEventListener('click',()=>{
    cards.scrollLeft -=140
});
right_btn.addEventListener('click',()=>{
    cards.scrollLeft +=140
});


let movies;

document.addEventListener("DOMContentLoaded", function(event) {
  movies = [
    {
        "name": "KGF 2",
        "imdb": 8.2,
        "date": "2022",
        "sposter": "movie_images/KGF.jpg",
        "bposter": "movie_images/kgf2.png",
        "genre": "Action,Thriller,Drama",
        "type": "movie",
        "url": "the kgf2.html",
        "trailer": "video/kgf.mp4",
        "low": "video/kgf2 480ph.webm",
        "medium": "video/kgf2 720ph.mp4",
        "high": "video/kgf2 1080ph.mp4"
    },
    {
        "name": "RRR",
        "imdb": 8.6,
        "date": "2022",
        "sposter": "movie_images/RRR1.jpeg",
        "bposter": "movie_images/RRR.png",
        "genre": "Action,Thriller,Drama",
        "type": "movie",
        "url": "the RRR.html",
        "trailer": "video/rrr-trailer-telugu-ntr-ram-charan-ajay-dev.mp4",
        "low": "video/rrr 480ph.webm",
        "medium": "video/rrr 720ph.mp4",
        "high": "video/rrr 1080ph.mp4"
    }, 
    {
        "name": "Kantara",
        "imdb": 8.4,
        "date": "2022",
        "sposter": "movie_images/Kantara-Movie.png",
        "bposter": "movie_images/kantara.jpg",
        "genre": "Action,Thriller",
        "type": "movie",
        "url": "the kantara.html",
        "trailer": "video/Kantara Trailer (Telugu) Rishab Shetty Vijay Kiragandur Hombale Films 15 Oct 2022 Release.mp4",
        "low": "video/kantara 480ph.webm",
        "medium": "video/kantara 720ph.mp4",
        "high": "video/kantara 1080ph.mp4"
    }, 
    {
        "name": "Sita Ramam",
        "imdb": 8.1,
        "date": "2022",
        "sposter": "movie_images/sita raman.jpeg",
        "bposter": "movie_images/SRM1.png",
        "genre": "Action,Drama",
        "type": "movie",
        "url": "the sitaramam.html",
        "trailer": "video/Sita Ramam Trailer - Telugu Dulquer Salmaan Mrunal Rashmika Sumanth Hanu Raghavapudi.mp4",
        "low": "video/sitaramam 480ph.webm",
        "medium": "video/sitaramam 720ph.mp4",
        "high": "video/sitaramam 1080ph.mp4"
    }, 
        {
            "name": "Love Today",
            "imdb": 8.0,
            "date": "2022",
            "sposter": "movie_images/lovetoday.jpeg",
            "bposter": "movie_images/love today.jpg",
            "genre": "Drama,Romance",
            "type": "movie",
            "url": "the lovetoday.html",
            "trailer": "video/Love Today Telugu - Official Trailer @MorattuSingle Yuvan Shankar Raja AGS.mp4",
            "low": "video/lovetoday 480ph.webm",
            "medium": "video/lovetoday 720ph.mp4",
            "high": "video/lovetoday 1080ph.mp4"
        }, {
        "name": "Bheemla Nayak",
        "imdb": 7.3,
        "date": "2021",
        "sposter": "movie_images/bhn2.png",
        "bposter": "movie_images/BHN1.png",
        "genre": "Action",
        "type": "movie",
        "url": "the bheemla nayak.html",
        "trailer": "video/Bheemla Nayak Official Trailer Pawan Kalyan, Rana Daggubati Trivikram SaagarKChandra ThamanS.mp4",
        "low": "video/bheemla nayak 480ph.webm",
        "medium": "video/bheemla nayak 720ph.mp4",
        "high": "video/bheemla nayak 1080ph.mp4"
    }, {
        "name": "The Boys",
        "imdb": 9.3,
        "date": "2022",
        "sposter": "movie_images/the boys.jpg",
        "bposter": "movie_images/the boys1.jpg",
        "genre": "Action",
        "type": "series",
        "url": "the boys.html",
        "trailer": "video/The Boys Season 1 - Official Trailer Amazon Original.mp4",
        "low": "video/the boys 480ph.webm",
        "medium": "video/the boys 720ph.mp4",
        "high": "video/the boys 1080ph.mp4"
    }, {
        "name": "Money Heist",
        "imdb": 9.9,
        "date": "2020",
        "sposter": "movie_images/money heist.jpg",
        "bposter": "movie_images/money heist1.jpg",
        "genre": "Action",
        "type": "series",
        "url": "money heist.html",
        "trailer": "money heist trailer.mp4",
        "low": "video/money heist 480ph.mp4",
        "medium": "video/money heist 720ph.mp4",
        "high": "video/money heist 1080ph.mp4"
    }, {
        "name": "John Wick",
        "imdb": 9.8,
        "date": "2022",
        "sposter": "movie_images/Jhon Wick.jpg",
        "bposter": "movie_images/jhon wick1.webp",
        "genre": "Action",
        "type": "movie",
        "url": "jhon wick.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/Jhon Wick 480ph.mp4",
        "medium": "video/Jhon Wick 720ph.mp4",
        "high": "video/Jhon Wick 1080ph.mp4"
    }, {
        "name": "Ant Man",
        "imdb": 8.9,
        "date": "2017",
        "sposter": "movie_images/ant man.jpg",
        "bposter": "movie_images/ant man1.jpg",
        "genre": "Action",
        "type": "movie",
        "url": "ant man.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/ant man 480ph.mp4",
        "medium": "video/ant man 720ph.mp4",
        "high": "video/ant man 1080ph.mp4"
    }, {
        "name": "Avengers",
        "imdb": 9.9,
        "date": "2012",
        "sposter": "movie_images/avengers.jpg",
        "bposter": "movie_images/avengers1.jpg",
        "genre": "Action",
        "type": "movie",
        "url": "avengers.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/avengers 480ph.mp4",
        "medium": "video/avengers 720ph.mp4",
        "high": "video/avengers 1080ph.mp4"
    }, {
        "name": "Moon Knight",
        "imdb": 7.3,
        "date": "2022",
        "sposter": "movie_images/moon knight.jpg",
        "bposter": "movie_images/moon knight1.webp",
        "genre": "Action",
        "type": "series",
        "url": "moon knight.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/moon knight 480ph.mp4",
        "medium": "video/moon knight 720ph.mp4",
        "high": "video/moon knight 1080ph.mp4"
    }, {
        "name": "Kota Factory",
        "imdb": 9.6,
        "date": "2020",
        "sposter": "movie_images/kota factory.jpg",
        "bposter": "movie_images/kota factory1.webp",
        "genre": "Action",
        "type": "series",
        "url": "kota factory.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/kota factory 480ph.mp4",
        "medium": "video/kota factory 720ph.mp4",
        "high": "video/kota factory 1080ph.mp4"
    }, {
        "name": "Collage Romance",
        "imdb": 7.9,
        "date": "2021",
        "sposter": "movie_images/collage romance.jpg",
        "bposter": "movie_images/collage romance1.jpg",
        "genre": "Action",
        "type": "series",
        "url": "collage romance.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/collage romance 480ph.mp4",
        "medium": "video/collage romance 720ph.mp4",
        "high": "video/collage romance 1080ph.mp4"
    }, {
        "name": "Thor Love Of Thunder",
        "imdb": 8.8,
        "date": "2022",
        "sposter": "movie_images/thor love of thunder.jpg",
        "bposter": "movie_images/thor love of thunder1.avif",
        "genre": "Action",
        "type": "movie",
        "url": "thor love of thunder.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/thor love of thunder 480ph.mp4",
        "medium": "video/thor love of thunder 720ph.mp4",
        "high": "video/thor love of thunder 1080ph.mp4"
    }, {
        "name": "Uncharted",
        "imdb": 9.8,
        "date": "2022",
        "sposter": "movie_images/uncharted.webp",
        "bposter": "movie_images/uncharted1.jpg",
        "genre": "Action",
        "type": "movie",
        "url": "uncharted.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/uncharted 480ph.mp4",
        "medium": "video/uncharted 720ph.mp4",
        "high": "video/uncharted 1080ph.mp4"
    }, {
        "name": "Eesho",
        "imdb": 8.2,
        "date": "2022",
        "sposter": "movie_images/eesho.jpeg",
        "bposter": "movie_images/eesho1.jpg",
        "genre": "Action",
        "type": "movie",
        "url": "eesho.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/eesho 480ph.mp4",
        "medium": "video/eesho 720ph.mp4",
        "high": "video/eesho 1080ph.mp4"
    }, {
        "name": "Top Gun",
        "imdb": 8.0,
        "date": "2022",
        "sposter": "movie_images/topgun.jpg",
        "bposter": "movie_images/topgun1.jpg",
        "genre": "Action",
        "type": "movie",
        "url": "topgun.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/topgun 480ph.mp4",
        "medium": "video/topgun 720ph.mp4",
        "high": "video/topgun 1080ph.mp4"
    }, {
        "name": "Jurassic World",
        "imdb": 8.0,
        "date": "2022",
        "sposter": "movie_images/jurassic world.jpg",
        "bposter": "movie_images/jurassic world1.jpg",
        "genre": "Action",
        "type": "movie",
        "url": "jurassic world.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/jurassic world 480ph.mp4",
        "medium": "video/jurassic world 720ph.mp4",
        "high": "video/jurassic world 1080ph.mp4"
    }, {
        "name": "Eternals",
        "imdb": 9.0,
        "date": "2022",
        "sposter": "movie_images/eternals.jpg",
        "bposter": "movie_images/eternals1.webp",
        "genre": "Action",
        "type": "movie",
        "url": "eternals.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/eternals 480ph.mp4",
        "medium": "video/eternals 720ph.mp4",
        "high": "video/eternals 1080ph.mp4"
    }, {
        "name": "Spider Man",
        "imdb": 9.9,
        "date": "2020",
        "sposter": "movie_images/spiderman.jpg",
        "bposter": "movie_images/spiderman1.jpg",
        "genre": "Action",
        "type": "movie",
        "url": "spiderman.html",
        "trailer": "john wick trailer.mp4",
        "low": "video/spiderman 480ph.mp4",
        "medium": "video/spiderman 720ph.mp4",
        "high": "video/spiderman 1080ph.mp4"
    }
  ];

  // Do other things with the `movies` variable here


let movieData = movies;

// Loop through the movie data array
for (let i = 0; i < movieData.length; i++) {
    let ele = movieData[i];
    let {name,imdb,date,sposter,bposter,genre,url} = ele;
    
    // Create a new 'a' element
    let card = document.createElement('a');
    card.href = url;
    card.classList.add('card');
    
    // Set the inner HTML of the 'a' element
    card.innerHTML = `
        <img src="${sposter}" class="poster" alt="${name}">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                </div>
            </div>
        </div>`
    
    // Append the 'a' element to the 'cards' element
    cards.appendChild(card);
}

    document.getElementById('title').innerText=data[0].name;
    document.getElementById('gen').innerText=data[0].genre;
    document.getElementById('date').innerText=data[0].date;
    document.getElementById('rate').innerHTML=`<span>IMDB</span> <i class="bi bi-star-fill"></i> ${data[0].imdb}`;
    // search data load
    data.forEach(element=>{
        let {name,imdb,date,sposter,bposter,genre,url}=element;
        let card=document.createElement('a');
        card.href=url;
        card.classList.add('card');
        card.innerHTML=`
                    <img src="${sposter}".jpg" alt="">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date}, <span>IMDB </span><i class="bi bi-star-fill"></i> ${imdb}</p>
                        </div>`
                        search.appendChild(card)
    });
    // Search Filter;
    search_input.addEventListener('keyup', () => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');
    
        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];
            let TextValue = b.textContent || b.innerText;
            if (TextValue.toUpperCase().indexOf(filter) > -1) {
                a[index].style.display = "flex";
                search.style.visibility="visible";
                search.style.opacity="1";
            } else {
                a[index].style.display = "none";
            }if (search_input.value == 0){
                search.style.visibility="hidden";
                search.style.opacity="0";
            }
        }
    });

    // let video = document.getElementsByTagName('video')[0];
    // let play = document.getElementById('play');
    // play.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     if (video.paused) {
    //         video.play();
    //         play.innerHTML = `Pause <i class="bi bi-pause-fill"></i>`;
    //     } else {
    //         video.pause();
    //         play.innerHTML = `Play <i class="bi bi-play-fill"></i>`;
    //     }
    // });
    
    let series = document.getElementById('series');
series.addEventListener('click', () => {
    cards.innerHTML = "";
    let series_array = data.filter(ele => { return ele.type === "series"; });
    series_array.forEach((ele, i) => {
        let { name, imdb, date, sposter, bposter, genre, url } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB </span><i class="bi bi-star-fill"></i> ${imdb}</h3> 
                    </div>
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
});
let movies1 = document.getElementById('movies1');
movies.addEventListener('click', () => {
    cards.innerHTML = "";
    let movies_array = data.filter(ele => { return ele.type === "movie"; });
    movies_array.forEach((ele, i) => {
        let { name, imdb, date, sposter, bposter, genre, url } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span> <i class="bi bi-star-fill"></i>${imdb}</h3>
                    </div>
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
});
let home = document.getElementById('home');
home.addEventListener('click', () => {
    cards.innerHTML = "";
    data.forEach((ele, i) => {
        let { name, imdb, date, sposter, bposter, genre, url } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span> <i class="bi bi-star-fill"></i>${imdb}</h3>
                    </div>
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
   
});
});




