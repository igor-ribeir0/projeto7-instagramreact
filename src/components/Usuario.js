function UsuarioItem(props){
    return(
        <div className="usuario">
            <img src={props.imagemUsuario} />
            <div className="texto">
                <strong>{props.nomeUsuario}</strong>
                <span>
                    {props.subNomeUsuario}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}

export default function Usuario(){
    const arrayUsuario = [
        {imagemUsuario: "assets/img/catanacomics.svg", nomeUsuario: "catanacomics", subNomeUsuario: "Catana"}
    ];

    return(
        <>
            {arrayUsuario.map((usuario) => <UsuarioItem key = {usuario.nomeUsuario} imagemUsuario = {usuario.imagemUsuario}
            nomeUsuario = {usuario.nomeUsuario} subNomeUsuario = {usuario.subNomeUsuario}/>)}
        </>
    );
}