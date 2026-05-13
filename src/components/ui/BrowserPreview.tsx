type BrowserPreviewProps = {
  shortUrl: string
  description: string
  metrics: string[]
}

function BrowserPreview({ shortUrl, description, metrics }: BrowserPreviewProps) {
  return (
    <div className="browser-frame">
      <div className="browser-frame__bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-frame__content">
        <p className="short-url">{shortUrl}</p>
        <p className="redirect-label">{description}</p>
        <div className="metric-row" aria-label="Project feature metrics">
          {metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowserPreview
