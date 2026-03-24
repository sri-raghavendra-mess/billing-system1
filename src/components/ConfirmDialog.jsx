export default function ConfirmDialog({ open, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-40">
      <div className="card max-w-sm">
        <div className="font-semibold mb-3">Delete item?</div>
        <div className="flex gap-3 justify-end">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}
