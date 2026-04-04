import InputField from "./components/InputField";

export default function UserForm({
  nama,
  setNama,
  email,
  setEmail,
  nohp,
  setNohp,
  event,
  setEvent,
  sesi,
  setSesi,
  errorNama,
  errorEmail,
  errorNohp,
  isValid,
  submitted,
  setSubmitted,
}) {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-pink-50 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-pink-600">
          🌸 Daftar Event Bunga
        </h2>

        <label className="block font-medium">Nama</label>
        <InputField
          placeholder="Masukkan nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          error={errorNama}
        />

        <label className="block font-medium">Email</label>
        <InputField
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errorEmail}
        />

        <label className="block font-medium">No HP</label>
        <InputField
          placeholder="Masukkan nomor HP"
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
          error={errorNohp}
        />

        <label className="block font-medium">Pilih Event</label>
        <select
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        >
          <option value="">-- Pilih Event --</option>
          <option value="Seminar">Seminar Merangkai Bunga</option>
          <option value="Workshop">
            Workshop Merangkai Bunga Fresh Flower
          </option>
        </select>

        <label className="block font-medium">Pilih Sesi</label>
        <select
          value={sesi}
          onChange={(e) => setSesi(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Pilih Sesi --</option>
          <option value="09:00"> Sesi Pagi (09:00 - 12:00)</option>
          <option value="13:00"> Sesi Siang (13:00 - 16:00)</option>
          <option value="16:00"> Sesi Sore (17:00 - 20:00)</option>
        </select>
        
        {/* VALIDASI */}
        {!isValid && (
          <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p className="font-semibold">Silahkan isi data dengan benar</p>
          </div>
        )}

        {/* tombol */}
        {isValid && !submitted && (
          <button
            onClick={() => setSubmitted(true)}
            className="mt-4 w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
          >
            Submit
          </button>
        )}

        {/* hasil */}
        {submitted && (
          <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700">
            <p className="font-semibold">Pendaftaran Berhasil 🎉</p>
            <p>Nama: {nama}</p>
            <p>Email: {email}</p>
            <p>No HP: {nohp}</p>
            <p>Event: {event}</p>
            <p>Sesi: {sesi}</p>
          </div>
        )}
      </div>
    </div>
  );
}
