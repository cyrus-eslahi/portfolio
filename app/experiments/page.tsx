export default function Experiments() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Experiments</h1>
          <p className="text-lg text-[#050608]/70">
            Quick prototypes and ideas exploring new technologies and design patterns.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-[#050608]/80 leading-relaxed">
          <p>
            This is where all the random ideas, prototypes, tests, and late-night "let's see if this works" builds go.
          </p>
          <p>
            Not everything here is a full project — some are small scripts, UI concepts, AI tools, Roblox mechanics, or tech demos that helped me learn something new.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">I experiment with:</h2>
            <ul className="space-y-2 list-disc list-inside text-[#050608]/70">
              <li>AI agents + automation</li>
              <li>Roblox powers, physics, and effects</li>
              <li>UI/UX concepts for apps</li>
              <li>Arduino / sensor systems</li>
              <li>3D printing designs</li>
              <li>Game mechanics and animations</li>
            </ul>
          </div>
          <p className="mt-8">
            Most of these start as tiny ideas and end up teaching me a new skill. This page is basically my lab.
          </p>
        </div>
      </div>
    </main>
  )
}

