import "./styles.css";

import Header from "./components/Headers";
import Section from "./components/Sections";
import ListItem from "./components/ListItens";
import SocialItem from "./components/SocialItens";

const gameListData = [
    {
      url:"https://www.twitch.tv/directory/game/League%20of%20Legends",
      imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
      alt:"Imagem do jogo League of Legends"
    },
    {
      url:"https://www.twitch.tv/directory/game/VALORANT",
      imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
      alt:"Imagem do jogo Valorant",
    },
    {
      url:"https://www.twitch.tv/directory/game/Minecraft",
      imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
      alt:"Imagem do jogo Minecraft",
    },
    {
      url:"https://www.twitch.tv/directory/game/Teamfight%20Tactics",
      imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
      alt:"Imagem do jogo TFT",
    }
  ]
const channelListData = [
  {
    url:"https://www.twitch.tv/wescleyyt", 
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/055c80fa-1f48-4778-81fd-993e11964503-profile_image-70x70.png",
    alt:"Imagem de Wescley Silva",
  },
  {
    url:"https://www.twitch.tv/alanzoka",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png" ,
    alt:"Imagem de Alanzoka",
  },
]
const socialListData = [
    {
      url:"https://www.youtube.com/@wescleysildev",
      imageUrl:"/assets/youtube.svg",
      alt:"Logo do youtube",
    },
    {
      url:"https://twitch.tv/wescleyyt",
      imageUrl:"/assets/twitch.svg",
      alt:"Logo da twitch",
    }
]

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          listType="games-list"
          >

          {
            gameListData.map(function(item){
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }

            
        </Section>


        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          listType="channel-list"
          >


          {
            channelListData.map(function(item){
                return(
                  <ListItem 
                    url={item.url}
                    imageUrl={item.imageUrl}
                    alt={item.alt}
                  />
                )
            })
          }

        </Section>

        <Section
            title="Minhas redes"
            subtitle="Se conecte comigo agora mesmo!"
            listType="social-list"
            >
              
          {
            socialListData.map(function(item){
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }

        </Section>
      </main>
    </div>
  );
}
