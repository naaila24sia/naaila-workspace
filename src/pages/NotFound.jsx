import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      description="Halaman tidak ditemukan."
      image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
    />
  );
}