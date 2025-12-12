import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import Loading from "./components/loading/Loading";
import { R } from "react-router/dist/development/index-react-server-client-BSxMvS7Z";
const Home = React.lazy(() => import("./pages/home/home"));
const OwnTheView = React.lazy(() => import("./pages/owntheview"));
const Boys = React.lazy(() => import("./pages/boys"));
// const Circus = React.lazy(() => import("./pages/circus"));
const Skylines = React.lazy(() => import("./pages/skylines"));
const MakingMyName = React.lazy(() => import("./pages/makingmyname"));
const Shows = React.lazy(() => import("./pages/shows"));
const Merch = React.lazy(
  () => import("./pages/merch/index")
);
const NotFound = React.lazy(
  () => import("./components/subpages/notFound/notFound")
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Header />
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="albums">
          {/* <Route path="thecircusofthegrieving" element={<Circus />} /> */}
          <Route path="owntheview" element={<OwnTheView />} />

          <Route path="makingmyname" element={<MakingMyName />} />
          <Route path="skylines" element={<Skylines />} />
          <Route path="boys" element={<Boys />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
