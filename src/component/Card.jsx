export default function Card({ title, subtitle }) {
  return (
    <div className="flex-1 bg-slate-800 text-slate-50 min-w-72 min-h-48 rounded-2xl">
      <div id="detail" className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="mx-2 text-2xl text-center uppercase">{title}</h1>
        <p className="mx-2 text-sm text-center text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
