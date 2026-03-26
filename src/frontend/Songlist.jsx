import React from "react";
import { Play } from "lucide-react";

const Songlist = (props) => {
    return (
         <div className="song-list w-full overflow-x-auto scrollbar-hide">
                    <div className="Punjabi-songs flex gap-6 min-w-max pb-2 px-1">
                      {props.musicData.songs.map((song, index) => (
                <div key={index} className="song-card w-56 shrink-0 bg-emerald-600/40 border border-emerald-300/20 hover:bg-emerald-500/50 p-4 rounded-3xl backdrop-blur-sm transition-colors cursor-pointer">
                          <div className="relative group">
                            <img src={song.img} alt={song.name} className="song-image w-full h-40 object-cover rounded-3xl hover:scale-105 transition-transform" />
                            <button onClick={() => props.onPlaySong(song)} className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <Play size={32} className="text-emerald-200 fill-emerald-200" />
                            </button>
                          </div>
                          <h2 className="song-name text-white font-bold text-base leading-tight mt-3 line-clamp-2">{song.name}</h2>
                  <p className="song-singer text-emerald-100/85 text-sm font-medium mt-1">{song.singer}</p>
                  <p className="song-release-date text-emerald-200/70 text-xs mt-2">Released: {song.releaseDate}</p>
                  <p className="song-duration text-emerald-200/70 text-xs">Duration: {song.duration}</p>
                  <p className="song-description text-emerald-100/55 text-xs leading-relaxed mt-1 line-clamp-2">{song.description}</p>
                        </div>
                      ))}
                    </div>
                    </div>
    )
}

export default Songlist;
