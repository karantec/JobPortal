import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {

 

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/3c4f0cfe-b47a-4db3-835a-10b00efa643b"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleDelete = async (rowIndex) => {
  //   try {
  //     const res = await fetch(
  //       `https://sheet.best/api/sheets/3c4f0cfe-b47a-4db3-835a-10b00efa643b/${rowIndex}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     if (res.ok) {
  //       const updatedData = data.filter((_, i) => i !== rowIndex);
  //       setData(updatedData);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
      <table className="table table-bordered align-middle">
      <thead>
      <tr>
      <th scope="col">Id</th>
      <th scope="col">Company Name</th>
      <th scope="col">Role</th>
      <th scope="col">Experience</th>
      <th scope="col">Location</th>
      <th scope="col">Apply</th>
    </tr>
  </thead>
  <tbody>
  {data?.map((item, i) => (
    <tr key={i}>
      <td>{i}</td>
      <td>{item.CompanyName}</td>
      <td>{item.Role}</td>
      <td>{item.Experience}</td>
      <td>{item.Location}</td>
      <a href={item.Apply}><button type="button" className="btn btn-primary btn-small mt-3 mb-2">Apply</button></a>
    </tr> 
    ))}
  </tbody>
</table>
    

  );
};

export default Home;
