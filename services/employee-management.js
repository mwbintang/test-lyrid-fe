import api from "../api";

export async function getEmployeeManagement() {
  try {
    const access_token = localStorage.getItem("token");
    console.log(access_token, "acceeeeees");
    const res = await api({
      method: "get",
      url: `employeeManagement`,
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

export async function getEmployeeManagementById(id) {
  try {
    const access_token = localStorage.getItem("token");
    console.log(id, "test servis id");
    const res = await api({
      method: "get",
      url: `employeeManagement/${id}`,
      headers: {
        access_token,
      },
    });
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error, "erroooor");
    return error;
  }
}

export async function postDataEmployee(body) {
  try {
    console.log(body);
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

export async function editDataEmployee(body, id) {
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
