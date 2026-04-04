import { useState } from "react";
import UserForm from "./UserForm";

export default function DaftarEvent() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [event, setEvent] = useState("");
  const [sesi, setSesi] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // VALIDASI (3 tiap input)
  const errorNama = !nama
    ? "Nama tidak boleh kosong"
    : !isNaN(nama)
      ? "Nama tidak boleh angka"
      : nama.length < 3
        ? "Minimal 3 karakter"
        : "";

  const errorEmail = !email
    ? "Email tidak boleh kosong"
    : !email.includes("@")
      ? "Email tidak valid"
      : email.length < 5
        ? "Email terlalu pendek"
        : "";

  const errorNohp = !nohp
    ? "No HP tidak boleh kosong"
    : isNaN(nohp)
      ? "Harus berupa angka"
      : nohp.length < 10
        ? "Minimal 10 digit"
        : "";

  const isValid = !errorNama && !errorEmail && !errorNohp && event && sesi;

  return (
    <>
      <UserForm
        nama={nama}
        setNama={setNama}
        email={email}
        setEmail={setEmail}
        nohp={nohp}
        setNohp={setNohp}
        event={event}
        setEvent={setEvent}
        sesi={sesi}
        setSesi={setSesi}
        errorNama={errorNama}
        errorEmail={errorEmail}
        errorNohp={errorNohp}
        isValid={isValid}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
      </>   
  );
}
