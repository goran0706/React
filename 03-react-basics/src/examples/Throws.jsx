import { useEffect } from "react";

const Throws = () => {
  useEffect(() => {
    throw new Error("Hello from the other side");
  }, []);

  return <div>Throws</div>;
};

export default Throws;
