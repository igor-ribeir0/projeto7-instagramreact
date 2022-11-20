import React from "react";

export default function Usuario(){
    const [sub, setSub] = React.useState("Catana");
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");

    function alterarNome(){
        const resposta = prompt("Novo nome: ");
        if(resposta){
            setSub(resposta);
        }
    }

    function alterarImagem(){
        const resposta = prompt("Nova imagem: ");
        if(resposta){
            setImagem(resposta);
        }
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