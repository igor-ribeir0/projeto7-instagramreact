import React from "react";

export default function PostItem(props){
    const [imagemSalva, setImagemSalva] = React.useState(<ion-icon onClick ={salvarImagem} name="bookmark-outline"></ion-icon>);
    const [likeImagem, setLikeImagem] = React.useState(<ion-icon onClick={like} name="heart-outline"></ion-icon>);
    const [contador, setContador] = React.useState(101.523);

    function salvarImagem(){
        setImagemSalva(<ion-icon onClick ={salvarImagem} name="bookmark"></ion-icon>);
    }

    function like(){
        setLikeImagem(<ion-icon onClick={like} name="heart"></ion-icon>);
        setContador(contador++);
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
                    <img src={props.imagemConteudo} />
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