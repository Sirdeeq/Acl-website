import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { INSIGHTS_ITEMS } from '@/content/insights.content'

export const InsightsPage: React.FC = () => {
  const featuredArticle = INSIGHTS_ITEMS.find((item) => item.featured)
  const regularArticles = INSIGHTS_ITEMS.filter((item) => item.id !== featuredArticle?.id)

  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#dce3df] dark:border-[#1d2923]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="green" size="md">
              Knowledge & Convenings
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
              Insights, Events & Ecosystem Updates
            </h1>
            <p className="text-lg text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
              Explore perspectives on African agricultural transformation, financing readiness, value-chain integration, and outcomes from the AVC Summit 2025.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Article: AVC Summit 2025 (With Photography) */}
      {featuredArticle && (
        <section className="py-16 bg-[#e8ecea] dark:bg-[#121a15] transition-colors border-b border-[#dce3df] dark:border-[#1d2923]">
          <Container>
            <div className="bg-white dark:bg-[#141d18] rounded-3xl overflow-hidden border border-[#dce3df] dark:border-[#22332b] shadow-xs transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#7bb173]">
                    <Badge variant="green" size="sm">
                      {featuredArticle.category}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#359540] dark:text-[#4ade80]" />
                      {featuredArticle.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#359540] dark:text-[#4ade80]" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#245240] dark:text-white leading-snug">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed">
                    {featuredArticle.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/insights/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#359540] dark:text-[#7bb173] hover:text-[#245240] dark:hover:text-[#4ade80] transition-colors"
                    >
                      <span>Read full retrospective</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 h-72 lg:h-full min-h-[300px] overflow-hidden bg-[#e8f3ed] dark:bg-[#18261f]">
                  <img
                    src={featuredArticle.imageSrc}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Articles Grid (With Thumbnails) */}
      <section className="py-16 sm:py-24 bg-[#f0f3f1] dark:bg-[#0e1411] transition-colors">
        <Container>
          <SectionHeading
            badge="Articles & Sector Analyses"
            title="Strategic Agribusiness Perspectives"
            subtitle="Practical analysis and thought leadership from our field operations and advisory mandates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#141d18] rounded-3xl overflow-hidden border border-[#dce3df] dark:border-[#22332b] shadow-xs flex flex-col justify-between hover:border-[#359540]/60 dark:hover:border-[#4ade80]/60 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="h-44 overflow-hidden bg-[#e8f3ed] dark:bg-[#18261f]">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#7bb173] mb-2">
                      <Badge variant="sand" size="sm">
                        {item.category}
                      </Badge>
                      <span className="text-[#4a5751] dark:text-[#a8b8b0]">{item.date}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#245240] dark:text-white group-hover:text-[#359540] dark:group-hover:text-[#4ade80] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#4a5751] dark:text-[#a8b8b0] leading-relaxed mt-2 line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#dce3df] dark:border-[#22332b]">
                    <Link
                      to={`/insights/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#245240] dark:text-[#7bb173] group-hover:text-[#359540] dark:group-hover:text-[#4ade80] transition-colors"
                    >
                      <span>Read insight</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}