export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="font-bold text-xl">
            ESA Business Hub
          </a>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="/servizi">Servizi</a>
            <a href="/dashboard-demo">Dashboard Demo</a>
            <a href="/offerte">Offerte</a>
            <a href="/contatti">Contatti</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-red-500 font-semibold mb-4">
            Accesso gratuito per aziende locali
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            La piattaforma per aumentare visibilità, contatti e clienti.
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            ESA Business Hub nasce per aiutare attività locali, negozi,
            professionisti e aziende a entrare in un ecosistema digitale gratuito,
            con servizi aggiuntivi attivabili solo quando servono.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/iscrivi-azienda"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold text-center"
            >
              Accedi gratis
            </a>

            <a
              href="/servizi"
              className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-center"
            >
              Scopri i servizi
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">Profilo aziendale</h2>
          <p className="text-gray-300">
            Una presenza digitale per presentare attività, contatti, servizi e offerte.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">Servizi su richiesta</h2>
          <p className="text-gray-300">
            Social, app, web app, campagne ads, LeadFlow e visibilità premium.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">Dashboard demo</h2>
          <p className="text-gray-300">
            Un’area dimostrativa per mostrare come l’azienda potrà gestire la presenza online.
          </p>
        </div>
      </section>
    </main>
  );
}
