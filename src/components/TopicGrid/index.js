import React, { useState, useEffect } from "react";
import { FcLock } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { selectedTopic } from "../../actions/EventActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryList = [
  { id: 9, name: "General Knowledge" },

  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },

  { id: 14, name: "Entertainment: Television" },
  { id: 15, name: "Entertainment: Video Games" },

  { id: 21, name: "Sports" },

  { id: 26, name: "Celebrities" },
  { id: 27, name: "Animals" },
  { id: 29, name: "locked" },
  { id: 30, name: "locked" },
  { id: 31, name: "locked" },
  { id: 32, name: "locked" },
];

export const TopicGrid = () => {
  //   dynamic categories from api
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((response) => {
      //   console.log(response.data.trivia_categories);
      setCategories(response.data.trivia_categories);
    });
  }, []);
  console.log("categories", categories);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Topics, userName } = useSelector((state) => ({
    Topics: state.UserInfo.Topics,
    userName: state.UserInfo.UserDetails.name,
  }));
  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  });

  function handleValue(value) {
    console.log(value, "here is value");
    dispatch(selectedTopic(value));
    navigate("/quiz");
  }

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "2%" }}>
        <h1 className="text-center">Hello {userName}</h1>
        {error === "" ? (
          <h4 className="text-center mb-4 ">Please choose a topic</h4>
        ) : (
          <h4 className="text-center bg-danger  mb-4">
            You can not visit a locked topic
          </h4>
        )}
        <br />
        {CategoryList.map((value, index) => (
          <div className="col-md-3 mb-2" key={index}>
            {value.name !== "locked" ? (
              <button
                className={`bg-${value.color} hover width`}
                onClick={() => handleValue(value.name)}
              >
                <div
                  className={`d-flex justify-content-center align-items-center`}
                  style={{ padding: "40px" }}
                >
                  <h3>{value.name}</h3>
                </div>
              </button>
            ) : (
              <button
                className={`bg-danger width`}
                onClick={() => setError(value.name)}
              >
                <div
                  className=" d-flex flex-column justify-content-center align-items-center"
                  style={{ padding: "25px 35px" }}
                >
                  <h3>Locked</h3>
                  <div>
                    <FcLock style={{ fontSize: "40px" }}></FcLock>
                  </div>
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
