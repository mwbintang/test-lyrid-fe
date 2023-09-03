import api from "../api";

export async function getEmployeeManagement() {
  try {
    const res = await api({
      method: "get",
      url: `employeeManagement`,
      headers: {
        access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImVtcGxveWVlX21hbmFnZW1lbnQiLCJpYXQiOjE2OTM3MTIwMTR9.VmXoWoHDCjhiWOLU1sR_rVxgCqNbWF1IBatbkEjWPyY`,
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
    console.log(id, "test servis id");
    const res = await api({
      method: "get",
      url: `employeeManagement/${id}`,
      headers: {
        access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImVtcGxveWVlX21hbmFnZW1lbnQiLCJpYXQiOjE2OTM3MTIwMTR9.VmXoWoHDCjhiWOLU1sR_rVxgCqNbWF1IBatbkEjWPyY`,
      },
    });
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error, "erroooor");
    throw error;
  }
}
