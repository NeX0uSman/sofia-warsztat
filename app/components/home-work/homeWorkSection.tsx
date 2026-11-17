const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Przyjęcie auta i rozmowa",
    desc: "Słuchamy Twoich obserwacji, wykonujemy jazdę próbną i spisujemy jasną kartę przyjęcia bez technicznego żargonu.",
    tag: "10–15 min",
  },
  {
    step: "02",
    title: "Diagnostyka i zdjęcia SMS-em",
    desc: "Wjeżdżamy autem na podnośnik, robimy zdjęcia zużytych elementów oraz zrzut z komputera i wysyłamy prosto na Twój telefon.",
    tag: "Pełna przejrzystość",
  },
  {
    step: "03",
    title: "Twoja akceptacja kosztorysu",
    desc: "Przedstawiamy 2 warianty części (OE i sprawdzone zamienniki). Nic nie wymieniamy bez Twojego wyraźnego „tak”.",
    tag: "Zero niespodzianek",
  },
  {
    step: "04",
    title: "Naprawa, test i gwarancja",
    desc: "Po montażu wykonujemy kontrolę jakości, wpisujemy historię do książki serwisowej i wydajemy pisemną 24-miesięczną gwarancję.",
    tag: "24 mies. ochrony",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="jak-pracujemy" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-card text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
            Standard obsługi SOFIA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight leading-tight">
            Cztery kroki do spokojnej głowy za kierownicą.
          </h2>
          <p className="mt-3 text-slatebody text-base sm:text-[17px] leading-relaxed">
            Wiemy, że wizyta u mechanika bywa stresująca. Dlatego zaprojektowaliśmy proces, w którym
            to Ty masz pełną kontrolę nad zakresem i budżetem naprawy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKFLOW_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-6 shadow-card border border-zinc-200/70 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta font-display font-extrabold text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-oat text-[11px] font-semibold text-slatebody">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-slatebody leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Potwierdzane pisemnie</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}