interface Props {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, desc, icon }: Props) => {
  return (
    <div className="group">
      <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-white transition">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};
