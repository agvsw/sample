
// function rekaman(musik){

// }
// function toko(musik, callback){
//     console.log('cari musik ' + musik);
//     setTimeout(function() {
//         let a = listBand.find(res => res == musik)
//         if(a){
//             callback(null, musik);
//         }else{
//             console.log('data tidak ada');
//         }
//     }, 3000);
// }
// function customer(){
//     console.log('ke toko');
//     toko(musik, (err, data) => {
//         if(err != null){
//             console.log('error')
//             rekaman(musik)
//         }else{
//             console.log('Order oke')
//         }
//     })
// }
// _____________________________________________________________________________________________
var listBand = ["a","b","c"];
function rekam(mus){
    console.log('rekaman ' + mus);
    setTimeout(() => {
     //   listBand.push(mus);
       // cus(mus);
    }, 3000);
}

function tokoMusic(music){
    return new Promise((resolve, rejects)=> {
        let a = listBand.find(res => music === res);
        if(a){
            resolve(a);
        }else{
            rejects(music);
        }
    })
}


async function cus(music){
    // let order = await tokoMusic(music).catch(rekam);
    // if(order){
    //     console.log(order);
    // }
    tokoMusic(music).then(
//        console.log
        res=>{
        let order = res
        if(order){
            console.log(order)
        }
    }
    )
    .catch(rekam)
}

cus('c');