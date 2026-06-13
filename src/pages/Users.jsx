import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import {
  FaPlus,
  FaSearch,
  FaEye,
  FaEyeSlash,
  FaUserShield,
} from "react-icons/fa";
import { MdAlternateEmail, MdVpnKey } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { authAPI } from "../services/authAPI";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await authAPI.fetchUsers();
      setUsers(data || []);
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      setDeletingId(id);
      await authAPI.deleteUsers(id);

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Gagal menghapus pengguna:", error);
      alert("Gagal menghapus user, silakan coba lagi.");
    } finally {
      setDeletingId(null);
    }
  };

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredUsers = users.filter((user) => {
    const matchesEmail = user.email
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRole = user.role
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesEmail || matchesRole;
  });

  return (
    <div className="p-6 space-y-6 bg-bg-main min-h-screen font-barlow">
      {/* HEADER SECTION */}
      <PageHeader title="User Management" breadcrumb={["Dashboard", "Users"]}>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft/40 group-focus-within:text-primary transition-colors text-xs" />
            <input
              type="text"
              placeholder="Search email or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm outline-none focus:ring-4 focus:ring-primary-soft transition-all w-64 focus:w-72 shadow-sm font-bold text-text-main"
            />
          </div>

          <NavLink to="/users/add">
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              <FaPlus /> Add New User
            </button>
          </NavLink>
        </div>
      </PageHeader>

      {/* MAIN TABLE CONTAINER */}
      <div className="bg-white rounded-[2rem] border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-main/50 border-b border-border">
                <th className="px-8 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  User ID
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Role
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Email Address
                </th>
                <th className="px-6 py-5 text-[11px] font-extrabold uppercase tracking-widest text-text-soft">
                  Account Password
                </th>
                <th className="px-8 py-5 text-right uppercase tracking-widest text-text-soft"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-8 py-10 text-center text-text-soft font-bold"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <AiOutlineLoading3Quarters className="animate-spin text-primary text-lg" />
                      Loading users data from Supabase...
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-8 py-10 text-center text-text-soft font-bold"
                  >
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, index) => (
                  <tr
                    key={user.id || index}
                    className="hover:bg-bg-main/30 transition-all duration-300 group"
                  >
                    {/* Column 1: ID */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center border-2 border-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3">
                          <FaUserShield className="text-primary text-lg" />
                        </div>
                        <div>
                          <p className="font-poppins font-bold text-text-main text-base uppercase leading-tight">
                            USR-{String(user.id || index + 1).padStart(3, "0")}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Column 2: Role */}
                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                          user.role?.toLowerCase() === "admin"
                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                            : "bg-purple-50 text-purple-600 border border-purple-200"
                        }`}
                      >
                        {user.role || "No Role"}
                      </span>
                    </td>

                    {/* Column 3: Email */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-text-main font-bold">
                        <MdAlternateEmail className="text-text-soft text-base shrink-0" />
                        <span>{user.email}</span>
                      </div>
                    </td>

                    {/* Column 4: Password */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <MdVpnKey className="text-text-soft text-base shrink-0" />
                        <input
                          type={visiblePasswords[user.id] ? "text" : "password"}
                          value={user.password || ""}
                          readOnly
                          className="bg-transparent text-sm font-bold text-text-main outline-none w-44 tracking-wide font-mono"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility(user.id)}
                          className="text-text-soft/60 hover:text-primary transition-colors p-1 cursor-pointer"
                        >
                          {visiblePasswords[user.id] ? (
                            <FaEyeSlash size={14} />
                          ) : (
                            <FaEye size={14} />
                          )}
                        </button>
                      </div>
                    </td>

                    {/* Column 5: Actions (Dropdown & Modal Terintegrasi) */}
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="inline-flex items-center justify-center w-8 h-8 bg-bg-main hover:bg-border/40 text-text-soft hover:text-text-main rounded-xl transition-all shadow-sm outline-none cursor-pointer">
                              <MoreVertical size={12} />
                            </button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent
                            align="end"
                            className="w-44 rounded-xl border border-border bg-bg-card p-1 shadow-soft font-body outline-none"
                          >
                            {/* Tombol Edit */}
                            <DropdownMenuItem
                              onClick={() => navigate(`/users/edit/${user.id}`)}
                              className="cursor-pointer text-text-main text-xs font-semibold px-3 py-2 rounded-lg hover:bg-bg-main focus:bg-bg-main focus:text-text-main outline-none transition-colors"
                            >
                              Edit Account
                            </DropdownMenuItem>

                            {/* Pembungkus Dialog Hapus */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="w-full text-left cursor-pointer text-error text-xs font-bold px-3 py-2 rounded-lg hover:bg-error-soft/10 focus:bg-error-soft/10 focus:text-error outline-none transition-colors">
                                  Delete Account
                                </button>
                              </DialogTrigger>

                              <DialogContent className="rounded-[2rem] border border-border bg-white p-6 max-w-sm mx-auto font-barlow text-center shadow-2xl">
                                <DialogHeader className="flex flex-col items-center justify-center text-center">
                                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-3 border border-red-100 font-bold text-lg">
                                    ⚠️
                                  </div>
                                  <DialogTitle className="font-poppins font-black text-text-main text-xl uppercase tracking-tight">
                                    Remove Access?
                                  </DialogTitle>
                                  <DialogDescription className="text-xs text-text-soft/80 font-medium mt-2 max-w-[260px]">
                                    Are you sure you want to delete account{" "}
                                    <span className="font-bold text-text-main break-all block my-1 text-primary">
                                      {user.email}
                                    </span>
                                    This user will lose all database privileges
                                    immediately.
                                  </DialogDescription>
                                </DialogHeader>

                                <DialogFooter className="mt-6 flex gap-2 justify-center w-full sm:justify-center">
                                  <DialogClose asChild>
                                    <button className="rounded-xl border border-border text-[11px] font-black uppercase px-4 py-2.5 hover:bg-bg-main transition-all text-text-soft cursor-pointer">
                                      Cancel
                                    </button>
                                  </DialogClose>
                                  <DialogClose asChild>
                                    <button
                                      onClick={() => handleDeleteUser(user.id)}
                                      disabled={deletingId === user.id}
                                      className="rounded-xl bg-red-500 hover:bg-red-600 text-white text-[11px] font-black uppercase px-4 py-2.5 shadow-md transition-all cursor-pointer disabled:opacity-50"
                                    >
                                      {deletingId === user.id
                                        ? "Deleting..."
                                        : "Yes, Terminate"}
                                    </button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER INFO */}
        <div className="p-6 bg-bg-main/20 border-t border-border flex justify-between items-center">
          <p className="text-xs text-text-soft font-bold uppercase tracking-widest">
            Showing <span className="text-primary">{filteredUsers.length}</span>{" "}
            of {users.length} Users
          </p>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-xs font-black uppercase hover:bg-bg-main transition-all shadow-sm cursor-pointer">
              Prev
            </button>
            <button className="px-5 py-2 bg-white border border-border rounded-xl text-xs font-black uppercase hover:bg-bg-main transition-all shadow-sm cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
