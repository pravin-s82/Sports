import React from "react"

export interface BreadcrumbItem {
  title: string
  url?: string
}

interface BreadcrumbProps {
  currentTitle: string
  parents?: BreadcrumbItem[]
  customRoot?: BreadcrumbItem 
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentTitle, parents = [], customRoot }) => {
  const allItems: BreadcrumbItem[] = [
    { title: "Home", url: "/" },
    ...(customRoot ? [customRoot] : []),
    ...parents,
  ]

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {allItems.map((item, idx) => (
          <li key={idx}>
            <a href={item.url ?? "#"} title={item.title}>{item.title}</a>
          </li>
        ))}
        <li className="active">{currentTitle}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
