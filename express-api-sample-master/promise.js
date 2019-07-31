async function hrd(req) {
    if(req === 'adm'){
        return new Promise((resolve, reject) => {
            console.log('hard menerima lamaran')
            setTimeout(() => {
                if(req === 'adm'){
                    let hasil = 'Administrasi lulus';
                    resolve(hasil);
                }else if(req != 'adm') {
                    let hasil = 'Administrasi gagal';
                    reject(hasil);
                }
            }, 3000);
        })
    }
    if(req === 'psikotest'){
        console.log('Hrd ke user hasil psiko');
        hrdToUserAndPelamar();
    }
    if(req === 'interview lulus'){
        pelamar('lulus interview');
    }
}

async function hrdToUserAndPelamar(){
    let hasilUser = await user('test user').catch(console.log);
    if(hasilUser === 'lulus test'){
        setTimeout(() => {
            pelamar('lulus psikotest');
        }, 3000);
    }
}

function user(req){
    if(req === 'test user'){
        return new Promise((resolve, reject) => {
            console.log('user menerima dari hrd');
            setTimeout(() => {
                if(req === 'test user'){
                    let hasil = 'lulus test';
                    resolve(hasil);
                }else if(req != 'test user'){
                    let hasil = 'tidak lulus';
                    reject(hasil);
                }
            }, 3000);
        })
    }
    if(req === 'interview'){
        setTimeout(() => {
            console.log('user menerima pelamar untuk interview');
            hrd('interview lulus');
        }, 1000);
    }
}

function psikotest(){
    setTimeout(() => {
        hrd('psikotest');
    }, 3000);
}

function kantor(){
    setTimeout(() => {
        console.log('Selamat datang di kantor');
    }, 3000);
}

async function pelamar(res) {
    if(res === 'lulus psikotest'){
        console.log('lulus psikotes dan interview ke user');
        setTimeout(() => {
            console.log('Mau interview nih ke user');
            user('interview');
        }, 2000);
    }else if(res === 'lulus interview'){
        console.log('lulus interview dan ke kantor');
        kantor();
    }
    else if(!res){
        let adm = await hrd('adm').catch(console.log);
        console.log(adm);
        if(adm === 'Administrasi lulus'){
            psikotest();
        }
    }
}

pelamar();
