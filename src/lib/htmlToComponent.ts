export const transformHtml = (content:string) => {

    const elements:any = []

    const sections = content.split("\n");

    sections.map((sec) => {

        let text = sec.trim()
        text = text.trimEnd()

        if (getTag(text)) {
            elements.push(getTag(text))
        }
    })

    return elements


}

const getTag = (text:string) => {
    if (text === "") return null
    else if (text.startsWith("# ")) return {tag: "h1", type: "header", text: text.replace("# ", "")}
    else if (text.startsWith("## ")) return {tag: "h2", type: "header", text: text.replace("## ", "")}
    else if (text.startsWith("### ")) return {tag: "h3", type: "header", text: text.replace("### ", "")}
    else if (text.startsWith("#### ")) return {tag: "h4", type: "header", text: text.replace("#### ", "")}
    else if (text.startsWith("##### ")) return {tag: "h5", text: text.replace("##### ", "")}
    else return {tag: "p", text}
}