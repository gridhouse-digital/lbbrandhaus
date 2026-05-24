type SectionHeaderProps = {
  index: string
  title: string
  accent?: string
  summary: string
}

function SectionHeader({ index, title, accent, summary }: SectionHeaderProps) {
  return (
    <header className='section-header'>
      <p className='eyebrow'>- Index {index}</p>
      <h2>
        {title} {accent ? <em>{accent}</em> : null}
      </h2>
      <p className='section-summary'>{summary}</p>
    </header>
  )
}

export default SectionHeader
