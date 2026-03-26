import { House, Compass, Radio, Rss, User, Music, Clock, Disc3, FileText, ListMusic, Volume2 } from 'lucide-react'

function NavBar() {
  return (
    <div className="h-full w-72 bg-[#03150f]/94 text-emerald-50 flex flex-col px-6 py-8 overflow-y-auto border-r border-emerald-300/20 scrollbar-hide shadow-[inset_-1px_0_0_rgba(16,185,129,0.14),0_8px_30px_rgba(0,0,0,0.35)]">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-7 h-7 bg-emerald-300/85 rounded-md flex items-center justify-center shadow-[0_0_20px_rgba(110,231,183,0.35)]">
          <Music size={16} className="text-emerald-950" />
        </div>
        <h1 className="text-lg font-bold tracking-wider text-emerald-50">MUSICO-PLAYER</h1>
      </div>

        {/* Recommend Section */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-emerald-100/75 mb-4 uppercase tracking-widest">Recommend</h3>
        <nav className="space-y-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-emerald-300/18 hover:bg-emerald-300/26 cursor-pointer transition-colors group border border-emerald-300/35 shadow-[0_0_14px_rgba(16,185,129,0.2)]">
            <House size={15} className="text-emerald-100" />
            <span className="text-sm font-medium group-hover:text-white">Home</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <Compass size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Explore</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <Music size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Genres</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <Radio size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Radio</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <User size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Artist</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <Disc3 size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Albums</span>
          </div>
        </nav>
      </div>

      {/* My Library Section */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-emerald-100/75 mb-4 uppercase tracking-widest">My library</h3>
        <nav className="space-y-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <Clock size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Recently Played</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <Disc3 size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Albums</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <Rss size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Favorite Songs</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <FileText size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Local Files</span>
          </div>
        </nav>
      </div>

      {/* Playlist Section */}
      <div>
        <h3 className="text-xs font-semibold text-emerald-100/75 mb-4 uppercase tracking-widest">Playlist</h3>
        <nav className="space-y-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors group bg-emerald-300/18 border border-emerald-300/35 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <Volume2 size={15} className="text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100">Unplugged</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <ListMusic size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Best of Aroob</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-200/16 cursor-pointer transition-colors group">
            <ListMusic size={15} className="text-emerald-300/80 group-hover:text-emerald-100" />
            <span className="text-sm font-medium text-emerald-100/90 group-hover:text-white">Folk Story</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;