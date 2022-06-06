console.log("spotify")
let songindex=0
let audioelement=new Audio('songs/1.mp3')
let masterplay=document.getElementById('masterplay')
let myprograssbar=document.getElementById('songbar')
let songitem=document.getElementsByClassName('songitem')
let mastersongname=document.getElementById('mastersongname')
let songitemplay=Array.from(document.getElementsByClassName('songItemplay'))
let gif=document.getElementById('gif')

let songs=[
    {songname:"salam-e-ishq ",filepath:"songs/1.mp3",coverpage:"covers/1.jpg"},
    {songname:"Na tum jano na hum ",filepath:"songs/2.mp3",coverpage:"covers/2.jpg"},
    {songname:"chaal chaiya ",filepath:"songs/3.mp3",coverpage:"covers/3.jpg"},
    {songname:"Jabse tere naina ",filepath:"songs/4.mp3",coverpage:"covers/4.jpg"},
    {songname:"Tera mera rishta ",filepath:"songs/5.mp3",coverpage:"covers/5.jpg"},
    {songname:"Bete lamhe ",filepath:"songs/6.mp3",coverpage:"covers/6.jpg"},
    {songname:"Kaho na kaho ",filepath:"songs/7.mp3",coverpage:"covers/7.jpg"},
    {songname:"Chalk dik laza ",filepath:"songs/8.mp3",coverpage:"covers/8.jpg"},
    {songname:"Kya mujhe pyar hain ",filepath:"songs/9.mp3",coverpage:"covers/9.jpg"},
    {songname:"Hona tha pyar.. ",filepath:"songs/10.mp3",coverpage:"covers/10.jpg"},
]

Array.from(songitem).forEach((element,i) => {
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverpage
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname
});



masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        songitemplay.forEach((element)=>{
            console.log(element.id)
            //console.log(songindex)
            //let songid=element.getElementById(element.id)
            if(element.id==songindex){

                element.classList.remove('fa-play-circle')
                element.classList.add('fa-pause-circle')
            }
            else{
                element.classList.add('fa-play-circle')
                element.classList.remove('fa-pause-circle')
            }

        })
        console.log("playing...")
        audioelement.play()
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        songitemplay.forEach((element)=>{
            element.classList.add('fa-play-circle')
            element.classList.remove('fa-pause-circle')
            
        })
        console.log("stop")
        audioelement.pause()
        masterplay.classList.add('fa-play-circle')
        masterplay.classList.remove('fa-pause-circle')
        gif.style.opacity=0
    }
})
// audioelement.addEventListener('timeupdate',()=>{
//     console.log("time update")
//     //update seekbar
//     progress=parseFloat((audioelement.currentTime/audioelement.duration)*100)
//     console.log(progress)
//     myprograssbar.value=progress
// })


audioelement.addEventListener('timeupdate',funcupdate)

function funcupdate(){

    console.log("time update")
    //update seekbar
    progress=parseFloat((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress)
    myprograssbar.value=progress
}


// myprograssbar.addEventListener('change',()=>{
//     audioelement.currentTime=(myprograssbar.value*audioelement.duration)/100

// })
myprograssbar.addEventListener('change',funcchange)
function funcchange(){
    audioelement.currentTime=(myprograssbar.value*audioelement.duration)/100
}

const makeallplays =()=>{
    songitemplay.forEach((element)=>{
        
            element.classList.add('fa-play-circle')
            element.classList.remove('fa-pause-circle')
    
        
    })
}

songitemplay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let songindex=parseInt(e.target.id)
        if(audioelement.paused || audioelement.currentTime<=0){

            makeallplays()
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-pause-circle')
            audioelement.src=`songs/${songindex+1}.mp3`
            mastersongname.innerText=songs[songindex].songname
            gif.style.opacity=1
            // audioelement.currentTime=0
            audioelement.play()
            masterplay.classList.remove('fa-play-circle')
            masterplay.classList.add('fa-pause-circle')
            console.log("called")
            
        }
        else{
            console.log('stop')
            makeallplays()
            e.target.classList.add('fa-play-circle')
            e.target.classList.remove('fa-pause-circle')
            audioelement.src=`songs/${songindex+1}.mp3`
            mastersongname.innerText=songs[songindex].songname
            gif.style.opacity=0
            console.log(myprograssbar.value)
            console.log(audioelement.duration)

            audioelement.currentTime=0
            console.log(audioelement.currentTime)
            audioelement.pause()
            masterplay.classList.add('fa-play-circle')
            masterplay.classList.remove('fa-pause-circle')
            
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>9){
        songindex=0
    }
    else{
        songindex+=1
    }
    mastersongname.innerText=songs[songindex].songname
    gif.style.opacity=1
    audioelement.src=`songs/${songindex+1}.mp3`
    audioelement.currentTime=0
    audioelement.play()


    songitemplay.forEach((element)=>{
        
        if(element.id==songindex){

            element.classList.remove('fa-play-circle')
            element.classList.add('fa-pause-circle')
        }
        else{
            element.classList.add('fa-play-circle')
            element.classList.remove('fa-pause-circle')
        }

    })

    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex-=1
    }
    mastersongname.innerText=songs[songindex].songname
    gif.style.opacity=1
    audioelement.src=`songs/${songindex+1}.mp3`
    audioelement.currentTime=0
    audioelement.play()

    songitemplay.forEach((element)=>{
        
        if(element.id==songindex){

            element.classList.remove('fa-play-circle')
            element.classList.add('fa-pause-circle')
        }
        else{
            element.classList.add('fa-play-circle')
            element.classList.remove('fa-pause-circle')
        }

    })

    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})