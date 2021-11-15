const buildTower = floors => {
    let stars = 1;
    let spaces = (floors*2)-2
    let tower = [];
    let floor = '';
    for(let i = 0; i < floors; i++){
        for(let x = 0; x < (spaces/2); x++){
            floor += " "
        }
        for(let j = 0; j < stars; j++){
            floor += "*"
        }
        for(let n = 0; n < (spaces/2); n++){
            floor += " "
        }
        tower.push(floor)
        spaces -= 2;
        stars += 2;
        floor = '';
    }
    for(let i = 0; i < floors; i++){
        console.log(tower[i]);
    }
}


buildTower(3);