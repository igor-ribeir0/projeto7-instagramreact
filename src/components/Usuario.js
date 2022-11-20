import React from "react";

export default function Usuario(){
    const [sub, setSub] = React.useState("Catana");
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");

    function alterarNome(){
        setSub(prompt("Novo nome: "));
    }

    function alterarImagem(){
        setImagem(prompt("Nova imagem: "));
    }

    return(
        <div className="usuario">
            <img onClick={alterarImagem} src={!imagem ? "assets/img/catanacomics.svg" : imagem} />
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    {!sub ? "Catana" : sub}
                    <ion-icon onClick={alterarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}