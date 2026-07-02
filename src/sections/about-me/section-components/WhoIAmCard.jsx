import Stack from './Stack'

const hobbies = [
  {
    title: 'Music',
    description: 'Listening and discovering tracks across different genres.',
  },
  {
    title: 'Video games',
    description: 'Unwinding with story-driven and competitive games.',
  },
  {
    title: 'Movies',
    description: 'Watching films and series for great stories and visuals.',
  },
  {
    title: 'Guitar',
    description: 'Practicing chords and learning new songs on guitar.',
  },
  {
    title: 'Band',
    description: 'Playing live and creating music together with others.',
  },
]

function CardHeading({ eyebrow, children }) {
  return (
    <div className="mb-3">
      {eyebrow && (
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
          {eyebrow}
        </p>
      )}
      <h3 className="text-lg font-semibold tracking-tight text-white md:text-3xl">{children}</h3>
    </div>
  )
}

function HobbyStackCard({ title, description, imageSrc }) {
  if (imageSrc) {
    return <img src={imageSrc} alt={title ?? ''} className="card-image" draggable={false} />
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#16161f] p-4 text-center">
      <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="text-[11px] leading-snug text-slate-400">{description}</p>
    </div>
  )
}

const stackItems = [
  { title: 'Profile', imageSrc: '/profile.webp' },
  { title: 'Band', imageSrc: '/stack/band-stage.png' },
  { title: 'Music studio', imageSrc: '/stack/band-stage(2).jpg' },
  { title: 'Team', imageSrc: '/stack/team.png' },
  { title: 'Friends', imageSrc: '/stack/friends.png' },
]

export default function WhoIAmCard() {
  const stackCards = stackItems.map((item, index) => (
    <HobbyStackCard
      key={item.title ?? index}
      title={item.title}
      description={item.description}
      imageSrc={item.imageSrc}
    />
  ))

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-visible rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
      <CardHeading>Background</CardHeading>

      <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
        I am a second year Computer Science student at Mapúa Malayan Colleges Mindanao with
        experience in web and mobile development, leaning toward front-end full-stack work.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        I enjoy building user-friendly, efficient applications and continuously improving how
        interfaces look, feel, and perform.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/10 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">Age</p>
          <p className="mt-1.5 text-base font-medium text-slate-100">20</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Place of birth
          </p>
          <p className="mt-1.5 text-base font-medium text-slate-100">Davao City</p>
        </div>
      </div>

      <div className="relative z-10 mt-6 min-h-0 flex-1 pb-4">
        <div className="mb-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Off screen
          </p>
          <h3 className="text-lg font-semibold tracking-tight text-white md:text-2xl">Beyond coding</h3>
        </div>
        <p className="text-sm leading-relaxed text-slate-400">
          When I am not coding or studying, I am usually making music, gaming, or catching a good
          film.
        </p>

        <div className="mt-4 grid w-full grid-cols-2 gap-3">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="rounded-xl border border-orange-500/25 bg-orange-500/10 p-3.5 backdrop-blur-sm"
            >
              <p className="text-lg font-semibold text-orange-300 md:text-xl">{hobby.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-auto absolute -bottom-8 right-4 z-20 h-52 w-52">
        <Stack
          randomRotation
          sensitivity={180}
          sendToBackOnClick
          pauseOnHover
          autoplay
          autoplayDelay={3500}
          cards={stackCards}
        />
      </div>
    </div>
  )
}
