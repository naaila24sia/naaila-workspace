export default function ReportCard() {
  return (
    <div className="card p-5">

      <div className="flex items-center justify-between mb-5">

        <h3 className="h3">
          Reports
        </h3>

        <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
          +
        </button>
      </div>

      <div className="space-y-5">

        <div>

          <p className="body-text font-semibold">
            Payment for a batch of vaccines
          </p>

          <p className="small-text text-text-soft mt-1">
            4 minute ago
          </p>
        </div>

        <div>

          <p className="body-text font-semibold">
            A new order for grooming cosmetics
          </p>

          <p className="small-text text-text-soft mt-1">
            19 minute ago
          </p>
        </div>
      </div>
    </div>
  );
}