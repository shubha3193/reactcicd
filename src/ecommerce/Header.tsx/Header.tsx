

type HeaderProps = {
    title : string;
    subTitle? : string;

};
const Header = ({title , subTitle} : HeaderProps) => {

    return(

        <header style={{ textAlign : "center",top : "0", margin: "1rem 0" , }}>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
        
        </header>
    )
}
export default Header;
