import clsx from 'clsx';

const buttons = [
  { key: 'menu', label: 'Menu' },
  { key: 'update', label: 'Update Menu' },
  { key: 'orders', label: 'Orders' },
  { key: 'accounts', label: 'Accounts' },
];

export default function MainNavigation({ active, onChange }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
      {buttons.map(btn => (
        <button key={btn.key}
          className={clsx("btn h-14 text-base md:text-lg", active === btn.key ? "btn-primary" : "btn-ghost")}
          onClick={() => onChange(btn.key)}>
          {btn.label}
        </button>
      ))}
    </div>
  );
}
