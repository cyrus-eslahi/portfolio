export default function Contact() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-[#050608]/70">
            For collaborations, ideas, or questions, reach out anytime.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-[#050608]/80 leading-relaxed">
          <p>
            If you want help building something — a website, app, tool, or small software idea — hit me up.
          </p>
          <p>
            I'm down to build stuff for free or super cheap, as long as the project is interesting and lets me learn something new.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Whether you need:</h2>
            <ul className="space-y-2 list-disc list-inside text-[#050608]/70">
              <li>A clean personal website</li>
              <li>A small mobile/desktop app</li>
              <li>AI-powered tools</li>
              <li>Roblox systems or game mechanics</li>
              <li>UI design or prototypes</li>
            </ul>
          </div>
          <p className="mt-8 font-medium">
            I got you.
          </p>
          <div className="mt-12 pt-8 border-t border-[#D0D3DA]">
            <p className="text-base text-[#050608]/70 mb-2">Email:</p>
            <a
              href="mailto:cyrusselah1@gmail.com"
              className="text-xl font-semibold text-[#007AFF] hover:opacity-70 transition-opacity"
            >
              cyrusselah1@gmail.com
            </a>
            <p className="mt-6 text-base text-[#050608]/70">
              Or reach out anywhere you already know me.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

