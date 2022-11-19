import PostItem from "./PostItem";

export default function Posts() {
    const arrayPosts = [
        {
            imagemTopo: "assets/img/meowed.svg", nomeTopo: "meowed", imagemConteudo: "assets/img/gato-telefone.svg",
            imagemCurtiu: "assets/img/respondeai.svg", nomeCurtiu: "respondeai", valorCurtiu: "101.523"
        },

        {
            imagemTopo: "assets/img/barked.svg", nomeTopo: "barked", imagemConteudo: "assets/img/dog.svg",
            imagemCurtiu: "assets/img/adorable_animals.svg", nomeCurtiu: "adorable_animals", valorCurtiu: "99.159"
        }
    ];

    return (
        <div className="posts">
            {arrayPosts.map((post) => <PostItem key = {post.nomeTopo}imagemTopo = {post.imagemTopo} nomeTopo = {post.nomeTopo}
            imagemConteudo = {post.imagemConteudo} imagemCurtiu = {post.imagemCurtiu} 
            nomeCurtiu = {post.nomeCurtiu} valorCurtiu = {post.valorCurtiu} />)}
        </div>
    );
}
