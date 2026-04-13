import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import store from "../../redux functionality/store";

function MainLayout() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default MainLayout;
