import { useState, useEffect, useMemo, useRef } from 'react';
import { AUDIT_MODULES, TOTAL_QUESTIONS } from './data';
import { QuestionCard } from './components/QuestionCard';
import { VirtualPet, PetType, getMilestone } from './components/VirtualPet';
import { PetChooserModal } from './components/PetChooserModal';
import { NotesDrawer } from './components/NotesDrawer';

type FilterType = 'all' | 'flagged' | 'unanswered' | 'incorrect';

interface AnswersState {
  [questionId: string]: 'A' | 'B' | 'C' | 'D';
}

interface FlagsState {
  [questionId: string]: boolean;
}

export default function App() {
  // Persistent States
  const [activeModuleId, setActiveModuleId] = useState<string>(() => {
    try {
      return localStorage.getItem('audit_active_module') || 'AT-10001';
    } catch {
      return 'AT-10001';
    }
  });

  const [petType, setPetType] = useState<PetType | null>(() => {
    try {
      return (localStorage.getItem('audit_pet_choice') as PetType) || null;
    } catch {
      return null;
    }
  });

  const [answers, setAnswers] = useState<AnswersState>(() => {
    try {
      const saved = localStorage.getItem('audit_user_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [flags, setFlags] = useState<FlagsState>(() => {
    try {
      const saved = localStorage.getItem('audit_user_flags');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [filter, setFilter] = useState<FilterType>('all');
  const [jumpInput, setJumpInput] = useState<string>('');
  const [isChooserOpen, setIsChooserOpen] = useState<boolean>(false);
  const [isNotesDrawerOpen, setIsNotesDrawerOpen] = useState<boolean>(false);
  const [floatingParticles, setFloatingParticles] = useState<{ id: number; text: string; x: number }[]>([]);

  const topNavRef = useRef<HTMLDivElement>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('audit_active_module', activeModuleId);
    } catch (e) {
      console.error(e);
    }
  }, [activeModuleId]);

  useEffect(() => {
    if (petType) {
      try {
        localStorage.setItem('audit_pet_choice', petType);
      } catch (e) {
        console.error(e);
      }
    }
  }, [petType]);

  useEffect(() => {
    try {
      localStorage.setItem('audit_user_answers', JSON.stringify(answers));
    } catch (e) {
      console.error(e);
    }
  }, [answers]);

  useEffect(() => {
    try {
      localStorage.setItem('audit_user_flags', JSON.stringify(flags));
    } catch (e) {
      console.error(e);
    }
  }, [flags]);

  // Open pet chooser on first visit
  useEffect(() => {
    if (!petType) {
      setIsChooserOpen(true);
    }
  }, [petType]);

  // Active module object
  const currentModule = useMemo(() => {
    return AUDIT_MODULES.find((m) => m.id === activeModuleId) || AUDIT_MODULES[0];
  }, [activeModuleId]);

  // Module statistics
  const currentStats = useMemo(() => {
    const totalItems = currentModule.items.length;
    let correctCount = 0;
    let answeredCount = 0;
    let incorrectCount = 0;

    currentModule.items.forEach((item) => {
      const userAns = answers[item.id];
      if (userAns) {
        answeredCount++;
        if (userAns === item.ans) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });

    const percentage = totalItems > 0 ? (correctCount / totalItems) * 100 : 0;
    return {
      totalItems,
      correctCount,
      answeredCount,
      incorrectCount,
      percentage
    };
  }, [currentModule, answers]);

  // Global total answered & flagged count
  const globalStats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    let flagged = 0;

    AUDIT_MODULES.forEach((mod) => {
      mod.items.forEach((q) => {
        if (answers[q.id]) {
          answered++;
          if (answers[q.id] === q.ans) correct++;
        }
        if (flags[q.id]) flagged++;
      });
    });

    return { answered, correct, flagged, total: TOTAL_QUESTIONS };
  }, [answers, flags]);

  // Filtered items
  const displayItems = useMemo(() => {
    if (activeModuleId === 'FLAGGED_ALL') {
      const allFlagged: { mod: typeof currentModule; item: typeof currentModule.items[0] }[] = [];
      AUDIT_MODULES.forEach((mod) => {
        mod.items.forEach((item) => {
          if (flags[item.id]) {
            allFlagged.push({ mod, item });
          }
        });
      });
      return allFlagged;
    }

    return currentModule.items
      .filter((item) => {
        const userAns = answers[item.id];
        if (filter === 'flagged') return Boolean(flags[item.id]);
        if (filter === 'unanswered') return userAns === undefined;
        if (filter === 'incorrect') return userAns !== undefined && userAns !== item.ans;
        return true;
      })
      .map((item) => ({ mod: currentModule, item }));
  }, [activeModuleId, currentModule, filter, answers, flags]);

  // Handle answering
  const handleSelectOption = (questionId: string, correctAns: 'A' | 'B' | 'C' | 'D', option: 'A' | 'B' | 'C' | 'D') => {
    if (answers[questionId]) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: option
    }));

    if (option === correctAns) {
      // Spawn snack treat!
      const snackIcon = petType === 'puppy' ? '+1 🍖' : '+1 🐟';
      const id = Date.now();
      const randX = Math.floor(Math.random() * 40) - 20;
      setFloatingParticles((prev) => [...prev, { id, text: snackIcon, x: randX }]);
      setTimeout(() => {
        setFloatingParticles((prev) => prev.filter((p) => p.id !== id));
      }, 1200);
    }
  };

  const handleToggleFlag = (questionId: string) => {
    setFlags((prev) => {
      const updated = { ...prev };
      if (updated[questionId]) {
        delete updated[questionId];
      } else {
        updated[questionId] = true;
      }
      return updated;
    });
  };

  const handleResetQuestion = (questionId: string) => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[questionId];
      return updated;
    });
  };

  const handleResetCurrentModule = () => {
    if (!window.confirm(`Reset all answers for ${currentModule.code}? Flags and notes will be kept.`)) {
      return;
    }
    setAnswers((prev) => {
      const updated = { ...prev };
      currentModule.items.forEach((item) => {
        delete updated[item.id];
      });
      return updated;
    });
  };

  const handleJumpToQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!num) return;

    const targetItem = currentModule.items.find((item) => item.n === num);
    if (!targetItem) {
      alert(`Question Q${num} not found in this module.`);
      return;
    }

    // Set filter to 'all' so it is visible
    setFilter('all');
    setTimeout(() => {
      const el = document.getElementById(targetItem.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('ring-4', 'ring-purple-400');
        setTimeout(() => el.classList.remove('ring-4', 'ring-purple-400'), 1500);
      }
    }, 100);
  };

  const handlePetInteraction = () => {
    const id = Date.now();
    const emojis = ['💖', '✨', '🐾', '🥰'];
    const text = emojis[Math.floor(Math.random() * emojis.length)];
    const randX = Math.floor(Math.random() * 30) - 15;
    setFloatingParticles((prev) => [...prev, { id, text, x: randX }]);
    setTimeout(() => {
      setFloatingParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1200);
  };

  // Helper for single-file HTML download
  const handleExportSingleFile = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CPAR Auditing Theory - Interactive Pet Quizzer</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
body { background-color: #f9f6fd; min-height: 100vh; }
@keyframes bounceJump { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
.pet-jump { animation: bounceJump 0.6s ease-in-out; }
</style>
</head>
<body class="p-4 md:p-8 text-slate-800">
  <div class="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-purple-200">
    <h1 class="text-3xl font-black text-purple-900 mb-2">CPAR Auditing Theory Reviewer</h1>
    <p class="text-sm text-slate-600 mb-6">Interactive offline reviewer covering modules AT-10001 through AT-10015.</p>
    <div class="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-sm">
      All modules and question stems are loaded. Open with modern browser to practice anytime offline.
    </div>
  </div>
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cpar-auditing-theory-pet-quizzer.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pb-36 text-slate-800">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center font-black text-xl shadow-md">
              ⚖️
            </div>
            <div>
              <h1 className="font-black text-base md:text-lg text-purple-950 leading-tight">
                CPA Auditing Theory Reviewer
              </h1>
              <p className="text-[11px] font-medium text-slate-500">
                CPAR Handouts (AT-10001 to AT-10015) • {TOTAL_QUESTIONS} Verbatim MCQs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsNotesDrawerOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-purple-200 bg-purple-50 text-purple-900 font-bold text-xs hover:bg-purple-100 transition-colors cursor-pointer shadow-xs"
            >
              <span>📖</span>
              <span>Topic Notes</span>
            </button>
            <button
              onClick={handleExportSingleFile}
              title="Download standalone offline single-file HTML"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-pink-200 bg-pink-50 text-pink-700 font-bold text-xs hover:bg-pink-100 transition-colors cursor-pointer shadow-xs"
            >
              <span>💾</span>
              <span className="hidden md:inline">Offline HTML</span>
            </button>
          </div>
        </div>

        {/* Top Module Tabs Bar */}
        <div className="border-t border-purple-50 bg-white/70 overflow-x-auto scrollbar-none" ref={topNavRef}>
          <div className="max-w-5xl mx-auto px-4 flex items-center gap-1.5 py-2">
            {AUDIT_MODULES.map((mod) => {
              const isSelected = activeModuleId === mod.id;
              // Count correct in this mod
              const modCorrect = mod.items.filter((item) => answers[item.id] === item.ans).length;

              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setActiveModuleId(mod.id);
                    setFilter('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex-none px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-purple-900 text-white shadow-md scale-102'
                      : 'bg-purple-50/70 text-purple-800 hover:bg-purple-100'
                  }`}
                >
                  <span>{mod.code}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-pink-500 text-white' : 'bg-purple-200/60 text-purple-900'
                    }`}
                  >
                    {modCorrect}/{mod.items.length}
                  </span>
                </button>
              );
            })}

            {/* Flagged Tab */}
            <button
              onClick={() => {
                setActiveModuleId('FLAGGED_ALL');
                setFilter('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex-none px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                activeModuleId === 'FLAGGED_ALL'
                  ? 'bg-amber-500 text-amber-950 shadow-md scale-102'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              <span>⭐ Flagged Review</span>
              <span className="text-[10px] bg-amber-200 text-amber-950 px-1.5 py-0.2 rounded-full font-bold">
                {globalStats.flagged}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 mt-6">
        {/* Module Header & Milestone Evolution Tracker */}
        {activeModuleId !== 'FLAGGED_ALL' ? (
          <section className="bg-white rounded-3xl p-5 md:p-7 border-2 border-purple-100 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-purple-100 text-purple-800 font-extrabold text-xs px-2.5 py-0.5 rounded-md">
                    {currentModule.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Standards: {currentModule.standards}
                  </span>
                </div>
                <h2 className="text-lg md:text-2xl font-black text-slate-900">
                  {currentModule.title}
                </h2>
              </div>

              <div className="flex items-center gap-3 self-end md:self-center">
                <button
                  onClick={() => setIsNotesDrawerOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-purple-50 text-purple-900 border border-purple-200 hover:border-purple-300 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                >
                  <span>💡</span>
                  <span>View Concept Outline</span>
                </button>
              </div>
            </div>

            {/* Module Score Stats */}
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 mb-2 gap-2">
              <span>
                <strong>{currentStats.answeredCount}</strong> of <strong>{currentStats.totalItems}</strong> answered
                ({currentStats.correctCount} correct • {Math.round(currentStats.percentage)}% score)
              </span>
              <span className="text-purple-700 font-extrabold flex items-center gap-1">
                <span>Milestone:</span>
                <span className="capitalize">{getMilestone(currentStats.percentage)}</span>
                <span>{petType === 'puppy' ? '🐶' : '🐱'}</span>
              </span>
            </div>

            {/* Feeding Milestone Progress Bar */}
            <div className="relative w-full h-5 bg-purple-100/70 rounded-full overflow-hidden p-0.5 border border-purple-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-emerald-400 transition-all duration-500 ease-out shadow-xs"
                style={{ width: `${Math.min(100, Math.max(3, currentStats.percentage))}%` }}
              />
              {/* Milestone Markers */}
              <div className="absolute inset-0 flex justify-between px-2 text-[10px] font-black pointer-events-none opacity-40">
                <span style={{ left: '20%' }} className="absolute">|</span>
                <span style={{ left: '30%' }} className="absolute">|</span>
                <span style={{ left: '50%' }} className="absolute">|</span>
                <span style={{ left: '75%' }} className="absolute">|</span>
              </div>
            </div>

            <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1 px-1">
              <span>Starving (0-20%)</span>
              <span>Normal (30%)</span>
              <span>Happy (50%)</span>
              <span>Chonky (75%)</span>
              <span className="text-amber-600">👑 Ascended (100%)</span>
            </div>

            {/* Filtering and Toolbar */}
            <div className="mt-6 pt-4 border-t border-purple-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { key: 'all', label: 'All Items' },
                  { key: 'unanswered', label: `Unanswered (${currentStats.totalItems - currentStats.answeredCount})` },
                  { key: 'flagged', label: 'Flagged' },
                  { key: 'incorrect', label: `Incorrect (${currentStats.incorrectCount})` }
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key as FilterType)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      filter === f.key
                        ? 'bg-purple-900 text-white shadow-xs'
                        : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Jump to item input & Reset */}
              <div className="flex items-center gap-2">
                <form onSubmit={handleJumpToQuestion} className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-500 font-bold hidden sm:inline">Jump to:</span>
                  <input
                    type="number"
                    min="1"
                    max={currentStats.totalItems}
                    placeholder="Q#"
                    value={jumpInput}
                    onChange={(e) => setJumpInput(e.target.value)}
                    className="w-14 px-2 py-1 text-xs border border-purple-200 rounded-lg text-center font-bold focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-lg text-xs font-bold hover:bg-purple-200 cursor-pointer"
                  >
                    Go
                  </button>
                </form>

                <button
                  onClick={handleResetCurrentModule}
                  title="Clear all answers for this module"
                  className="px-2.5 py-1 text-xs font-bold text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                >
                  Reset Module
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* Flagged All Modules View */
          <section className="bg-amber-50 rounded-3xl p-6 border-2 border-amber-200 shadow-sm mb-6">
            <h2 className="text-xl font-black text-amber-950 mb-1">
              ⭐ All Flagged Review Items
            </h2>
            <p className="text-xs md:text-sm text-amber-800">
              Showing {globalStats.flagged} bookmarked items across all 15 modules. Answers selected here directly update their respective modules and feed your pet companion!
            </p>
          </section>
        )}

        {/* Questions Container */}
        <div>
          {displayItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-purple-200">
              <span className="text-4xl block mb-2">🎉</span>
              <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1">
                No questions found under "{filter}" filter!
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mb-4">
                Switch back to "All Items" or pick another module to continue your study streak.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 cursor-pointer shadow-xs"
              >
                Show All Items
              </button>
            </div>
          ) : (
            displayItems.map(({ item }) => (
              <QuestionCard
                key={item.id}
                question={item}
                selectedAnswer={answers[item.id]}
                isFlagged={Boolean(flags[item.id])}
                onSelectOption={(opt) => handleSelectOption(item.id, item.ans, opt)}
                onToggleFlag={() => handleToggleFlag(item.id)}
                onResetQuestion={() => handleResetQuestion(item.id)}
              />
            ))
          )}
        </div>
      </main>

      {/* Floating Topic Notes Drawer at Lower-Left */}
      <NotesDrawer
        currentModule={currentModule}
        isOpen={isNotesDrawerOpen}
        onClose={() => setIsNotesDrawerOpen(false)}
        onOpen={() => setIsNotesDrawerOpen(true)}
      />

      {/* Virtual Pet Companion at Lower-Right */}
      {petType && (
        <VirtualPet
          petType={petType}
          percentage={currentStats.percentage}
          onPetClick={handlePetInteraction}
          onSwitchPet={() => setIsChooserOpen(true)}
          floatingParticles={floatingParticles}
        />
      )}

      {/* Pet Chooser Modal */}
      <PetChooserModal
        isOpen={isChooserOpen}
        onSelect={(selected) => {
          setPetType(selected);
          setIsChooserOpen(false);
        }}
        onClose={() => setIsChooserOpen(false)}
        canClose={Boolean(petType)}
      />
    </div>
  );
}
