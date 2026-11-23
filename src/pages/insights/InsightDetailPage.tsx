import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { INSIGHTS_ITEMS } from '@/content/insights.content'

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = INSIGHTS_ITEMS.find((a) => a.slug === slug)

  if (!article) {
    return <Navigate to="/insights" replace />
  }

  return (
    <div className="py-12 sm:py-20 transition-colors duration-300">
      <Container size="narrow">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#359540] dark:text-[#7bb173] hover:text-[#245240] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8 pb-8 border-b border-[#dce3df] dark:border-[#1d2923]">
          <div className="flex items-center gap-3 text-xs text-[#7bb173]">
            <Badge variant="green" size="sm">
              {article.category}
            </Badge>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#359540] dark:text-[#4ade80]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#359540] dark:text-[#4ade80]" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#245240] dark:text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4a5751] dark:text-[#a8b8b0] font-medium leading-relaxed italic">
            {article.summary}
          </p>
        </header>

        {/* Banner Image */}
        {article.imageSrc && (
          <div className="rounded-3xl overflow-hidden shadow-md aspect-16/9 mb-10 border border-[#dce3df] dark:border-[#22332b]">
            <img
              src={article.imageSrc}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-lg max-w-none space-y-6 text-[#2d3632] dark:text-[#c2ccc7] leading-relaxed text-sm sm:text-base">
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-[#dce3df] dark:border-[#22332b] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-[#e8f3ed] dark:bg-[#16271e] border border-[#bbdecc]/50 dark:border-[#274434] text-[#245240] dark:text-[#bbdecc] font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Button href="/contact" variant="outline" size="sm">
            Inquire With ACL
          </Button>
        </div>
      </Container>
    </div>
  )
}