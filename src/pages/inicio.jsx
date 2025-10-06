import Cabecalho from '../components/cabecalho'
import CartaoDestaque from '../components/cartaoDestaque'
import Rodape from '../components/rodape'
import './inicio.scss'


const cartoes =[
    {
        "imagem": "https://t2.tudocdn.net/492362?w=719&h=431",
        "titulo": "Livros de super Herois",
        "descricao": "Em nossa livraria você vai encontrar livros de diversos heróis da atualidade!",
        "mostrarBotao": false,
        "ImagemDireia": false
    },
    {
        "imagem": "https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg",
        "titulo": "Livros de Receita",
        "descricao": "Se quer cozinhar algo gostoso, compre livros de receitas com tudo que precisa saber!",
        "mostrarBotao": false,
        "ImagemDireia": true
    }
]

export default function Inicio() {
    return(
        <div className="container-inicio">
        <Cabecalho />
        <hr />
        <main>
            <div className='in'>
        <p>seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</p>
        </div>
      {
        cartoes.map(c =>
            <CartaoDestaque
            imagem={c.imagem}
            titulo={c.titulo}
            descricao={c.descricao}
            imagemDireita={c.ImagemDireia}
            />
        )
      }
        </main> 

 
            <Rodape />
             </div>
    )
}