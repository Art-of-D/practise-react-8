const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      return;
    }
    await navigator.clipboard.writeText(`#${hex}`);
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
