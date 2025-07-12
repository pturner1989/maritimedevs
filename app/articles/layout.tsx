import { PropsWithChildren } from "react"
import ResourcesMDX from "../../markdown/Resources.mdx"

export default function ArticlesLayout({children}:PropsWithChildren) {
    return (
            <div className="max-w-prose mx-auto">
              {children}
            </div> 
    )
}