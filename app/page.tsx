export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Payment Risk Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Early Warning System for<br />
          <span className="text-[#58a6ff]">Stripe Account Suspensions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stripe Risk Radar monitors your transaction patterns, dispute rates, and account health metrics in real time — alerting you before Stripe flags your account.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Early Access — $79/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Metrics strip */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">98%</p>
            <p className="text-xs text-[#8b949e] mt-1">Detection accuracy</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">&lt;60s</p>
            <p className="text-xs text-[#8b949e] mt-1">Alert latency</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">14+</p>
            <p className="text-xs text-[#8b949e] mt-1">Risk signals tracked</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-xl p-8 bg-[#161b22] text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$79</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Real-time dispute rate monitoring',
              'Chargeback velocity alerts',
              'Refund ratio tracking',
              'Webhook-powered live dashboard',
              'Email + Slack notifications',
              'Risk score history & trends',
              'Stripe account health report',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does Stripe Risk Radar connect to my account?',
              a: 'You provide a restricted Stripe API key with read-only access. We use Stripe webhooks to receive real-time events and the Stripe API to pull historical data for baseline analysis.',
            },
            {
              q: 'What risk signals does it monitor?',
              a: 'We track dispute rates, chargeback velocity, refund ratios, high-risk card BINs, unusual transaction volumes, geographic anomalies, and more — the same signals Stripe\'s own risk team watches.',
            },
            {
              q: 'How early can it warn me before Stripe takes action?',
              a: 'Most account reviews are preceded by 7–14 days of elevated risk signals. Our system typically alerts you within seconds of a threshold breach, giving you time to investigate and respond.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Stripe Risk Radar. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
