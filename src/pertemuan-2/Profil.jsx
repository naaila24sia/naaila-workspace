function Profil(props) {
  return (
    <div className="profil">
      <div className="profil-card">

        <img
          src={props.foto}
          alt="Foto Profil"
          className="foto-profil"
        />

        <div className="profil-info">
          <h2>Profil</h2>

          <p><strong>Nama:</strong> {props.nama}</p>
          <p><strong>TTL:</strong> {props.ttl}</p>
          <p><strong>Jenis Kelamin:</strong> {props.jk}</p>
          <p><strong>Alamat:</strong> {props.alamat}</p>
        </div>

      </div>
    </div>
  );
}

export default Profil;