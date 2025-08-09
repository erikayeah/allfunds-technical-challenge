import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import { setContext } from "svelte";
import NavBar from "../components/navBar/NavBar";

const Archived = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <NavBar />
      {loading ? <Loading /> : <h1> ARCHIVED</h1>}
    </div>
  );
};

export default Archived;
