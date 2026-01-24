import { Globe, Database, Zap } from "lucide-react";

interface Props {
  name: string;
  tag: string;
  desc: string;
  stack: string[];
  link: string | null;
  highlight?: boolean;
}

export const ProjectCard = ({
  name,
  tag,
  desc,
  stack,
  link,
  highlight,
}: Props) => {
  return (
    <div
      className={`flex flex-col p-8 rounded-2xl border transition relative overflow-hidden ${
        highlight
          ? "bg-zinc-900 border-zinc-700 shadow-2xl shadow-green-900/10"
          : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
      }`}
    >
      {highlight && (
        <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
          Featured
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">
          {tag}
        </span>
        {link ? <Globe size={20} /> : <Database size={20} />}
      </div>

      <h4 className="font-bold text-2xl mb-3">{name}</h4>
      <p className="text-gray-400 mb-6 leading-relaxed text-sm grow">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-auto mb-6">
        {stack.map((tech) => (
          <span key={tech} className="text-xs font-mono text-zinc-500">
            #{tech}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-full py-3 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition"
        >
          <Zap size={16} fill="black" />
          Try Live App
        </a>
      )}
    </div>
  );
};
