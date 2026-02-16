import Back from "../components/background";
import HomeP from "../components/HomePage";

export const Home = () => {
  return (
    <><div>
      <div id="back" className="min-h-screen">
        {<HomeP/>}
      </div>
    </div>
    <div className="z-1">
        {<Back />}
    </div></>
  );
};
