import React from "react";

let i, j = 0;

export default function PostItem(props){
    const [imagemSalva, setImagemSalva] = React.useState(<ion-icon onClick ={salvarImagem} name="bookmark-outline"></ion-icon>);
    const [likeImagem, setLikeImagem] = React.useState(<ion-icon onClick={like} name="heart-outline"></ion-icon>);

    function salvarImagem(){
        if(j === 0){
            setImagemSalva(<ion-icon onClick ={salvarImagem} name="bookmark"></ion-icon>);
            j = 1;
        }
        else{
            setImagemSalva(<ion-icon onClick ={salvarImagem} name="bookmark-outline"></ion-icon>);
            j = 0;
        }
    }

    function like(){
        if(i === 0){
            setLikeImagem(<ion-icon onClick={like} name="heart"></ion-icon>);
            i = 1;
        }
        else{
            setLikeImagem(<ion-icon onClick={like} name="heart-outline"></ion-icon>);
            i = 0;
        }
    }

    function reset(){
        setLikeImagem(<ion-icon onClick={like} name="heart-outline"></ion-icon>);
        i = 0;
    }

    function likeRed(){
        setLikeImagem(<img onClick={reset} className = "redheart" src="assets/img/heart.jpeg"/>);
    }

    return(
        <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={props.imagemTopo} />
                        {props.nomeTopo}
                    </div>

                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img onClick={likeRed} src={props.imagemConteudo} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            {likeImagem}
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            {imagemSalva}
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.imagemCurtiu} />
                        <div className="texto">
                            Curtido por <strong>{props.nomeCurtiu}</strong> e{" "}
                            <strong>outras {props.valorCurtiu} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    );
}