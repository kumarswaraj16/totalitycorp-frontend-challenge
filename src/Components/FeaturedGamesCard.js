import "../Styles/FeaturedGamesCard.css";
export const FeaturedGamesCard = () => {
  return (
    <div>
      <h1 className="featuredGamesHeading">Featured Games</h1>
      <div className="grid-wrapper">
        <div className="grid">
          <div className="card">
            <div className="img__wrap">
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/images/2022/09/wild-hearts-key-art.jpg.adapt.crop1x1.767p.jpg"
                alt="Avatar"
              />
              <div className="img__description_layer">
                <img src="https://media.contentapi.ea.com/content/dam/gin/common/logos/wild-hearts-logo.png" alt=""/>
                <p className="img__description">Offical Site</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div className="img__wrap">
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/images/2022/09/dead-space-game-box-key-art.jpg.adapt.crop1x1.767p.jpg"
                alt="Avatar"
              />
              <div className="img__description_layer">
                <img src="https://media.contentapi.ea.com/content/dam/gin/common/logos/dead-space-game-box-logo.svg" alt=""/>
                <p className="img__description">Offical Site</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div className="img__wrap">
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/images/2022/10/nfs-unbound-1x1.png.adapt.crop1x1.767p.png"
                alt="Avatar"
              />
              <div className="img__description_layer">
                <img src="https://media.contentapi.ea.com/content/dam/gin/common/logos/nfs-unbound-logo.png" alt=""/>
                <p className="img__description">Offical Site</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div className="img__wrap">
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg"
                alt="Avatar"
              />
              <div className="img__description_layer">
                <img src="https://media.contentapi.ea.com/content/dam/gin/common/logos/game-box-logo-thesims4-refresh.svg" alt=""/>
                <p className="img__description">Offical Site</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div className="img__wrap">
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg"
                alt="Avatar"
              />
              <div className="img__description_layer">
                <img src="https://media.contentapi.ea.com/content/dam/gin/common/logos/fifa23-logo-white-stacked.svg" alt=""/>
                <p className="img__description">Offical Site</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div className="img__wrap">
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg"
                alt=""
              />
              <div className="img__description_layer">
                <img src="https://media.contentapi.ea.com/content/dam/gin/common/logos/apex-legends-mono-logo.svg" alt=""/>
                <p className="img__description">Offical Site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-games"><button className="latest-games-btn">Latest Games</button></div>
    </div>
  );
};
