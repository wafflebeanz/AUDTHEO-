import React, { useState } from 'react';

export type PetType = 'puppy' | 'kitten';
export type MilestoneState = 'starving' | 'normal' | 'happy' | 'chonky' | 'ascended';

interface VirtualPetProps {
  petType: PetType;
  percentage: number;
  onPetClick: () => void;
  onSwitchPet: () => void;
  floatingParticles: { id: number; text: string; x: number }[];
}

export const getMilestone = (pct: number): MilestoneState => {
  if (pct <= 20) return 'starving';
  if (pct <= 30) return 'normal';
  if (pct <= 50) return 'happy';
  if (pct <= 75) return 'chonky';
  return 'ascended';
};

export const VirtualPet: React.FC<VirtualPetProps> = ({
  petType,
  percentage,
  onPetClick,
  onSwitchPet,
  floatingParticles
}) => {
  const milestone = getMilestone(percentage);
  const [animClass, setAnimClass] = useState<string>('');

  const handleInteract = () => {
    setAnimClass('pet-wiggle');
    setTimeout(() => setAnimClass(''), 600);
    onPetClick();
  };

  const getStatusBadge = () => {
    switch (milestone) {
      case 'starving':
        return { label: '🥺 Starving', desc: 'Needs points! (0-20%)', bg: 'bg-rose-100 text-rose-700 border-rose-300' };
      case 'normal':
        return { label: '🐾 Normal', desc: 'Awakening (21-30%)', bg: 'bg-slate-100 text-slate-700 border-slate-300' };
      case 'happy':
        return { label: '✨ Happy', desc: 'Energized (31-50%)', bg: 'bg-emerald-100 text-emerald-700 border-emerald-300' };
      case 'chonky':
        return { label: '💖 Chonky', desc: 'Well-Fed (51-75%)', bg: 'bg-pink-100 text-pink-700 border-pink-300' };
      case 'ascended':
        return { label: '👑 Ascended', desc: 'CPA Master (76-100%)', bg: 'bg-amber-100 text-amber-800 border-amber-300 shadow-sm' };
    }
  };

  const badge = getStatusBadge();

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end select-none pointer-events-none">
      {/* Floating particles */}
      <div className="relative w-full h-0 pointer-events-none">
        {floatingParticles.map((p) => (
          <span
            key={p.id}
            className="absolute floating-snack font-bold text-xl drop-shadow-md z-50 pointer-events-none"
            style={{ right: `${p.x}px`, bottom: '110px' }}
          >
            {p.text}
          </span>
        ))}
      </div>

      {/* Mood bubble */}
      <div className="pointer-events-auto mb-1.5 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-purple-100 text-xs font-semibold text-slate-700 hover:scale-105 transition-transform">
        <span className={`px-2 py-0.5 rounded-full border text-[11px] font-bold ${badge.bg}`}>
          {badge.label}
        </span>
        <span className="text-purple-600 font-extrabold">{Math.round(percentage)}%</span>
        <button
          onClick={onSwitchPet}
          title="Switch Companion"
          className="ml-1 text-slate-400 hover:text-purple-600 transition-colors cursor-pointer"
        >
          🔄
        </button>
      </div>

      {/* Pet Container */}
      <div className="pointer-events-auto relative group">
        {/* Flaming Aura for Ascended */}
        {milestone === 'ascended' && (
          <div className="absolute -inset-4 rounded-full bg-gradient-to-t from-amber-400 via-yellow-300 to-orange-400 opacity-60 blur-lg pet-flame pointer-events-none" />
        )}

        <button
          onClick={handleInteract}
          title={`Click to pet your ${petType}! (${badge.desc})`}
          className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none ${animClass} ${
            milestone === 'starving' ? 'pet-shiver grayscale-40' : ''
          } ${milestone === 'ascended' ? 'pet-aura-gold' : ''}`}
        >
          {petType === 'puppy' ? (
            <PuppySVG milestone={milestone} />
          ) : (
            <KittenSVG milestone={milestone} />
          )}
        </button>
      </div>
    </div>
  );
};

/* Puppy Inline SVG Component */
const PuppySVG: React.FC<{ milestone: MilestoneState }> = ({ milestone }) => {
  const isHappy = milestone === 'happy' || milestone === 'chonky' || milestone === 'ascended';
  const isChonky = milestone === 'chonky' || milestone === 'ascended';
  const isStarving = milestone === 'starving';
  const isAscended = milestone === 'ascended';

  const bodyScale = isChonky ? 'scale(1.12)' : 'scale(1)';
  const mainColor = isAscended ? '#fbbf24' : isStarving ? '#cbd5e1' : '#f59e0b';
  const earColor = isAscended ? '#d97706' : isStarving ? '#94a3b8' : '#b45309';
  const bellyColor = isAscended ? '#fef3c7' : isStarving ? '#f1f5f9' : '#fef3c7';

  return (
    <svg width="112" height="116" viewBox="0 0 120 120" className="overflow-visible drop-shadow-md">
      {/* Crown for Ascended */}
      {isAscended && (
        <g transform="translate(42, 6)">
          <path
            d="M2 18 L8 6 L18 14 L28 4 L34 18 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="6" r="2.5" fill="#ef4444" />
          <circle cx="18" cy="14" r="2.5" fill="#3b82f6" />
          <circle cx="28" cy="4" r="2.5" fill="#10b981" />
        </g>
      )}

      {/* Shadow */}
      <ellipse cx="60" cy="108" rx={isChonky ? '38' : '32'} ry="8" fill="#1e1b4b" opacity="0.12" />

      <g transform={`translate(0, ${isAscended ? 6 : 0}) ${bodyScale}`} transform-origin="60 90">
        {/* Tail */}
        <path
          d={isHappy ? 'M88 82 Q108 72 104 56 Q98 70 88 78' : 'M86 86 Q100 88 100 96'}
          fill={mainColor}
          stroke={earColor}
          strokeWidth="2"
          className={isHappy ? 'animate-bounce' : ''}
        />

        {/* Paws (Back) */}
        <ellipse cx="38" cy="100" rx="10" ry="7" fill={earColor} />
        <ellipse cx="82" cy="100" rx="10" ry="7" fill={earColor} />

        {/* Body */}
        <ellipse cx="60" cy="80" rx={isChonky ? '36' : '30'} ry={isChonky ? '28' : '24'} fill={mainColor} />
        <ellipse cx="60" cy="84" rx={isChonky ? '24' : '18'} ry="16" fill={bellyColor} />

        {/* Front Paws */}
        <ellipse cx="50" cy="101" rx="8" ry="6" fill={mainColor} stroke={earColor} strokeWidth="1.5" />
        <ellipse cx="70" cy="101" rx="8" ry="6" fill={mainColor} stroke={earColor} strokeWidth="1.5" />

        {/* Ears */}
        <ellipse cx="34" cy="46" rx="10" ry="18" fill={earColor} transform="rotate(-15 34 46)" />
        <ellipse cx="86" cy="46" rx="10" ry="18" fill={earColor} transform="rotate(15 86 46)" />

        {/* Head */}
        <circle cx="60" cy="50" r={isChonky ? '28' : '25'} fill={mainColor} />

        {/* Eyes */}
        {isStarving ? (
          <g stroke="#334155" strokeWidth="2.5" strokeLinecap="round">
            <path d="M48 48 Q53 53 58 48" />
            <path d="M62 48 Q67 53 72 48" />
            {/* Tear drop */}
            <path d="M74 54 Q77 60 74 63 Q71 60 74 54 Z" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
          </g>
        ) : isHappy ? (
          <g stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M48 48 Q53 42 58 48" />
            <path d="M62 48 Q67 42 72 48" />
            {/* Cheeks */}
            <circle cx="44" cy="54" r="5" fill="#f43f5e" opacity="0.35" />
            <circle cx="76" cy="54" r="5" fill="#f43f5e" opacity="0.35" />
          </g>
        ) : (
          <g>
            <circle cx="52" cy="48" r="3.5" fill="#1e1b4b" />
            <circle cx="68" cy="48" r="3.5" fill="#1e1b4b" />
            <circle cx="53" cy="46.5" r="1.2" fill="#ffffff" />
            <circle cx="69" cy="46.5" r="1.2" fill="#ffffff" />
          </g>
        )}

        {/* Snout & Nose */}
        <ellipse cx="60" cy="58" rx="11" ry="8" fill={bellyColor} />
        <ellipse cx="60" cy="54" rx="4.5" ry="3.5" fill="#1e1b4b" />

        {/* Mouth */}
        {isHappy ? (
          <path d="M56 60 Q60 67 64 60" fill="#f43f5e" stroke="#1e1b4b" strokeWidth="1.5" />
        ) : isStarving ? (
          <path d="M56 63 Q60 59 64 63" fill="none" stroke="#334155" strokeWidth="1.5" />
        ) : (
          <path d="M57 59 Q60 62 63 59" fill="none" stroke="#1e1b4b" strokeWidth="1.5" />
        )}
      </g>
    </svg>
  );
};

/* Kitten Inline SVG Component */
const KittenSVG: React.FC<{ milestone: MilestoneState }> = ({ milestone }) => {
  const isHappy = milestone === 'happy' || milestone === 'chonky' || milestone === 'ascended';
  const isChonky = milestone === 'chonky' || milestone === 'ascended';
  const isStarving = milestone === 'starving';
  const isAscended = milestone === 'ascended';

  const bodyScale = isChonky ? 'scale(1.12)' : 'scale(1)';
  const mainColor = isAscended ? '#fbbf24' : isStarving ? '#cbd5e1' : '#94a3b8';
  const innerEarColor = isAscended ? '#f59e0b' : isStarving ? '#e2e8f0' : '#f472b6';
  const bellyColor = isAscended ? '#fef3c7' : isStarving ? '#f8fafc' : '#f1f5f9';

  return (
    <svg width="112" height="116" viewBox="0 0 120 120" className="overflow-visible drop-shadow-md">
      {/* Crown for Ascended */}
      {isAscended && (
        <g transform="translate(42, 6)">
          <path
            d="M2 18 L8 6 L18 14 L28 4 L34 18 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="6" r="2.5" fill="#ec4899" />
          <circle cx="18" cy="14" r="2.5" fill="#3b82f6" />
          <circle cx="28" cy="4" r="2.5" fill="#10b981" />
        </g>
      )}

      {/* Shadow */}
      <ellipse cx="60" cy="108" rx={isChonky ? '38' : '32'} ry="8" fill="#1e1b4b" opacity="0.12" />

      <g transform={`translate(0, ${isAscended ? 6 : 0}) ${bodyScale}`} transform-origin="60 90">
        {/* Tail */}
        <path
          d={isHappy ? 'M88 80 C104 70 108 45 98 40' : 'M88 86 C102 92 108 96 112 104'}
          fill="none"
          stroke={mainColor}
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Paws (Back) */}
        <ellipse cx="38" cy="100" rx="9" ry="6" fill={mainColor} />
        <ellipse cx="82" cy="100" rx="9" ry="6" fill={mainColor} />

        {/* Body */}
        <ellipse cx="60" cy="80" rx={isChonky ? '35' : '29'} ry={isChonky ? '27' : '23'} fill={mainColor} />
        <ellipse cx="60" cy="84" rx={isChonky ? '23' : '17'} ry="15" fill={bellyColor} />

        {/* Front Paws */}
        <ellipse cx="50" cy="101" rx="7" ry="5.5" fill={bellyColor} stroke={mainColor} strokeWidth="1.5" />
        <ellipse cx="70" cy="101" rx="7" ry="5.5" fill={bellyColor} stroke={mainColor} strokeWidth="1.5" />

        {/* Ears */}
        <polygon points="36,44 46,20 58,40" fill={mainColor} />
        <polygon points="39,42 46,24 54,39" fill={innerEarColor} />
        <polygon points="84,44 74,20 62,40" fill={mainColor} />
        <polygon points="81,42 74,24 66,39" fill={innerEarColor} />

        {/* Head */}
        <circle cx="60" cy="50" r={isChonky ? '27' : '24'} fill={mainColor} />

        {/* Eyes */}
        {isStarving ? (
          <g stroke="#334155" strokeWidth="2.5" strokeLinecap="round">
            <path d="M48 48 Q53 53 58 48" />
            <path d="M62 48 Q67 53 72 48" />
            <path d="M74 54 Q77 60 74 63 Q71 60 74 54 Z" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
          </g>
        ) : isHappy ? (
          <g stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M48 48 Q53 42 58 48" />
            <path d="M62 48 Q67 42 72 48" />
            {/* Cheeks */}
            <circle cx="43" cy="55" r="4.5" fill="#f43f5e" opacity="0.35" />
            <circle cx="77" cy="55" r="4.5" fill="#f43f5e" opacity="0.35" />
          </g>
        ) : (
          <g>
            <ellipse cx="51" cy="48" rx="3.5" ry="4" fill="#059669" />
            <ellipse cx="69" cy="48" rx="3.5" ry="4" fill="#059669" />
            <ellipse cx="51" cy="48" rx="1.5" ry="3.5" fill="#1e1b4b" />
            <ellipse cx="69" cy="48" rx="1.5" ry="3.5" fill="#1e1b4b" />
            <circle cx="52" cy="46" r="1" fill="#ffffff" />
            <circle cx="70" cy="46" r="1" fill="#ffffff" />
          </g>
        )}

        {/* Cute Little Nose */}
        <polygon points="58,54 62,54 60,57" fill="#f472b6" />

        {/* Whiskers */}
        <line x1="34" y1="53" x2="48" y2="54" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="33" y1="57" x2="47" y2="57" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="72" y1="54" x2="86" y2="53" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="73" y1="57" x2="87" y2="57" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

        {/* Mouth */}
        {isHappy ? (
          <path d="M57 58 Q60 62 63 58" fill="#f43f5e" stroke="#1e1b4b" strokeWidth="1.2" />
        ) : (
          <path d="M56 58 Q58 60 60 58 Q62 60 64 58" fill="none" stroke="#1e1b4b" strokeWidth="1.2" />
        )}
      </g>
    </svg>
  );
};
