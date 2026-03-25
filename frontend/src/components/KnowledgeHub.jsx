import React from 'react';

const articles = [
  { id: 1, title: 'Basics of Satellite Orbits', category: 'Space Tech', date: 'Oct 15, 2024', excerpt: 'Understand LEO, GEO, and how satellites maintain their trajectory in space.' },
  { id: 2, title: 'Building a CubeSat: A Starter Guide', category: 'CubeSats', date: 'Nov 02, 2024', excerpt: 'The essential components and design constraints of a standard 1U CubeSat.' },
  { id: 3, title: 'Women in Aerospace: Breaking Barriers', category: 'Awareness', date: 'Jan 10, 2025', excerpt: 'Highlighting the growing role of female engineers in shaping the space economy.' }
];

const KnowledgeHub = () => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-center px-[5%] pt-24 pb-12">
      <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text text-center mb-12 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Knowledge Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto w-full">
        {articles.map(article => (
          <div key={article.id} className="card-glow flex flex-col bg-[rgba(10,10,10,0.85)] backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-2 hover:border-[#666666]">
            <div className="flex justify-between items-center mb-4 font-[family-name:--font-subheading] text-sm">
              <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,242,254,0.5)] bg-[#666666]/10 px-3 py-1 rounded">{article.category}</span>
              <span className="text-[#a0a5b8]">{article.date}</span>
            </div>
            <h3 className="font-[family-name:--font-heading] text-xl mb-4 text-white leading-tight">{article.title}</h3>
            <p className="text-[#a0a5b8] flex-grow mb-6">{article.excerpt}</p>
            <button className="self-start px-5 py-2 text-sm bg-transparent text-white border border-white rounded-full font-[family-name:--font-subheading] transition-all duration-300 hover:bg-white hover:text-black">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeHub;
