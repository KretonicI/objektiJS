var auto = {
    boja : 'crna',
    marka: {tip: 'BMW', model: 'ff30'},
    cijena: 22000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzanje: function(vrijeme) {
        //this.brzina = vrijeme * 5;
        //return this.brzina; 
        let tmpvrijeme = 0;
        while(this.brzina <= this.maxBrzina){
            this.brzina = this.brzina +5;
            if (tmpvrijeme == vrijeme) {
                break;
            }
        tmpvrijeme ++;
    }
    return this.brzina++;
    },

    zakoci: function(vrijeme) {
    //return vrijeme / 5;
    while (this.brzina >= 0) {
        this.brzina = this.brzina - 20;
        vrijeme--;
        if (vrijeme ==0 || this.brzina == 0) {
            break;
        }
    }
    return this.brzina;

    },
    promijeniBoju: function (novaBoja){
        this.boja = novaBoja
        return this.boja;
    },
}
console.log("auto JSON --> " + JSON.stringify(auto));

console.log("Početna brzina: " + auto.brzina);
console.log("Auto će  ubrzati na: " + auto.ubrzanje(2));
console.log("Brzina nakon ubrzanja: " + auto.brzina);

console.log(auto.zakoci(10));

console.log("trenutna boja auta je: " + auto.boja);

for (kljuc in auto) {
    let tmpkljuc = auto [kljuc];
    if (typeof tmpkljuc == "number"){
        console.log (kljuc + " : " + tmpkljuc);
    }
}
