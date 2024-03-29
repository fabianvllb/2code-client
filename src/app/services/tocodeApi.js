//import axios from "axios";
import axios from "./axiosConf";

//export const URL = "http://localhost:5000/api";

// user

export async function fetchAllUsers() {
  try {
    const response = await axios.get("/user/all");
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function fetchUserDataByEmail(email) {
  try {
    const response = await axios.post("/user/check", {
      email,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

// export async function fetcUserDataFromDB(email) {
//   try {
//     const response = await axios.post(URL + "/user/check", {
//       email,
//     });
//     return response.data;
//   } catch (err) {
//     console.log("Couldn't get user data");
//     throw err;
//     //return null;
//   }
// }

export async function getUserById(id) {
  try {
    const response = await axios.get("/user/" + id);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function updateUserById(id, user) {
  try {
    const response = await axios.put("/user/" + id, user);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteUserById(id) {
  try {
    const response = await axios.delete("/user/" + id);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getAllUserCreatedProblems(id) {
  try {
    const response = await axios.post("/user/problems", {
      id,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

// admin

//TODO when doing own authentication modify this function to authenticate admin
export async function checkIsAdmin(email, password) {
  try {
    const response = await axios.post("/admin/signin", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function isAdmin(email) {
  try {
    const response = await axios.post("/admin/check", {
      email,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

// problem

export async function createProblem(problem) {
  try {
    const res = await axios.post("/problem", problem);
    //console.log("received: ", res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function editProblem(problemid, problem) {
  try {
    const response = await axios.put("/problem/" + problemid, problem);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getAllActiveProblemsOrderByProperty(userid, property) {
  try {
    const response = await axios.get(
      "/problem?userid=" + userid + "&property=" + property
    );
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getProblemData(problemid) {
  try {
    const response = await axios.get("/problem/" + problemid);
    return response.data;
  } catch (err) {
    throw err;
  }
}

// submission

export async function getUserSubmissions(id) {
  try {
    const response = await axios.get("/submission/all/" + id);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getLatestUserSubmissionData(problemId, email) {
  try {
    const response = await axios.post("/submission/data", {
      problemId,
      email,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function submitCodeForEvaluation(
  code,
  problemId,
  language,
  email
) {
  try {
    const response = await axios.post("/submission/run", {
      code,
      problemId,
      language,
      email,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function saveCode(code, problemid, language, userid) {
  try {
    const response = await axios.post("/submission/save", {
      code,
      problemid,
      language,
      userid,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

// authentication
export async function createNewUser(email, firstname, lastname, password) {
  try {
    const response = await axios.post("/authentication/signup", {
      email,
      firstname,
      lastname,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post("/authentication/login", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

//notes
export async function getNoteData(problemid, authorid) {
  try {
    const response = await axios.post("/note", {
      problemid,
      authorid,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function writeNoteData(problemid, authorid, content) {
  try {
    const response = await axios.put("/note", {
      problemid,
      authorid,
      content,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

/*export async function getProblemData(problemid) {
  try {
    const response = await axios.get(URL + "/problem/" + problemid);
    return response.data;
  } catch (err) {
    throw err;
  }
}*/

/*export async function fetchAdminUserTable(){
    let user;
    try {
      user = await getUserDataFromDB(currentUser.email);
      setFirstname(user.firstname);

      const response = await axios.post(
        "http://127.0.0.1:5000/api/user/problems",
        {
          id: user.id,
        }
      );
      setTableData(response.data);
    } catch (err) {
      console.error(err);
    }
  }
}*/
