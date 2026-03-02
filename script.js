// let a = document.querySelector(".user")
// let div1 = document.createElement("div")

// a.addEventListener("mouseenter", () => {

//   div1.innerHTML=""
//   a.insertAdjacentElement("beforeend", div1)
//   div1.setAttribute("style", "position:absolute; width:80px; background-color:rgb(21, 18, 18, 1); color:white; top:80px; right:10px; font-size:12px; height:20px; padding:5px")
//   div1.insertAdjacentHTML("beforeend", "<p>Prerna</p>")
// }
// )
// a.addEventListener("mouseleave", () => {
//   div1.remove()
// }
// )

// let b = document.querySelector(".home")
// let c = document.querySelector(".topleft")
// let div2 = document.createElement("div")

// b.addEventListener("mouseenter", () => {
//   div2.innerHTML=""
//   c.insertAdjacentElement("beforeend", div2)
//   div2.setAttribute("style", "position:absolute; width:40px; background-color:rgb(21, 18, 18, 1); color:white; top:80px; right:1370px; font-size:12px; height:20px; padding:5px")
//   div2.insertAdjacentHTML("beforeend", "<p>Home</p>")
// }
//  )
// b.addEventListener("mouseleave", () => {
//   div2.remove()
// }
// )

 async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();
  // console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
 }
  console.log(div);
  
  return songs;
}

async function getKaranSongs() {
  let a = await fetch("http://127.0.0.1:5500/kara%20aujla/");
  let response = await a.text();
  // console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
 }
  console.log(div);
  
  return songs;
}


async function main() {
  let songs = await getSongs();
  console.log(songs);

  let i = 13;
  let audio = new Audio(songs[i]);

  let playBtn = document.querySelector(".playbtn");
  let prevBtn = document.querySelector(".previousbtn");
  let nextBtn = document.querySelector(".nextbtn");

  let isPlaying = false;

  let d = playBtn.addEventListener("click", () => {
    if(!isPlaying){
    audio.play().catch((err) => {
      console.log("Audio not able to play", err);
    });
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
    isPlaying = true;
  }else{
    audio.pause();
    playBtn.innerHTML = `<img src="playbtnoff.svg" alt=""></img>`
    isPlaying = false;
  }
  });

  prevBtn.addEventListener("click", () => {
    if (i > 0) {
      i = i - 1;
      audio.pause();
      audio.currentTime = 0;
      audio = new Audio(songs[i]);
      audio.play();
      playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
    }
  });

  nextBtn.addEventListener("click", () => {
    if (i < songs.length - 1) {
      i = i + 1;
      audio.pause();
      audio.currentTime = 0;
      audio = new Audio(songs[i]); 
      audio.play();
      playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
    }else if(i==songs.length - 1){
      i = 0
      audio.pause();
      audio.currentTime = 0;
      audio = new Audio(songs[i]); 
      audio.play();
      playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
    }
  });

  let s1 = document.querySelector(".s1")
  let songinfo = document.querySelector(".songinfo")

  s1.addEventListener("click", () => {
    let img = s1.getElementsByTagName("img")
    let p = s1.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[0])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )

  let s2 = document.querySelector(".s2")
  s2.addEventListener("click", () => {
    let img = s2.getElementsByTagName("img")
    let p = s2.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[1])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )
  let s3 = document.querySelector(".s3")
  s3.addEventListener("click", () => {
    let img = s3.getElementsByTagName("img")
    let p = s3.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[2])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )
  let s4 = document.querySelector(".s4")
  s4.addEventListener("click", () => {
    let img = s4.getElementsByTagName("img")
    let p = s4.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[3])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )
  let s5 = document.querySelector(".s5")
  s5.addEventListener("click", () => {
    let img = s5.getElementsByTagName("img")
    let p = s5.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[4])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )
  let s6 = document.querySelector(".s6")
  s6.addEventListener("click", () => {
    let img = s6.getElementsByTagName("img")
    let p = s6.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[5])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )
  let s7 = document.querySelector(".s7")
  s7.addEventListener("click", () => {
    let img = s7.getElementsByTagName("img")
    let p = s7.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[6])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )
  let s8 = document.querySelector(".s8")
  s8.addEventListener("click", () => {
    let img = s8.getElementsByTagName("img")
    let p = s8.getElementsByTagName("p")
    songinfo.innerHTML = `${img[0].outerHTML} <div class="songname"> ${p[0].outerHTML}
                    <p>Song</p>
                </div> `
    // console.log(p);
    audio.pause()
    audio.currentTime = 0;
    audio = new Audio(songs[7])
    audio.play()
    playBtn.innerHTML = `<img src="playbtnon.svg" alt=""></img>`
  }
  )

  let z = document.querySelector(".musicplaylistbox")
    let playListLikedSong = document.querySelector(".playListLikedSong")
   
  let likedsongs = document.querySelector(".karanAujlaPlayList")
  likedsongs.addEventListener("click", () => {
    z.classList.toggle("hidden")
    playListLikedSong.classList.toggle("hidden")
  }
  )

  //karan aujla songs
  let karanSongs = getKaranSongs()
  let div = document.createElement("div");
  playListLikedSong.insertAdjacentElement("div");
  div.innerHTML = `<p style="color:white;">My Name is mahesh Kumar</p>`

}

main();
