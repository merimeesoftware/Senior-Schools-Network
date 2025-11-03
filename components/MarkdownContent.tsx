import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

/**
 * Reusable component for rendering markdown content with consistent styling
 * aligned with the Senior Schools Network design system
 */
export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-playfair text-forest mb-6 mt-8 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-playfair text-forest mb-4 mt-8">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl md:text-3xl font-playfair text-forest mb-3 mt-6">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl md:text-2xl font-playfair text-forest/90 mb-3 mt-4">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg md:text-xl font-playfair text-forest/90 mb-2 mt-4">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base md:text-lg font-playfair text-forest/80 mb-2 mt-3">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="text-base md:text-lg leading-relaxed text-charcoal/90 mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 marker:text-gold">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 ml-4 text-charcoal/90">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-base md:text-lg leading-relaxed text-charcoal/90">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gold bg-gold/10 pl-6 pr-4 py-4 my-6 rounded-r-lg">
              <div className="text-base md:text-lg italic text-charcoal/80 leading-relaxed">
                {children}
              </div>
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-spiritual hover:text-spiritual/80 underline decoration-spiritual/30 hover:decoration-spiritual/60 transition-colors"
              {...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {children}
            </a>
          ),
          code: ({ children, className }) => {
            const isInline = !className || !className.includes('language-');
            return isInline ? (
              <code className="bg-parchment-dark px-2 py-0.5 rounded text-sm font-mono text-charcoal">
                {children}
              </code>
            ) : (
              <code className="block bg-parchment-dark p-4 rounded-lg overflow-x-auto text-sm font-mono text-charcoal my-4">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-parchment-dark p-4 rounded-lg overflow-x-auto my-4">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-charcoal/20">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-parchment-dark">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="bg-white">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-charcoal/10">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-semibold text-forest border border-charcoal/20">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-charcoal/90 border border-charcoal/10">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-8 border-t-2 border-charcoal/20" />
          ),
          em: ({ children }) => (
            <em className="italic text-charcoal/90">
              {children}
            </em>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-forest">
              {children}
            </strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
