function fungsiKirimkan(){
    const nama = document.getElementById('nama').value;
    const nomortelepon = document.getElementById('nomortelepon').value;
    const tanggallahir = document.getElementById('tanggallahir').value;
    const kronologikejadian = document.getElementById('kronologikejadian').value;

    if(nama && nomortelepon && tanggallahir && kronologikejadian){
        const data = {title:`${nama}|${nomortelepon}|${tanggallahir}`, text: kronologikejadian};
        fetch('https://api.m3o.com/v1/notes/Create', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer OGRiMzA5MGYtNTkxYy00ZDIxLTk4NzctM2UxODg0MjViMTUy'
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            window.location = "./list-form.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    } 
}