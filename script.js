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
function fungsiListPelaporan(){
    fetch('https://api.m3o.com/v1/notes/List', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer OGRiMzA5MGYtNTkxYy00ZDIxLTk4NzctM2UxODg0MjViMTUy'
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            if(data.notes.length>0){
                let list='';
                for(i=0;i<data.notes.length;i++){
                    list+=`
                        <div class="card mb-3 card-style">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3 text-center right-border">${new Date(data.notes[i].updated).toDateString()}</div>
                                    <div class="col-9">${data.notes[i].text}</div>
                                </div>
                            </div>
                        </div>
                    `
                }
                document.getElementById('list-laporan').innerHTML = list;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}