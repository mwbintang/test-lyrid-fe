import api from "../api";

export async function getImage(filename) {
  try {
    const access_token = localStorage.getItem("token");
    const res = await api({
      method: "get",
      url: `image/${filename}`,
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

export async function upload(img) {
  try {
    const res = await api({
      method: "post",
      url: `upload`,
      data: img,
    });
    const { data } = res;
    console.log(res, "dataaaa");
    return data;
  } catch (error) {
    console.log(error, "erroooor");
    return error;
  }
}
