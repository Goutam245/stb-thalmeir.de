import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { GoldLine, AnimatedSection } from '@/components/Shared';

const blogPosts = [
  { title: 'Exit Taxation According To § 6 AStG', excerpt: 'Comprehensive guide to exit taxation rules when leaving Germany, including strategies for managing your tax obligations.', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80', category: 'International Tax', date: '15. Feb 2026' },
  { title: 'US Assets In Germany: When "Tax-Free" Suddenly Becomes Taxable', excerpt: 'Understanding how US investment vehicles are taxed in Germany and avoiding unexpected tax burdens.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', category: 'US-German Tax', date: '28. Jan 2026' },
  { title: 'US Trusts In The German Tax Trap', excerpt: 'How US trusts are classified under German tax law and the implications for US citizens living in Germany.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', category: 'International Tax', date: '12. Jan 2026' },
  { title: 'Why U.S. Citizens Despair When It Comes To Investing In Germany', excerpt: 'The complex intersection of FATCA, PFIC rules, and German investment taxation explained.', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80', category: 'US-German Tax', date: '5. Dec 2025' },
  { title: 'Expat Tax Germany – Your Specialized Tax Advisor For Expats', excerpt: 'Everything expats need to know about their tax obligations and opportunities in Germany.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80', category: 'Expat Tax', date: '18. Nov 2025' },
  { title: 'Tax Advice For US Citizens In Germany', excerpt: 'Navigating the dual tax obligations that US citizens face when living and working in Germany.', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80', category: 'US-German Tax', date: '2. Nov 2025' },
  { title: 'GmbH Founded In Germany: The 10 Biggest Mistakes', excerpt: 'Common pitfalls when establishing a GmbH and how to avoid costly errors from the start.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', category: 'Business', date: '15. Oct 2025' },
  { title: 'Tax Advisor Munich – Exclusive Tax Advice For Expats', excerpt: 'Premium international tax advisory services for expats in the Munich and Bavaria region.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', category: 'Expat Tax', date: '1. Oct 2025' },
  { title: 'NATO Soldiers And Taxes In Germany', excerpt: 'Special tax rules and exemptions for NATO forces personnel stationed in Germany.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80', category: 'International Tax', date: '15. Sep 2025' },
];

const BlogPage = () => {
  return (
    <div className="bg-warm-100">
      <Navigation />
      <PageHero tag="Blog" title="Blog" subtitle="Aktuelle Beiträge, Steuertipps und Insights aus der internationalen Steuerberatung" />

      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <AnimatedSection className="text-center mb-16">
            <GoldLine className="mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-[42px] font-light text-teal-900">Aktuelle Beiträge</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.08}>
                <article className="group bg-warm-50 corner-marks overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500">
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <span className="absolute top-4 left-4 bg-gold-400 text-teal-900 font-body text-[10px] uppercase tracking-[0.15em] px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-teal-900 mb-3 group-hover:text-gold-600 transition-colors leading-snug">{post.title}</h3>
                    <p className="font-body text-[14px] font-light text-txt-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-[12px] text-txt-300">{post.date}</span>
                      <span className="font-body text-[13px] font-medium text-teal-700 group-hover:text-gold-600 transition-colors">Read more →</span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-16">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 font-body text-[14px] transition-all duration-300 ${num === 1 ? 'bg-gold-400 text-teal-900' : 'text-txt-500 hover:text-gold-600 border border-gold-400/20 hover:border-gold-400'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
