export default function Card({ title, subtitle }) {
  return (
    <div className="flex-1 bg-slate-800 text-slate-50 min-w-72 min-h-48 rounded-2xl">
      <div id="detail" className="flex flex-col w-full h-full justify-center items-center">
        <h1 className="text-2xl text-center mx-2 uppercase">{title}</h1>
        <p className="text-sm text-center mx-2 text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
