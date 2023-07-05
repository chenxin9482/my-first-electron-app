const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // 打印 'pong'
  const information = document.getElementById("info");
  information.innerText = `本应用 (v${response})使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;
};

func();
