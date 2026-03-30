import Header from "./Header";
import Profil from "./Profil";
import About from "./About";
import Pendidikan from "./Pendidikan";
import Skill from "./Skill";
import Kontak from "./Kontak";
import "./custom.css";

function BiodataDiri() {
  return (
    <div className="container">
      <Header />

    <div className="top-section">
      <Profil
        nama="Naaila Raqila Prismart"
        ttl="Pekanbaru, 28 Juli 2006"
        jk="Perempuan"
        alamat="Riau, Indonesia"
        foto="/public/img/PasFoto.jpg.jpeg"
      />
      <Kontak />
    </div>

    <About />

    <div className="row">
      <Pendidikan />
      <Skill />
    </div>

    </div>
  );
}

export default BiodataDiri;