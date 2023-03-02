"use strict";

const btnFindIP = document.querySelector("#find-ip-btn");
const root = document.querySelector("#root");

const getIPAddress = async () => {
  const ip = await fetch("https://api.ipify.org/?format=json").then((res) =>
    res.json()
  );
  return ip;
};

const getIPInfo = async (ip) => {
  const ipInfo = await fetch(
    `http://ip-api.com/json/${ip}?fields=status,continent,country,region,regionName,city,district`
  ).then((res) => res.json());
  return ipInfo;
};

btnFindIP.addEventListener("click", async () => {
  try {
    const { ip } = await getIPAddress();
    const {status,continent,country,regionName,city,district} = await getIPInfo(ip);
    if(status==='success'){
      root.innerHTML = `
      <p>Континент: ${continent}</p>
      <p>Країна: ${country}</p>
      <p>Регіон: ${regionName}</p>
      <p>Місто: ${city}</p>
      <p>Район: ${district||"Відсутній район"}</p>
    `;
    }
  } catch (error) {
    console.error(error);
    root.innerHTML = `<p>Помилка: ${error.message}</p>`;
  }
});
