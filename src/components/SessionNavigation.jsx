import clsx from 'clsx';

const tabs = ['morning','afternoon','evening'];

export default function SessionNavigation({ session, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tabs.map(t => (
        <button key={t}
          className={clsx("btn px-3 py-2 capitalize", session===t ? "btn-primary" : "btn-ghost")}
          onClick={() => onChange(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}
