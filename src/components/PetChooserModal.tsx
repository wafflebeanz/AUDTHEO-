import React from 'react';
import { PetType } from './VirtualPet';

interface PetChooserModalProps {
  isOpen: boolean;
  onSelect: (pet: PetType) => void;
  onClose?: () => void;
  canClose?: boolean;
}

export const PetChooserModal: React.FC<PetChooserModalProps> = ({
  isOpen,
  onSelect,
  onClose,
  canClose = false
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border-2 border-purple-200 text-center relative animate-in fade-in zoom-in duration-200">
        {canClose && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        )}

        <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
          🐾
        </div>

        <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-2">
          Adopt Your CPA Study Buddy!
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed">
          Every correct answer feeds them treats (+1 🍖 / 🐟). Watch them evolve from starving into a golden Ascended CPA Master as you master each Auditing Theory module!
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* Puppy Option */}
          <button
            onClick={() => onSelect('puppy')}
            className="group flex flex-col items-center p-4 rounded-2xl border-2 border-purple-100 bg-purple-50/50 hover:bg-purple-100/70 hover:border-purple-400 hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 relative flex items-center justify-center">
              <span className="text-5xl group-hover:scale-110 transition-transform">🐶</span>
            </div>
            <span className="font-extrabold text-sm md:text-base text-slate-800 mt-2">
              Puppy Buddy
            </span>
            <span className="text-[11px] text-purple-600 font-semibold">
              Feeds on bone treats 🍖
            </span>
          </button>

          {/* Kitten Option */}
          <button
            onClick={() => onSelect('kitten')}
            className="group flex flex-col items-center p-4 rounded-2xl border-2 border-pink-100 bg-pink-50/50 hover:bg-pink-100/70 hover:border-pink-400 hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-20 h-20 relative flex items-center justify-center">
              <span className="text-5xl group-hover:scale-110 transition-transform">🐱</span>
            </div>
            <span className="font-extrabold text-sm md:text-base text-slate-800 mt-2">
              Kitten Buddy
            </span>
            <span className="text-[11px] text-pink-600 font-semibold">
              Feeds on fish treats 🐟
            </span>
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-center gap-1 text-[11px] text-slate-400">
          <span>Evolution milestones:</span>
          <span className="font-semibold text-slate-600">Starving</span> →
          <span className="font-semibold text-slate-600">Normal</span> →
          <span className="font-semibold text-slate-600">Happy</span> →
          <span className="font-semibold text-slate-600">Chonky</span> →
          <span className="font-semibold text-amber-600">👑 Ascended</span>
        </div>
      </div>
    </div>
  );
};
