export default function Resume() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-24">
        <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8 sm:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cyrus Eslahi — Resume</h1>
            <div className="space-y-1 text-[#050608]/70">
              <p>The Woodlands, TX</p>
              <p>Email: <a href="mailto:cyrus.eslahi.1@gmail.com" className="text-[#007AFF] hover:opacity-70">cyrus.eslahi.1@gmail.com</a></p>
              <p>Website: <a href="https://cyruseslahi.me" className="text-[#007AFF] hover:opacity-70">cyruseslahi.me</a></p>
              <p>TikTok: cyrus.engineer (2k followers)</p>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">SUMMARY</h2>
            <p className="text-[#050608]/80 leading-relaxed">
              Junior high student passionate about building real products — websites, AI tools, robotics projects, and full games. Experienced with modern frameworks, Next.js, Tailwind, Supabase, Roblox Lua, Arduino, and 3D printing workflows. Highly self-driven, learns fast, builds fast, and ships finished projects online.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">SKILLS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Programming:</h3>
                <p className="text-[#050608]/80">JavaScript, TypeScript, HTML, CSS, Next.js (App Router), Tailwind CSS, Supabase, APIs, Authentication, Python (AI tools & automation), Roblox Lua, Arduino / microcontrollers</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools:</h3>
                <p className="text-[#050608]/80">Cursor AI, Augment AI, GitHub, Vercel, 3D printing (Bambu Lab A1 Mini), OBS, CapCut, DaVinci Resolve, Adobe Photoshop / Figma basics</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Strengths:</h3>
                <p className="text-[#050608]/80">Fast learner, Problem solving, UI/UX instinct, Building + shipping real projects, Entrepreneur mindset</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">PROJECTS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Personal Portfolio (cyruseslahi.me)</h3>
                <p className="text-[#050608]/80">A full Apple-style, modern portfolio website built with Next.js 14, Tailwind, Vercel, and Supabase. Includes live-edit mode with Ctrl+Shift+Alt+P and online-synced content editing.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI Desk Robot</h3>
                <p className="text-[#050608]/80">Custom-designed interactive robot with wake/sleep animations, LDR/BH1750 light detection, daily scheduling logic, and speech output. Uses microcontroller hardware + custom animations.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">WhisperNotes</h3>
                <p className="text-[#050608]/80">Note-taking concept app that records lectures and uses AI transcription + summarization. Designed for students who want instant study notes.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Roblox Games</h3>
                <p className="text-[#050608]/80">Don't Wake Grandpa — Multi-location randomized sleeping system + moving power core. Explode a Friend — Ability system with ragdoll physics + missile power upgrades. Almost Impossible Obby — Checkpoints, time trials, and speed ranks.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Custom Websites & Apps</h3>
                <p className="text-[#050608]/80">Built multiple app concepts using Cursor + Augment (FocusGrid, Rhythm Battle Arena, CipherPad, etc.), including UI mockups, login flows, animations, and full front-end builds.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">3D Printing Business Work</h3>
                <p className="text-[#050608]/80">Designed and manufactured parts using a Bambu Lab A1 Mini, including "Happy Cactus" pots and magnet-based functional prints. Sold items at school and online.</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Freelance Developer & Creator</h3>
                <p className="text-sm text-[#050608]/60 mb-2">2023–Present</p>
                <ul className="list-disc list-inside text-[#050608]/80 space-y-1">
                  <li>Built websites and small apps for friends, school projects, and collaborations.</li>
                  <li>Created multiple Roblox game systems (UI, scripts, mechanics, physics interactions).</li>
                  <li>YouTube channel growing from consistent tech/engineering content.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Entrepreneur Activities</h3>
                <ul className="list-disc list-inside text-[#050608]/80 space-y-1">
                  <li>Resold tech items locally (Facebook Marketplace flips).</li>
                  <li>Designed and sold 3D-printed items.</li>
                  <li>Contacted brands for product review opportunities.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">EDUCATION</h2>
            <div>
              <h3 className="font-semibold mb-1">Junior High — The Woodlands, TX</h3>
              <p className="text-[#050608]/80">Advanced math track (pre-algebra + learning algebra independently to skip ahead). Self-taught programming and electronics.</p>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">INTERESTS</h2>
            <p className="text-[#050608]/80">
              Artificial Intelligence, Robotics, UI/UX, Web Development, Game Design, 3D printing, Engineering, Personal Finance & Investing, Entrepreneurship.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

