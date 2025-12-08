export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-[#050608]/70">
            A collection of projects that showcase clean design and thoughtful engineering.
          </p>
        </div>
        <div className="space-y-8">
          {/* WhisperNotes */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">WhisperNotes (App Concept – Completed Planning Phase)</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              An AI-powered note-taking tool designed for students. You record a lesson, and WhisperNotes automatically summarizes it, organizes key points, and turns your audio into clean notes. The UI and onboarding flow were fully planned, along with app behavior, pages, and interactions.
            </p>
          </div>

          {/* Portfolio Website */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">Portfolio Website (cyruseslahi.me)</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              A fully built personal website showcasing your work, projects, and experiments. Clean layout, minimal design, responsive, and fully functional pages for About, Projects, Experiments, and Contact.
            </p>
          </div>

          {/* Geometry Dash Level */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">Geometry Dash Level: Portal Transition + Animation</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              A full GD sequence where your character hits a transformation portal, slows down, zooms in, lands with a custom impact animation, and triggers screen shake + darkness. Fully implemented and working inside the game.
            </p>
          </div>

          {/* Facebook Marketplace */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">Facebook Marketplace Optimization Descriptions</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              A micro-project you're actually cracked at: custom, high-conversion product descriptions for items you sell. Clean, short, and designed to move items fast. Used successfully for bikes, cameras, and other items.
            </p>
          </div>

          {/* OpenHack Installation */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">OpenHack Installation Setup</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              Configured and installed the Geode SDK mod (OpenHack) for Geometry Dash, including correct placement, integration, and testing.
            </p>
          </div>

          {/* AI Agents Development Framework */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">AI Agents Development Framework (Tooling Setup Complete)</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              Not a full agent yet, but the entire tooling stack is complete: Visual Studio, Augment, OpenAI API, Supabase, GitHub. That whole system is already organized and ready for building real agents.
            </p>
          </div>

          {/* Roblox Missile Power */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">Roblox Game: Missile Power Ability</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              A full, functioning ability in your game where a missile launches from the player's hand, travels 40 studs, and ragdolls the target on impact. Fully scripted + tested.
            </p>
          </div>

          {/* Roblox Obby Checkpoint */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">Roblox Obby Game – Checkpoint Reset System</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              A working checkpoint system where pressing R respawns you at the last touched portal instead of the start. Clean, bug-free, and used in your obby projects.
            </p>
          </div>

          {/* Roblox Animation */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">Roblox Animation + Trigger System</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              Completed slow-motion landing animation, screen shake, and environment triggers for your level. Includes custom air animations and timed transitions.
            </p>
          </div>

          {/* Personal Finance Tools */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">Personal Finance Simulations & Tools</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              Multiple working compound-interest simulations, monthly contribution models, and financial planning tools to help you track investments (VOO, SPY, NVDA, etc.), including ROI projections and growth curves.
            </p>
          </div>

          {/* 3D Printing Business */}
          <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-2">3D Printing Business (Entropy Deals) – Completed Product Line</h2>
            <p className="text-[#050608]/70 leading-relaxed">
              You fully created: Happy Cactus pots, magnetic desk accessories, custom 3D prints for school, product testing + pricing strategy. Fully real, fully working, and you actually sold items.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

