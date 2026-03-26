
import React from 'react'
import NavBar from './Navbar'
import Songlist from './Songlist'
import SearchBar from './searchbar'
import CurrentSong from './currentsong'
import './App.css'
const musicData = {
  punjabi: {
    songs: [
      {
        type: "album",
        name: "295",
        singer: "Sidhu Moosewala",
        releaseDate: "2021-05-15",
        duration: "4:30",
        img: "https://imgs.search.brave.com/13NgLJILA3KoIhbV-Mx4GgILYtB4GcrsrzTFW2X3dGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhjL2Jl/L2Y3LzhjYmVmN2Fm/MDQyZjgyYjk2MWNk/Y2U5YzA2YmE4YWIw/LmpwZw",
        description: "A powerful track reflecting social issues and reality."
      },
      {
        type: "single track",
        name: "Excuses",
        singer: "AP Dhillon",
        releaseDate: "2020-08-21",
        duration: "2:56",
        img: "https://imgs.search.brave.com/zJVTfZtvj6TdNCyIvQv8mUIvjD7_keAM67JiVqg0oCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEWmhNVFZr/WmpNdE5XWXdOaTAw/TTJSaExUbGlZemt0/WVRGbFpqVXdNV1F3/TURVeFhrRXlYa0Zx/Y0djQC5qcGc",
        description: "A smooth Punjabi-English fusion hit."      },
      {
        type: "single track",
        name: "Deewane",
        singer: "Navaan Sandhu",
        releaseDate: "2021-08-20",
        duration: "3:42",
        img: "https://lyricloops.com/wp-content/uploads/2025/09/Deewane-Lyrics-Navaan-Sandhu-768x432.jpg.webp",
        description: "Explosive Punjabi rap track with intense beats."
      },
      {
        type: "album",
        name: "Low Rider",
        singer: "Sabhi Dhillon , Real Boss",
        releaseDate: "2021-05-10",
        duration: "3:28",
        img: "https://imgs.search.brave.com/ldU6ZQzm-sWkhakesCfAyzWEjT2CpU_O6v5gtmvBH8Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLUFBTXFv/SDJpd1djdC0wLXQx/MDgweDEwODAuanBn",
        description: "Smooth Punjabi hip-hop track with groovy vibes."
      },
      {
        type: "single track",
        name: "Rhyme Aint Done",
        singer: "Navaan Sandhu",
        releaseDate: "2021-10-05",
        duration: "3:15",
        img: "https://imgs.search.brave.com/_cxs3lKlB7wJ3_MG-Wqa5fTrTXzgEFxdRWW8MRfx5Bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvVFR5T2xFWmRw/a2cvbWF4cmVzZGVm/YXVsdC5qcGc",
        description: "Catchy Punjabi rap with flowing rhythms."
      },
      {
        type: "single track",
        name: "Aint Done",
        singer: "Ikka",
        releaseDate: "2021-06-18",
        duration: "3:55",
        img: "https://i.scdn.co/image/ab67616d0000b273d4e5f6a7b8c9d0e1f2h3i4j",
        description: "High-energy Punjabi track with motivational vibes."
      },
      {
        type: "album",
        name: "Those Three",
        singer: "Punjabi MC",
        releaseDate: "2020-12-25",
        duration: "4:02",
        img: "https://i.scdn.co/image/ab67616d0000b273e5f6a7b8c9d0e1f2h3i4j5k",
        description: "Classic Punjabi hip-hop collaboration with three legends."      }
    ]
  },

  hindi: {
    songs: [
      {
        type: "album",
        name: "Kesariya",
        singer: "Arijit Singh",
        releaseDate: "2022-07-17",
        duration: "4:28",
        img: "https://imgs.search.brave.com/TPwee0V9kT6O7v_DR-AFOODNkMnAutAdKRhDxi0HNog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8x/OTEvS2VzYXJpeWEt/RnJvbS1CcmFobWFz/dHJhLUhpbmRpLTIw/MjItMjAyMjA3MTcw/OTI4MjAtNTAweDUw/MC5qcGc",
        description: "Romantic Bollywood song from Brahmastra."
      },
      {
        type: "single track",
        name: "Apna Bana Le",
        singer: "Arijit Singh",
        releaseDate: "2022-11-08",
        duration: "4:21",
        img: "https://imgs.search.brave.com/NvBjo5mWh6GYTXWbbw2Cx65MJ6uNdaxSxw51E34KRSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS84/MTUvQmhlZGl5YS1I/aW5kaS0yMDIzLTIw/MjMwOTI3MTU1MjEz/LTUwMHg1MDAuanBn",
        description: "Soft romantic track with emotional vibes."
      },
      {
        type: "album",
        name: "Tum Hi Ho",
        singer: "Arijit Singh",
        releaseDate: "2013-04-03",
        duration: "4:22",
        img: "https://picsum.photos/seed/tum-hi-ho/400/400",
        description: "A timeless romantic Bollywood ballad."
      },
      {
        type: "single track",
        name: "Chaleya",
        singer: "Arijit Singh",
        releaseDate: "2023-08-14",
        duration: "3:20",
        img: "https://picsum.photos/seed/chaleya/400/400",
        description: "A modern love track with smooth vocals and groove."
      },
      {
        type: "album",
        name: "Kaise Hua",
        singer: "Vishal Mishra",
        releaseDate: "2019-06-13",
        duration: "4:08",
        img: "https://picsum.photos/seed/kaise-hua/400/400",
        description: "Emotional Hindi melody with soulful expression."
      }
    ]
  },

  english: {
    songs: [
      {
        type: "album",
        name: "Blinding Lights",
        singer: "The Weeknd",
        releaseDate: "2019-11-29",
        duration: "3:20",
        img: "https://imgs.search.brave.com/blvhv_0anSpCjIBbyOehy5aeKhPEPcSVaI01cnf6Cvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg0MjIy/MzIuanBn",
        description: "A global hit with retro synth-pop vibes."
      },
      {
        type: "single track",
        name: "Shape of You",
        singer: "Ed Sheeran",
        releaseDate: "2017-01-06",
        duration: "3:53",
        img: "https://imgs.search.brave.com/m2LKU1fuEqgGppG7W9dfQTNj-uSVBEduU3xBy3wiAcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1HTmxPRFJo/WWpFdE1UWTNaQzAw/WTJRd0xUazBZMkl0/TkRFME5EVXlZbVF4/WVdRNFhrRXlYa0Zx/Y0djQC5qcGc",
        description: "One of the most streamed songs worldwide."
      },
      {
        type: "album",
        name: "Levitating",
        singer: "Dua Lipa",
        releaseDate: "2020-10-01",
        duration: "3:23",
        img: "https://picsum.photos/seed/levitating/400/400",
        description: "Upbeat disco-pop anthem with dance energy."
      },
      {
        type: "single track",
        name: "As It Was",
        singer: "Harry Styles",
        releaseDate: "2022-04-01",
        duration: "2:47",
        img: "https://picsum.photos/seed/as-it-was/400/400",
        description: "A catchy modern pop track with retro feel."
      },
      {
        type: "album",
        name: "Someone You Loved",
        singer: "Lewis Capaldi",
        releaseDate: "2018-11-08",
        duration: "3:02",
        img: "https://picsum.photos/seed/someone-you-loved/400/400",
        description: "A heartfelt ballad known for emotional lyrics."
      }
    ]
  }
};
//You can add more songs and genres to the musicData object as needed. Any language and song can be added.
function App() {
  return (
    <div className="h-screen bg-[radial-gradient(circle_at_15%_10%,#22c55e_0%,#0f5132_35%,#02120d_100%)] p-4">
      <div className="flex h-full rounded-4xl overflow-hidden border border-emerald-300/20 bg-[#0b2d23]/60 backdrop-blur-xl shadow-[0_25px_80px_rgba(16,185,129,0.35)]">
        <NavBar />
        <div className="flex min-w-0 flex-1">
          <div className="flex min-w-0 flex-col flex-1 overflow-y-auto scrollbar-hide gap-7 px-8 py-7 bg-white/3">
            <SearchBar />
            {Object.entries(musicData).map(([language, data]) => (
              <div key={language} className="w-full">
                <h1 className="text-2xl font-bold text-emerald-50 mb-4 capitalize">{language} Songs</h1>
                <Songlist musicData={data} />
              </div>
            ))}
          </div>
          <CurrentSong />
        </div>
      </div>
    </div>
  )
}

export default App
