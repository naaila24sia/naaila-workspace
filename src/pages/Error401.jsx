import ErrorPage from "../components/ErrorPage";

export default function Error401() {
  return (
    <ErrorPage
      code="401"
      description="Unauthorized. Kamu belum login."
      image="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
    />
  );
}