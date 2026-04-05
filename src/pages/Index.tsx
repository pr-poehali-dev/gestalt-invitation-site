import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/a6fb0e7f-e44b-4597-8b80-f26e820765c9/files/258ccdfe-280d-4375-9e0a-ccd1f444d404.jpg";
const STUDENTS_IMG = "https://cdn.poehali.dev/projects/a6fb0e7f-e44b-4597-8b80-f26e820765c9/files/b12ff4b5-0ece-4bde-be97-c3a7d362b747.jpg";

const navLinks = [
  { label: "О программе", href: "#about" },
  { label: "Как это устроено", href: "#how" },
  { label: "Модули", href: "#modules" },
  { label: "Расписание", href: "#schedule" },
  { label: "Ведущие группы", href: "#teachers" },
  { label: "Контакты", href: "#contacts" },
];

const modules = [
  { num: "01", title: "Философские основания", desc: "История гештальт-подхода, его философские корни. Феноменология, экзистенциализм, теория поля как основа мышления гештальт-терапевта.", icon: "BookOpen" },
  { num: "02", title: "Диалогичность", desc: "Принципы диалогических отношений по Буберу. Встреча «Я — Ты» как основа терапевтического контакта и живого присутствия.", icon: "Users" },
  { num: "03", title: "Телесное осознавание", desc: "Тело как источник информации о переживании. Работа с телесными ощущениями, напряжениями и импульсами в гештальт-практике.", icon: "Activity" },
  { num: "04", title: "Этические принципы", desc: "Этика в терапевтических отношениях. Границы, ответственность, профессиональная позиция гештальт-терапевта.", icon: "Shield" },
  { num: "05", title: "Теория self", desc: "Концепция self в гештальт-подходе: id, ego, personality. Функции self и их проявление в контакте с окружающей средой.", icon: "Compass" },
  { num: "06", title: "Цикл контакта", desc: "Стадии контакта и прерывания: слияние, интроекция, проекция, ретрофлексия, дефлексия, эготизм. Работа с фигурой и фоном.", icon: "RefreshCw" },
  { num: "07", title: "Теория поля", desc: "Поле как контекст опыта. Принципы полевого мышления, организм-среда как единое целое, феноменологический метод исследования.", icon: "Layers" },
  { num: "08", title: "Теория развития", desc: "Развитие личности в гештальт-подходе. Ранний опыт, формирование паттернов контакта, ресурсы и дефициты в истории человека.", icon: "Sprout" },
];

const teachers = [
  {
    name: "Геннадий Авилов",
    city: "Кемерово",
    role: "Ассоциированный тренер МГИ",
    exp: "Более 18 лет практики",
    photo: "https://cdn.poehali.dev/projects/a6fb0e7f-e44b-4597-8b80-f26e820765c9/bucket/ce4670ef-2599-4ff6-be0b-9a1bb34f936b.JPG",
    tags: ["Гештальт-терапевт", "Супервизор", "Клинический психолог", "К.пс.н., доцент КемГУ"],
    desc: "Специалист по экзистенциальным вопросам, кризисной психологии, работе с утратами и зависимостями.",
  },
  {
    name: "Юлия Воропаева",
    city: "Новосибирск",
    role: "Аккредитованный гештальт-терапевт, супервизор",
    exp: "Более 5 лет практики",
    photo: "https://cdn.poehali.dev/projects/a6fb0e7f-e44b-4597-8b80-f26e820765c9/bucket/6dd999a8-b1da-49a6-9e72-e63b7c270a17.jpg",
    tags: ["Клинический психолог", "Психосоматика", "Семейный системный терапевт"],
    desc: "Работает с психосоматическими и репродуктивными запросами, семейными системами и глубинными личностными процессами.",
  },
];

const schedule = [
  { month: "Сессия 1", phase: "Философские основания", items: ["История гештальт-подхода", "Феноменологический метод", "Экзистенциальные идеи в основе подхода"] },
  { month: "Сессия 2", phase: "Диалогичность", items: ["Встреча «Я — Ты» по Буберу", "Присутствие и включённость", "Практика живого контакта"] },
  { month: "Сессия 3", phase: "Телесное осознавание", items: ["Тело как источник опыта", "Работа с импульсами и напряжением", "Соматические практики"] },
  { month: "Сессия 4", phase: "Этические принципы", items: ["Этика терапевтических отношений", "Границы и ответственность", "Профессиональная позиция"] },
  { month: "Сессия 5", phase: "Теория self", items: ["Id, ego, personality", "Функции self в контакте", "Работа с границами self"] },
  { month: "Сессия 6", phase: "Цикл контакта", items: ["Стадии и прерывания контакта", "Фигура и фон", "Ретрофлексия, интроекция, проекция"] },
  { month: "Сессия 7", phase: "Теория поля", items: ["Принципы полевого мышления", "Организм и среда как единое", "Феноменологическое исследование"] },
  { month: "Сессия 8", phase: "Теория развития", items: ["Ранний опыт и паттерны контакта", "Ресурсы и дефициты личной истории", "Интеграция и завершение ступени"] },
];

const faqs = [
  { q: "Кому предназначена Первая ступень?", a: "Программа для тех, кто хочет стать гештальт-терапевтом, а также для психологов, коучей и всех, кто стремится глубже понять себя и природу человеческих отношений через гештальт-подход." },
  { q: "Как устроены трёхдневные встречи?", a: "Каждая сессия длится три дня и проходит примерно раз в 1,5 месяца. Группа работает в формате живых встреч: теория, практика, групповой процесс — всё переплетается в единое полотно." },
  { q: "Что такое 180 часов программы?", a: "Это суммарный объём всех восьми трёхдневных сессий. Он соответствует стандартам подготовки гештальт-терапевтов и засчитывается при продолжении обучения на следующих ступенях МГИ." },
  { q: "Нужна ли психологическая подготовка для поступления?", a: "Нет, специального образования не требуется. Важно личное намерение и готовность к глубокой работе с собой в группе." },
  { q: "Что происходит после завершения Первой ступени?", a: "Выпускники могут продолжить обучение на Второй ступени МГИ — работа с клиентами под супервизией. Первая ступень даёт фундамент личностных компетенций и гештальт-мышления." },
];

const DASHBOARD_USER = {
  name: "Мария К.",
  progress: 35,
  completedModules: 2,
  totalModules: 6,
  nextLesson: "Телесные практики — модуль 2",
  nextDate: "12 мая, 19:00",
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [dashTab, setDashTab] = useState<"progress" | "materials" | "schedule">("progress");

  return (
    <div className="min-h-screen bg-cream font-body overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-display text-xs font-normal text-warm-brown/50 tracking-widest uppercase">Московский гештальт институт</span>
            <span className="font-display text-xl font-semibold text-terracotta tracking-wide">Первая ступень</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-warm-brown/70 hover:text-terracotta transition-colors duration-300 font-medium">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDashboard(true)}
              className="hidden lg:flex items-center gap-2 bg-terracotta text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta/90 transition-all duration-300 hover:scale-105"
            >
              <Icon name="User" size={16} />
              Личный кабинет
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-warm-brown">
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-cream border-t border-border/40 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-warm-brown/70 hover:text-terracotta font-medium py-1">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setShowDashboard(true); setMenuOpen(false); }}
              className="flex items-center gap-2 bg-terracotta text-cream px-5 py-3 rounded-full text-sm font-medium mt-2"
            >
              <Icon name="User" size={16} />
              Личный кабинет
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-terracotta/10 blob-1 animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-sage/10 blob-2 animate-float-reverse" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-amber/15 blob-3 animate-float" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="mb-8 animate-fade-in stagger-1">
              <img
                src="https://cdn.poehali.dev/projects/a6fb0e7f-e44b-4597-8b80-f26e820765c9/bucket/6eb65b3f-f799-4835-8202-f37a35f9a02f.png"
                alt="Московский гештальт институт"
                className="h-24 w-auto object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-terracotta-pale text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in stagger-1">Набор открыт — старт 2 октября 2026 г.</div>
            <h1 className="font-display text-6xl lg:text-8xl font-light leading-tight text-warm-brown mb-6 animate-fade-in stagger-2">
              Первая<br />
              <em className="text-terracotta not-italic font-normal">ступень</em>
            </h1>
            <p className="text-lg text-warm-brown/65 leading-relaxed max-w-md mb-10 animate-fade-in stagger-3">Подготовка гештальт-терапевтов. 
Восемь трёхдневных встреч для развития личностных компетенций и знакомства с принципами гештальт-подхода.</p>
            <div className="flex flex-wrap gap-4 animate-fade-in stagger-4">
              <a href="#about" className="bg-terracotta text-cream px-8 py-4 rounded-full text-base font-medium hover:bg-terracotta/90 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-terracotta/20">
                Узнать подробнее
              </a>
              <a href="#contacts" className="border border-terracotta/40 text-terracotta px-8 py-4 rounded-full text-base font-medium hover:bg-terracotta/5 transition-all duration-300">
                Записаться
              </a>
            </div>
            <div className="flex items-center gap-8 mt-12 animate-fade-in stagger-5">
              <div>
                <div className="font-display text-3xl text-terracotta font-semibold">180</div>
                <div className="text-sm text-warm-brown/55 mt-1">академических часов</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-3xl text-terracotta font-semibold">8</div>
                <div className="text-sm text-warm-brown/55 mt-1">трёхдневных сессий</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-3xl text-terracotta font-semibold">1,5</div>
                <div className="text-sm text-warm-brown/55 mt-1">месяца между встречами</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in stagger-3">
            <div className="blob-1 overflow-hidden w-full aspect-square max-w-[520px] mx-auto shadow-2xl shadow-terracotta/10">
              <img src={HERO_IMG} alt="Образовательная программа Росток" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream rounded-3xl p-5 shadow-xl border border-border/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage-pale rounded-full flex items-center justify-center text-xl">🌿</div>
                <div>
                  <div className="text-xs text-warm-brown/50 font-medium">Следующий старт</div>
                  <div className="text-sm font-semibold text-warm-brown">2 октября 2026</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-terracotta rounded-3xl p-5 shadow-xl animate-float-reverse">
              <div className="text-cream text-center">
                <div className="font-display text-3xl font-bold">127</div>
                <div className="text-xs opacity-80 mt-1">выпускников</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-pale blob-2 opacity-60" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="blob-2 overflow-hidden aspect-[4/5] max-w-md shadow-xl shadow-sage/10">
                <img src={STUDENTS_IMG} alt="Студенты программы" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -right-6 top-12 bg-amber text-warm-brown rounded-3xl p-6 shadow-xl max-w-[200px]">
                <div className="font-display text-4xl font-bold">98%</div>
                <div className="text-sm mt-1 opacity-80">рекомендуют программу друзьям</div>
              </div>
            </div>
            <div>
              <div className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">О программе</div>
              <h2 className="font-display text-5xl lg:text-6xl font-light text-warm-brown leading-tight mb-6">
                Группа плетёт <em className="text-terracotta">общее полотно</em>
              </h2>
              <p className="text-warm-brown/65 leading-relaxed mb-6">
                То, что происходит в группе первой ступени — похоже на создание полотна. Каждый участник вносит свои нити, и постепенно рождается нечто, что невозможно создать в одиночку.
              </p>
              <p className="text-warm-brown/65 leading-relaxed mb-8">
                Нити берутся из трёх пучков — и именно их переплетение делает работу живой и настоящей.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { color: "bg-terracotta", label: "Отношения", desc: "То, что рождается между участниками прямо здесь и сейчас — в живом контакте, в моменте встречи." },
                  { color: "bg-amber", label: "Теория", desc: "Психологические концепции, которые дают язык и помогают понять то, что происходит внутри и между нами." },
                  { color: "bg-sage", label: "Личная история", desc: "То, что каждый приносит из своей жизни — опыт, боль, ресурсы, вопросы, которые важны именно ему." },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 items-start p-5 rounded-2xl bg-cream hover:bg-terracotta-pale transition-colors duration-300">
                    <div className={`w-2 self-stretch rounded-full flex-shrink-0 ${item.color} opacity-70`} />
                    <div>
                      <div className="text-sm font-semibold text-warm-brown mb-1">{item.label}</div>
                      <div className="text-sm text-warm-brown/60 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mb-8">
                <div className="flex-1 bg-cream rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-warm-brown">Очный формат</div>
                    <div className="text-xs text-warm-brown/55 mt-0.5">Живые встречи, три дня подряд</div>
                  </div>
                </div>
                <div className="flex-1 bg-cream rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={18} className="text-sage" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-warm-brown">12–16 человек</div>
                    <div className="text-xs text-warm-brown/55 mt-0.5">Небольшая закрытая группа</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-border/50 pt-8">
                <div className="text-xs font-semibold text-warm-brown/40 uppercase tracking-widest mb-4">Фокусы первой ступени</div>
                <ul className="space-y-2.5">
                  {[
                    "Осознавание собственных психических процессов",
                    "Выстраивание диалогических отношений с другими",
                    "Осознавание своих переживаний в отношениях",
                    "Феноменологическое описание переживаний и событий",
                    "Знакомство с основными понятиями гештальт-терапии",
                  ].map((focus, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-warm-brown/65">
                      <div className="w-5 h-5 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
                      </div>
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-terracotta/8 blob-1" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-4">Как это устроено</div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-warm-brown leading-tight">
              Три нити <em className="text-terracotta">каждого занятия</em>
            </h2>
            <p className="text-warm-brown/60 mt-6 text-lg leading-relaxed">
              На каждой встрече группа плетёт полотно из трёх нитей — они входят в разные моменты, переплетаются и создают то, что невозможно получить в одиночку.
            </p>
          </div>

          {/* Three threads visual */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                color: "bg-terracotta",
                colorLight: "bg-terracotta-pale",
                colorText: "text-terracotta",
                label: "Отношения",
                icon: "Users",
                desc: "Живой контакт между участниками прямо в моменте встречи. Именно здесь рождается главное — ощущение, что ты не один.",
                examples: ["Обратная связь внутри группы", "Совместные упражнения", "Работа с тем, что происходит сейчас"],
              },
              {
                color: "bg-amber",
                colorLight: "bg-amber/10",
                colorText: "text-amber-600",
                label: "Теория",
                icon: "BookOpen",
                desc: "Концепции и идеи, которые дают язык для того, что происходит внутри. Теория — не лекция, а карта для живого опыта.",
                examples: ["Короткие мини-лекции", "Разбор психологических механизмов", "Модели и метафоры"],
              },
              {
                color: "bg-sage",
                colorLight: "bg-sage-pale",
                colorText: "text-sage",
                label: "Личная история",
                icon: "Heart",
                desc: "То, что каждый приносит из своей жизни — вопросы, которые важны именно ему, опыт, боль, ресурсы и открытия.",
                examples: ["Личные истории участников", "Работа с собственным материалом", "Связь прошлого с настоящим"],
              },
            ].map((thread) => (
              <div key={thread.label} className="bg-white rounded-4xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-14 h-3 ${thread.color} rounded-full mb-6 opacity-70 group-hover:w-20 transition-all duration-500`} />
                <div className={`w-12 h-12 ${thread.colorLight} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon name={thread.icon as any} size={22} className={thread.colorText} />
                </div>
                <h3 className="font-display text-2xl font-medium text-warm-brown mb-3">{thread.label}</h3>
                <p className="text-sm text-warm-brown/60 leading-relaxed mb-6">{thread.desc}</p>
                <ul className="space-y-2">
                  {thread.examples.map(ex => (
                    <li key={ex} className="flex items-center gap-2.5 text-xs text-warm-brown/50">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${thread.color} opacity-60`} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Weaving metaphor bar */}
          <div className="bg-white rounded-4xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex-1">
              <div className="font-display text-xl font-medium text-warm-brown mb-2">Полотно плетётся всеми вместе</div>
              <p className="text-sm text-warm-brown/60 leading-relaxed">Каждый участник вносит свои нити — и возникает нечто большее, чем сумма частей. Это и есть группа.</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex flex-col gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full ${i % 3 === 0 ? "bg-terracotta w-16" : i % 3 === 1 ? "bg-amber w-12" : "bg-sage w-14"} opacity-60`} />
                ))}
              </div>
              <div className="flex flex-col gap-1.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full ${i % 3 === 2 ? "bg-terracotta w-14" : i % 3 === 0 ? "bg-amber w-16" : "bg-sage w-10"} opacity-40`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-28 relative overflow-hidden" style={{ background: "hsl(25, 30%, 18%)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/a6fb0e7f-e44b-4597-8b80-f26e820765c9/files/c26ff27c-d861-4c4b-a0bf-a34096231016.jpg')", transform: "scaleX(-1)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsl(25,30%,18%) 0%, transparent 15%, transparent 85%, hsl(25,30%,18%) 100%)" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/10 blob-1" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/10 blob-3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-amber text-sm font-semibold tracking-widest uppercase mb-4">Программа</div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-cream leading-tight">
              Восемь <em className="text-amber">сессий</em> — полный путь
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-4xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-display text-5xl font-light text-amber/30">{mod.num}</div>
                  <div className="w-12 h-12 bg-amber/10 rounded-2xl flex items-center justify-center group-hover:bg-amber/20 transition-colors duration-300">
                    <Icon name={mod.icon as any} size={22} className="text-amber" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-medium text-cream mb-3">{mod.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute -top-10 right-0 w-72 h-72 bg-amber/10 blob-2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-4">Расписание</div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-warm-brown leading-tight">
              Восемь сессий — <em className="text-terracotta">один путь</em>
            </h2>
            <p className="text-warm-brown/55 mt-4 text-base">Каждая трёхдневная встреча — это новый виток, примерно раз в 1,5 месяца</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {schedule.map((s, i) => (
              <div key={i} className="bg-cream rounded-3xl p-6 h-full border border-border/50 hover:border-terracotta/30 hover:shadow-sm transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center bg-terracotta text-cream px-3 py-1 rounded-full text-xs font-semibold">
                    {s.month}
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-terracotta/20 flex items-center justify-center group-hover:border-terracotta/50 transition-colors">
                    <span className="text-xs font-bold text-terracotta/40 group-hover:text-terracotta/70">{i + 1}</span>
                  </div>
                </div>
                <div className="font-display text-lg font-medium text-warm-brown mb-4">{s.phase}</div>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-warm-brown/60">
                      <div className="w-1 h-1 bg-terracotta/40 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-terracotta-pale rounded-4xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display text-2xl font-medium text-warm-brown mb-1">180 часов — полный объём Первой ступени</div>
              <div className="text-warm-brown/60 text-sm">Выбери действительно важное</div>
            </div>
            <a href="#contacts" className="bg-terracotta text-cream px-8 py-4 rounded-full font-medium hover:bg-terracotta/90 transition-all duration-300 whitespace-nowrap hover:scale-105">
              Записаться
            </a>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section id="teachers" className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage/8 blob-3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sage text-sm font-semibold tracking-widest uppercase mb-4">Ведущие группы</div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-warm-brown leading-tight">
              Люди, которые <em className="text-terracotta">ведут путь</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {teachers.map((t, i) => (
              <div key={i} className="group bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
                <div className="relative sm:w-56 flex-shrink-0 h-64 sm:h-auto overflow-hidden">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm text-warm-brown/60 text-xs px-3 py-1.5 rounded-full font-medium">
                    {t.city}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="font-body text-xl font-semibold text-warm-brown mb-1">{t.name}</div>
                  <div className="text-terracotta text-xs font-semibold uppercase tracking-wide mb-4">{t.role}</div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.tags.map(tag => (
                      <span key={tag} className="text-xs bg-cream text-warm-brown/65 px-2.5 py-1 rounded-full border border-border/60">{tag}</span>
                    ))}
                  </div>
                  <div className="text-xs text-sage font-medium mb-3">{t.exp}</div>
                  <p className="text-sm text-warm-brown/60 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute -right-20 bottom-0 w-80 h-80 bg-terracotta/8 blob-1" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-4">FAQ</div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-warm-brown leading-tight">
              Часто задаваемые <em className="text-terracotta">вопросы</em>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-3xl transition-all duration-300 overflow-hidden ${activeFaq === i ? "border-terracotta/30 bg-terracotta-pale" : "border-border/60 bg-cream"}`}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                >
                  <span className="font-display text-xl font-medium text-warm-brown leading-tight">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === i ? "bg-terracotta text-cream rotate-45" : "bg-border text-warm-brown/60"}`}>
                    <Icon name="Plus" size={16} />
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="text-warm-brown/65 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 relative overflow-hidden" style={{ background: "hsl(95, 20%, 30%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-light/10 blob-2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber/10 blob-1" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="text-amber text-sm font-semibold tracking-widest uppercase mb-4">Контакты</div>
          <h2 className="font-display text-5xl lg:text-6xl font-light text-cream leading-tight mb-6">
            Начнём ваш <em className="text-amber">путь</em> вместе
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-12">
            Свяжитесь с нами любым удобным способом — ответим на все вопросы и поможем определиться.
          </p>
          <div className="mt-4 flex flex-wrap gap-6 justify-center text-cream/50 text-sm">
            <span className="flex items-center gap-2"><Icon name="Mail" size={15} /> hello@rostok.ru</span>
            <span className="flex items-center gap-2"><Icon name="Phone" size={15} /> +7 999 123 45 67</span>
            <span className="flex items-center gap-2"><Icon name="MessageCircle" size={15} /> Telegram: @rostok_edu</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-warm-brown py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl text-cream/70">🌱 Росток</div>
          <div className="text-cream/30 text-sm">© 2025 Образовательная программа «Росток». Все права защищены.</div>
          <div className="flex gap-4 text-cream/40 text-sm">
            <a href="#" className="hover:text-cream transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-cream transition-colors">Оферта</a>
          </div>
        </div>
      </footer>

      {/* ЛИЧНЫЙ КАБИНЕТ */}
      {showDashboard && (
        <div className="fixed inset-0 z-[100] flex items-start justify-end">
          <div className="absolute inset-0 bg-warm-brown/40 backdrop-blur-sm" onClick={() => setShowDashboard(false)} />
          <div className="relative w-full max-w-lg h-full bg-cream shadow-2xl overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-cream border-b border-border/50 px-6 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-cream font-display text-lg">М</div>
                <div>
                  <div className="font-semibold text-warm-brown text-sm">{DASHBOARD_USER.name}</div>
                  <div className="text-xs text-warm-brown/50">Поток Май 2025</div>
                </div>
              </div>
              <button onClick={() => setShowDashboard(false)} className="p-2 text-warm-brown/50 hover:text-warm-brown transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="px-6 py-6 border-b border-border/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-warm-brown">Прогресс программы</span>
                <span className="text-terracotta font-semibold text-sm">{DASHBOARD_USER.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div className="bg-terracotta h-2.5 rounded-full transition-all duration-700" style={{ width: `${DASHBOARD_USER.progress}%` }} />
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-warm-brown/50">
                <span>{DASHBOARD_USER.completedModules} из {DASHBOARD_USER.totalModules} модулей завершено</span>
                <span>12 занятий пройдено</span>
              </div>
            </div>

            <div className="px-6 py-5 bg-terracotta-pale border-b border-border/50">
              <div className="text-xs text-terracotta font-semibold uppercase tracking-wide mb-2">Следующее занятие</div>
              <div className="font-display text-lg font-medium text-warm-brown">{DASHBOARD_USER.nextLesson}</div>
              <div className="flex items-center gap-2 mt-2 text-sm text-warm-brown/60">
                <Icon name="Calendar" size={14} />
                {DASHBOARD_USER.nextDate}
              </div>
              <button className="mt-3 bg-terracotta text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta/90 transition-colors">
                Перейти к занятию
              </button>
            </div>

            <div className="flex border-b border-border/50">
              {([
                { id: "progress", label: "Прогресс" },
                { id: "materials", label: "Материалы" },
                { id: "schedule", label: "Расписание" },
              ] as const).map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setDashTab(tab.id)}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${dashTab === tab.id ? "text-terracotta border-b-2 border-terracotta" : "text-warm-brown/50 hover:text-warm-brown"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="px-6 py-6">
              {dashTab === "progress" && (
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-warm-brown mb-4">Модули программы</div>
                  {modules.map((mod, i) => (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-colors ${i < DASHBOARD_USER.completedModules ? "bg-sage-pale" : i === DASHBOARD_USER.completedModules ? "bg-terracotta-pale border border-terracotta/20" : "bg-muted/50"}`}>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${i < DASHBOARD_USER.completedModules ? "bg-sage text-cream" : i === DASHBOARD_USER.completedModules ? "bg-terracotta text-cream" : "bg-muted text-warm-brown/30"}`}>
                        {i < DASHBOARD_USER.completedModules ? <Icon name="Check" size={16} /> : <span className="text-xs font-bold">{i + 1}</span>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-warm-brown truncate">{mod.title}</div>
                        <div className="text-xs text-warm-brown/50 mt-0.5">
                          {i < DASHBOARD_USER.completedModules ? "Завершён" : i === DASHBOARD_USER.completedModules ? "В процессе" : "Ещё впереди"}
                        </div>
                      </div>
                      {i === DASHBOARD_USER.completedModules && (
                        <span className="text-xs bg-terracotta text-cream px-2.5 py-1 rounded-full">Текущий</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {dashTab === "materials" && (
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-warm-brown mb-4">Учебные материалы</div>
                  {[
                    { title: "Введение в осознанность", type: "PDF", size: "2.3 МБ", icon: "FileText" },
                    { title: "Практика: утренняя медитация", type: "Аудио", size: "18 мин", icon: "Headphones" },
                    { title: "Запись занятия — Модуль 1", type: "Видео", size: "1:24:00", icon: "Play" },
                    { title: "Рабочая тетрадь: Тело", type: "PDF", size: "4.1 МБ", icon: "FileText" },
                    { title: "Практика: сканирование тела", type: "Аудио", size: "22 мин", icon: "Headphones" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border/50 hover:border-terracotta/30 transition-colors cursor-pointer group">
                      <div className="w-10 h-10 bg-terracotta-pale rounded-xl flex items-center justify-center group-hover:bg-terracotta transition-colors duration-300">
                        <Icon name={item.icon as any} size={18} className="text-terracotta group-hover:text-cream transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-warm-brown">{item.title}</div>
                        <div className="text-xs text-warm-brown/45 mt-0.5">{item.type} · {item.size}</div>
                      </div>
                      <Icon name="Download" size={16} className="text-warm-brown/30 group-hover:text-terracotta transition-colors" />
                    </div>
                  ))}
                </div>
              )}
              {dashTab === "schedule" && (
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-warm-brown mb-4">Предстоящие занятия</div>
                  {[
                    { date: "12 мая, вт", time: "19:00 – 21:00", title: "Телесные практики — Модуль 2", type: "Живая встреча" },
                    { date: "15 мая, пт", time: "19:00 – 20:30", title: "Групповая сессия", type: "Групповая работа" },
                    { date: "19 мая, вт", time: "19:00 – 21:00", title: "Соматика и движение", type: "Живая встреча" },
                    { date: "22 мая, пт", time: "19:00 – 20:30", title: "Индивидуальный разбор", type: "Супервизия" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-border/50">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs text-terracotta font-semibold uppercase tracking-wide mb-1">{item.type}</div>
                          <div className="text-sm font-medium text-warm-brown">{item.title}</div>
                        </div>
                        <button className="text-xs bg-terracotta-pale text-terracotta px-3 py-1.5 rounded-full hover:bg-terracotta hover:text-cream transition-colors font-medium whitespace-nowrap ml-2">
                          В календарь
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-3 text-xs text-warm-brown/50">
                        <span className="flex items-center gap-1"><Icon name="Calendar" size={12} /> {item.date}</span>
                        <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> {item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}