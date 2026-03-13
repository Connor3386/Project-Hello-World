function Title({ names, titles }) {
  return (
    <div className="title">
      <h2>{names}</h2>
      <p className="subtitle">{titles}</p>
    </div>
  );
}

export default Title;
