function SugestoesItem(props){
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagemUsuario} />
                <div className="texto">
                    <div className="nome">{props.nomeUsuario}</div>
                    <div className="razao">{props.statusUsuario}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}

export default function Sugestoes(){
    const arraySugestoes = [
        {imagemUsuario: "assets/img/bad.vibes.memes.svg", nomeUsuario: "bad.vibes.memes", statusUsuario: "Segue você"},
        {imagemUsuario: "assets/img/chibirdart.svg", nomeUsuario: "chibirdart", statusUsuario: "Segue você"},
        {imagemUsuario: "assets/img/razoesparaacreditar.svg", nomeUsuario: "razoesparaacreditar", statusUsuario: "Novo no Instagram"},
        {imagemUsuario: "assets/img/adorable_animals.svg", nomeUsuario: "adorable_animals", statusUsuario: "Segue você"},
        {imagemUsuario: "assets/img/smallcutecats.svg", nomeUsuario: "smallcutecats", statusUsuario: "Segue você"}
    ];

    return(
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {arraySugestoes.map((perfil) => <SugestoesItem key = {perfil.nomeUsuario} imagemUsuario = {perfil.imagemUsuario} 
            nomeUsuario = {perfil.nomeUsuario} statusUsuario = {perfil.statusUsuario}/>)}
        </div>
    );
}