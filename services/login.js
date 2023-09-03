import api from "../api";

export async function login(identifier, password) {
  try {
    const { data } = await api({
      method: "post",
      url: "login",
      data: {
        email:identifier,
        password,
      },
    });

    if (data) {
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("id", data.id);
      localStorage.setItem("role", data.role);
      return true;
    }
  } catch (e) {
    console.log(e, "error");
    return false;
  }
}
