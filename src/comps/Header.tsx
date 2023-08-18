import troll from "/Troll Face.png";

export default function Header() {
  function mouseOver() {
    console.log("you are being trolled");
  }

  return (
    <>
      <div className="header">
        <span className="subheader">
          <img src={troll} alt="" onMouseOver={mouseOver} />
          <h3>Meme Generator</h3>
        </span>
        <p>React Course - Project 3</p>
      </div>
    </>
  );
}
