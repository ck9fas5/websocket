export const userCheck = async (name) => {
  return new Promise(async (resolve, reject) => {
    let res = await fetch("/check_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    });
    res = await res.json();
    resolve(res);
  });
};

export const getMessage = async () => {
  return new Promise(async (resolve, reject) => {
    let res = await fetch("/get_message", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    res = await res.json();
    resolve(res);
  });
};
