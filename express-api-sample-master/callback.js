class bootcamp {
    
    isi(indomie){
        let lemari = [];
        lemari.push(indomie);
        console.log(lemari);
    }

    gojek() {
        setTimeout(() => {
            return 'indomie'
        }, 3000);
    }
    
    noval(callback) {
        isi(callback());
    }

    kita() {
        noval(gojek);
    }

    kita();
}