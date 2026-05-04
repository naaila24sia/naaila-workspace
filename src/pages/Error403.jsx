import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      description="Forbidden. Tidak punya akses."
      image="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
    />
  );
}