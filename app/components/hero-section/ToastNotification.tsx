type ToastNotificationProps = {
  message: string | null;
};

export default function ToastNotification({ message }: ToastNotificationProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 pointer-events-none ${
        message ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="bg-ink text-white px-4 py-3 rounded-2xl shadow-float flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
        <span className="text-sm font-medium">{message ?? ""}</span>
      </div>
    </div>
  );
}
