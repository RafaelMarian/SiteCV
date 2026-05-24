export default function FirmwareToast({ message, onDone }) {
  return (
    <div className="firmware-toast" role="status" onAnimationEnd={onDone}>
      <span className="firmware-toast-led" aria-hidden />
      {message}
    </div>
  );
}
