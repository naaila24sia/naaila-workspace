import ErrorPage from "../components/ErrorPage";

export default function Error400() {
  return (
    <ErrorPage
      code="400"
      description="Bad Request. Permintaan tidak valid."
      image="https://cdn-icons-png.flaticon.com/512/595/595067.png"
    />
  );
}