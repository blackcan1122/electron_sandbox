const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`


const func = async () => 
{
  console.log("Pinging from renderer...")
  const response = await window.versions.ping()
  console.log(response)
  alert(`Received response: ${response}`)
}

func()