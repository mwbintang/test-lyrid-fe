import api from "../api";

export async function getUserManagement() {
  try {
    const access_token = localStorage.getItem("token");
    const res = await api({
      method: "get",
      url: `userManagement`,
      headers: {
        access_token,
      },
    });
    const { data } = res;
    console.log(res, "dataaaa");
    return data;
  } catch (error) {
    console.log(error, "erroooor");
    return error;
  }
}

export async function getUserManagementById(id) {
  try {
    const access_token = localStorage.getItem("token");
    const res = await api({
      method: "get",
      url: `userManagement/${id}`,
      headers: {
        access_token,
      },
    });
    const { data } = res;
    console.log(res, "dataaaa");
    return data;
  } catch (error) {
    console.log(error, "erroooor");
    return error;
  }
}

export async function postDataUser(body) {
  try {
    const res = await api({
      method: "post",
      url: `employeeManagement/create`,
      data: body,
    });
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error, "erroooor");
    throw error;
  }
}

export async function editDataUser(body, id) {
  try {
    const access_token = localStorage.getItem("token");
    console.log(id, "test servis id");
    const res = await api({
      method: "put",
      url: `employeeManagement/edit/${id}`,
      data: body,
      headers: {
        access_token,
      },
    });
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error, "erroooor");
    throw error;
  }
}
