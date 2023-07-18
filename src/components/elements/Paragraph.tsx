import { markdownToPortableText } from "@/lib/markdownToHtml";

export const Paragraph = (props:any) => {

const {element} = props;

const getInlineStyling = () => {

    const bold = element.text.match(/ (\*\*).*?(\*\*)/g)
    const italic = element.text.match(/ (\*).*?(\*)/g);

    const italicArray = []

    if (italic) {
        for (let it of italic) {
            if (it !== " **") italicArray.push(it)
        }
        for (let i = 0; i < italicArray.length; i++) {
            italicArray[i] = italicArray[i].trim()
        }
        //console.log(italicArray)
    }

    if (bold) {
        for (let i = 0; i < bold.length; i++) {
            bold[i] = bold[i].trim()
        }

        //console.log(bold)
    }

    return {italic: italicArray, bold}


}


markdownToPortableText(element.text)



return (
    <p className="mb-2">{element.text}</p>
)

}