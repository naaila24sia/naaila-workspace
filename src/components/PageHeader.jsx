import { FaPaw } from "react-icons/fa";

// Tambahkan prop 'icon' di sini
export default function PageHeader({ title, breadcrumb, icon: Icon, children }) {
  return (
    <div className="flex items-center justify-between p-6 bg-bg-card rounded-[1.5rem] border border-border shadow-sm">
      
      {/* LEFT SECTION */}
      <div className="flex flex-col gap-1">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider">
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span
                  className={
                    index === breadcrumb.length - 1
                      ? "text-primary" 
                      : "text-text-soft"
                  }
                >
                  {item}
                </span>

                {index !== breadcrumb.length - 1 && (
                  <span className="text-border">/</span>
                )}
              </div>
            ))
          ) : (
            <span className="text-text-soft">{breadcrumb}</span>
          )}
        </nav>

        {/* Title & Icon */}
        <div className="flex items-center gap-3 mt-1">
          <div className="p-2.5 bg-primary-soft rounded-xl">
            {/* Jika prop 'icon' dikirim, render icon tersebut.
              Jika tidak ada, otomatis pakai FaPaw.
            */}
            {Icon ? <Icon className="text-primary text-xl" /> : <FaPaw className="text-primary text-xl" />}
          </div>
          <h1 className="text-2xl font-poppins font-extrabold text-text-main tracking-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* RIGHT SECTION - Slot untuk Button atau Action lainnya */}
      <div className="flex items-center gap-3">
        {children}
      </div>

    </div>
  );
}