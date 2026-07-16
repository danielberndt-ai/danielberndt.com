// Ambient háttér: sötét teal gradiens, finom rács és két lassan lélegző fényfolt.
// Minden fix pozíciójú és pointer-events: none, hogy ne zavarja a tartalmat.
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow--orange" />
      <div className="bg-glow bg-glow--teal" />
    </div>
  );
}
