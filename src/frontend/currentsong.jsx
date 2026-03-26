import { useEffect, useRef, useState } from 'react'
import {
	Heart,
	Share2,
	Shuffle,
	SkipBack,
	Play,
	Pause,
	SkipForward,
	Repeat,
	Volume2,
	Plus,
	MoreHorizontal,
} from 'lucide-react'

function CurrentSong({ currentSong }) {
	const audioRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [durationInSeconds, setDurationInSeconds] = useState(currentSong?.duration ? parseInt(currentSong.duration) * 60 : 260)
	const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0)

	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60)
		const secs = Math.floor(seconds % 60)
		return `${mins}:${secs.toString().padStart(2, '0')}`
	}

	const progressPercent = durationInSeconds > 0 ? (currentTimeInSeconds / durationInSeconds) * 100 : 0

	useEffect(() => {
		const audio = audioRef.current
		if (!audio) {
			return
		}

		const handleLoadedMetadata = () => {
			if (Number.isFinite(audio.duration) && audio.duration > 0) {
				setDurationInSeconds(audio.duration)
			}
		}

		const handleTimeUpdate = () => {
			setCurrentTimeInSeconds(audio.currentTime)
		}

		const handleEnded = () => {
			setIsPlaying(false)
		}

		audio.addEventListener('loadedmetadata', handleLoadedMetadata)
		audio.addEventListener('timeupdate', handleTimeUpdate)
		audio.addEventListener('ended', handleEnded)

		return () => {
			audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
			audio.removeEventListener('timeupdate', handleTimeUpdate)
			audio.removeEventListener('ended', handleEnded)
		}
	}, [])

	const handlePlayPause = async () => {
		const audio = audioRef.current
		if (!audio) {
			return
		}

		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
			return
		}

		try {
			await audio.play()
			setIsPlaying(true)
		} catch {
			setIsPlaying(false)
		}
	}

	const handleProgressClick = (event) => {
		const audio = audioRef.current
		if (!audio || durationInSeconds <= 0) {
			return
		}

		const rect = event.currentTarget.getBoundingClientRect()
		const clickOffsetX = event.clientX - rect.left
		const nextPercent = Math.min(100, Math.max(0, (clickOffsetX / rect.width) * 100))
		const nextTime = (nextPercent / 100) * durationInSeconds
		audio.currentTime = nextTime
		setCurrentTimeInSeconds(nextTime)
	}

	const tags = [
		{ icon: '🎸', label: 'Acoustic' },
		{ icon: '🎹', label: 'Piano jazz' },
		{ icon: '🥁', label: 'Jazz' },
		{ icon: '🔥', label: 'Indie pop' },
	]

	return (
		<aside className="w-80 shrink-0 bg-[#07271c]/95 border-l border-emerald-300/40 px-5 py-6 hidden xl:flex xl:flex-col gap-5">
			<audio
				ref={audioRef}
				src="/My%20Prime.mp3"
				preload="metadata"
			/>

			<div className="bg-emerald-900/80 rounded-3xl p-4 shadow-lg border border-emerald-300/40 hover:border-emerald-200/60 hover:shadow-emerald-500/40 transition-all duration-300">
				<img
					src={currentSong?.img || "https://imgs.search.brave.com/uOVh6hH8VnGN268bY8J3Wc-Izy-8dxI8QO3JIqc-KKQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLXNGS3p1/Ymppbzd1anJieHIt/RURsUlN3LXQxMDgw/eDEwODAuanBn"}
					alt="Current song"
					className="w-full h-56 rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.02]"
				/>

				<div className="mt-4 flex items-center justify-between gap-3">
					<div className="min-w-0">
						<h3 className="text-white font-bold text-lg truncate">{currentSong?.name || "My Prime"}</h3>
						<p className="text-slate-300 text-sm">{currentSong?.singer || "Navaan Sandhu"}</p>
					</div>
					<button
						type="button"
						className="w-9 h-9 rounded-full bg-white/25 hover:bg-emerald-200 hover:text-emerald-900 transition-all duration-200 flex items-center justify-center text-white"
					>
						<Plus size={18} className="transition-transform duration-200 hover:scale-110" />
					</button>
				</div>
			</div>

<div className="bg-emerald-900/70 rounded-2xl p-4 border border-emerald-300/40 hover:border-emerald-200/60 transition-colors duration-300">
				<div className="flex items-center justify-between text-slate-200">
					<div className="flex items-center gap-3">
						<Heart size={16} className="cursor-pointer transition-all duration-200 hover:text-emerald-200 hover:scale-110" />
						<Share2 size={16} className="cursor-pointer transition-all duration-200 hover:text-emerald-200 hover:scale-110" />
						<Shuffle size={16} className="cursor-pointer transition-all duration-200 hover:text-emerald-200 hover:scale-110" />
					</div>

					<div className="flex items-center gap-4">
						<SkipBack size={16} className="cursor-pointer transition-all duration-200 hover:text-emerald-200 hover:scale-110" />
						<button
							type="button"
							onClick={handlePlayPause}
							className="w-9 h-9 rounded-full bg-white text-emerald-900 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-emerald-200"
						>
							{isPlaying ? <Pause size={18} /> : <Play size={18} />}
						</button>
						<SkipForward size={16} className="cursor-pointer transition-all duration-200 hover:text-emerald-200 hover:scale-110" />
					</div>

					<div className="flex items-center gap-3">
						<Repeat size={16} className="cursor-pointer transition-all duration-200 hover:text-emerald-200 hover:scale-110" />
						<Volume2 size={16} className="cursor-pointer transition-all duration-200 hover:text-emerald-200 hover:scale-110" />
					</div>
				</div>

				<div className="mt-4">
					<div
						onClick={handleProgressClick}
						className="w-full h-1 bg-emerald-200/45 rounded-full overflow-hidden transition-all duration-200 hover:h-1.5 cursor-pointer"
					>
						<div className="h-full bg-emerald-100 rounded-full" style={{ width: `${progressPercent}%` }} />
					</div>
					<div className="mt-2 flex justify-between text-xs text-slate-300">
						<span>{formatTime(currentTimeInSeconds)}</span>
						<span>{formatTime(durationInSeconds)}</span>
					</div>
				</div>
			</div>

			<div className="bg-emerald-900/70 rounded-2xl p-4 border border-emerald-300/40 hover:border-emerald-200/60 transition-colors duration-300">
				<div className="flex items-center justify-between mb-3">
					<h4 className="text-white font-semibold text-xl">Tags</h4>
					<button
						type="button"
						className="text-slate-300 hover:text-white transition-colors"
					>
						<MoreHorizontal size={18} />
					</button>
				</div>

				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<button
							key={tag.label}
							type="button"
							className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/65 border border-emerald-300/40 text-emerald-100 text-sm hover:border-emerald-200/70 hover:text-white hover:bg-emerald-800/60 transition-all duration-200"
						>
							<span className="text-xs">{tag.icon}</span>
							<span>{tag.label}</span>
						</button>
					))}
				</div>
			</div>
		</aside>
	)
}

export default CurrentSong
