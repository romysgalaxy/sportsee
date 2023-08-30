import '../style/header.css'

export default function Header() {
    return (
        <header className="header">
            <nav>
                <img src="./logo.svg" alt="logo"/>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}