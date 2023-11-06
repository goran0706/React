import { useEffect, useState } from "react";

const fetchDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};

export default function ApiCalls() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetchDog().then((dog) => setDog(dog));
  }, []);

  return (
    <div className="dog-pics" onClick={async () => setDog(await fetchDog())}>
      <img src={dog} alt={dog} />
    </div>
  );
}
