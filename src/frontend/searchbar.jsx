import { Search } from 'lucide-react'

function SearchBar() {
	return (
		<div className="w-full flex items-center justify-between gap-4 mb-2">
			<div className="min-w-0 flex-1 flex items-center gap-3">
				<div className="relative flex-1">
					<Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-200/70" />
					<input
						type="text"
						placeholder="Search songs, artists, albums"
						className="w-full bg-emerald-900/45 border border-emerald-300/30 text-white placeholder:text-emerald-200/60 rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
					/>
				</div>
				<button
					type="button"
					className="px-5 py-2 rounded-full bg-emerald-200 text-emerald-950 font-semibold hover:bg-emerald-100 transition-colors"
				>
					Search
				</button>
			</div>

			<div className="flex items-center gap-3 shrink-0">
				<button
					type="button"
					className="px-5 py-2 rounded-full text-emerald-100 border border-emerald-300/30 hover:bg-white/10 transition-colors"
				>
					Log In
				</button>
				<button
					type="button"
					className="px-5 py-2 rounded-full bg-emerald-200 text-emerald-950 font-semibold hover:bg-emerald-100 transition-colors"
				>
					Sign Up
				</button>
			</div>
		</div>
	)
}

export default SearchBar
