export default function PostItem(props){
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
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
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