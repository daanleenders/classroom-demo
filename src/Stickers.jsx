import { useState } from "react";
import "./Stickers.css";

function Stickers() {
  const emoji = ["😁", "🤩"];
  const sizes = [20, 30];

  const [stickers, setStickers] = useState([]);
  const [selectedEmoji, setEmoji] = useState(emoji[0]);
  const [selectedSize, setSize] = useState(sizes[0]);

  const handleClick = (event) => {
    stickers.push({
      emoji: selectedEmoji,
      size: selectedSize,
      x: event.clientX - 10,
      y: event.clientY - 10,
    });
    setStickers([...stickers]);
  };

  const handleEmojiChange = ({ target }) => {
    setEmoji(target.value);
  };

  const handleSizeChange = ({ target }) => {
    setSize(parseInt(target.value));
  };

  // const handleClear = () => {
  //   setStickers([]);
  // };

  return (
    <>
      <div className="control-bar">
        Sticker
        <select onChange={handleEmojiChange} style={{ fontSize: selectedSize }}>
          {emoji.map((emoji, i) => (
            <option value={emoji} key={i}>
              {emoji}
            </option>
          ))}
        </select>
        Maat
        <select onChange={handleSizeChange} style={{ fontSize: selectedSize }}>
          {sizes.map((size, i) => (
            <option value={size} key={i} style={{ fontSize: size }}>
              {emoji[0]}
            </option>
          ))}
        </select>
        {/*<button onClick={handleClear}>Alles verwijderen</button>*/}
      </div>
      <div className="stickervel" onClick={handleClick}>
        {stickers.map((sticker, i) => (
          <div
            className="sticker"
            style={{ left: sticker.x, top: sticker.y, fontSize: sticker.size }}
            key={i}
          >
            {sticker.emoji}
          </div>
        ))}
      </div>
    </>
  );
}

export default Stickers;
