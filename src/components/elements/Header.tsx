export const Header = (props:any) => {

const {element} = props;

const setClass = () => {
    if (element.tag === "h1") return "text-4xl font-bold mb-2";
    if (element.tag === "h2") return "text-2xl font-bold mb-2";
    if (element.tag === "h3") return "text-xl font-bold mb-2";
}

return (
    <h1 className={setClass()}>{element.text}</h1>
)

}