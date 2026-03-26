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
						className="w-full bg-emerald-900/70 border border-emerald-300/50 text-white placeholder:text-emerald-200/80 rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-300/80"
					/>
				</div>
				<button
					type="button"
					className="px-5 py-2 rounded-full bg-emerald-700 text-emerald-50 font-semibold hover:bg-emerald-600 transition-colors border border-emerald-400/30"
				>
					Search
				</button>
			</div>

			<div className="flex items-center gap-3 shrink-0">
				<button
					type="button"
					className="px-5 py-2 rounded-full bg-emerald-800 text-emerald-50 font-semibold hover:bg-emerald-700 transition-colors border border-emerald-400/25"
				>
					Log In
				</button>
				<button
					type="button"
					className="px-5 py-2 rounded-full bg-emerald-700 text-emerald-50 font-semibold hover:bg-emerald-600 transition-colors border border-emerald-400/30"
				>
					Sign Up
				</button>
			</div>
		</div>
	)
}

export default SearchBar
