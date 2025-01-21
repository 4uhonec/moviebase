import "./../App.css";

export default function Header(){
    return (
        <div className="header">
            <img className="logo" src="logo.png" alt="Movie Base" />
            <h2 className="app-subtitle">Popcorn time! Find your next movie here.</h2>
        </div>
    )
}